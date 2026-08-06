import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import { useState } from "react";
import { defaultPost, type Post } from "../../../interfaces/Post";
import axios from "axios";

function PostCreate() {
  const [post, setPost] = useState<Post>(defaultPost);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState({
    title: "",
    body: "",
  });

  function handleSubmit() {
    let newError: any = {};
    // Title validation
    if (post.title == "") {
      newError.title = "Title is required";
    } else if (post.title.length > 100 || post.title.length < 3) {
      newError.title = "Title must be between 3 and 100 characters";
    } else {
      newError.title = "";
    }

    // Name validation
    if (post.body == "") {
      newError.body = "body is required";
    } else {
      newError.body = "";
    }

    setError(newError);

    if (error.title === "" && error.body === "") {
      axios
        .post("https://jsonplaceholder.typicode.com/Posts/", post)
        .then(function (res) {
          console.log(res.data);
          setPost(res.data);
          setMsg("🥳Post failed to Create Unsuccessfully");
          // location.href='/post'
        })
        .catch(function (err) {
          console.log(err);
          setMsg("😥Post Created Unsuccessfully");
        });
    }

    // console.log(post);
  }

  return (
    <>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading
            icon="person-plus"
            subtitle="Management"
            title="Add Posts"
            desc="Create a new post account with role and team assignments."
          >
            <Link className="btn btn-outline-secondary btn-sm" to="/post">
              <i className="bi bi-arrow-left" aria-hidden="true"></i> Back to
              List
            </Link>
          </PageHeading>

          <section className="row g-3">
            <div className="col-12">
              {/* Alert */}
              {msg !== "" && (
                <div className="alert alert-success" role="alert">
                  {msg}
                </div>
              )}
              <form className="panel needs-validation">
                <input type="hidden" value={post.userId} />
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label" htmlFor="postTitle">
                      Post Title
                    </label>
                    <input
                      className="form-control"
                      id="postTitle"
                      type="text"
                      required
                      name="name"
                      value={post.title}
                      onChange={(e) => {
                        setPost({ ...post, title: e.target.value });
                      }}
                    />
                    <small className="text-danger">{error.title}</small>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="email">
                      Post Content
                    </label>
                    <textarea
                      className="form-control"
                      id="email"
                      value={post.body}
                      onChange={(e) => {
                        setPost({ ...post, body: e.target.value });
                      }}
                      required
                    ></textarea>
                    <small className="text-danger">{error.body}</small>
                  </div>
                </div>

                <div className="d-flex flex-wrap justify-content-end gap-2 mt-4">
                  <button className="btn btn-outline-secondary" type="reset">
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create New
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default PostCreate;
