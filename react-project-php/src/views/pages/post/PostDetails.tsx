import { Link, useParams } from "react-router";
import PageHeading from "../../../components/PageHeading";
import axios from "axios";
import { useEffect, useState } from "react";
import { type Post, defaultPost } from "../../../interfaces/Post";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState<Post>(defaultPost);
  // const [post, setPost] = useState<any>();
  const [user, setUser] = useState<any>();
  const [comments, setComments] = useState<any>();

  function getData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(function (res) {
        setPost(res.data);
        console.log(res.data);
        // console.log(post);
        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${res.data.userId}`,
        );
      })
      .then(function (res) {
        setUser(res.data);
        console.log(res.data);
      })
      .then(function () {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          .then(function (res) {
            console.log(res.data);
            setComments(res.data);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  // getData();
  return (
    <>
      <main className="dashboard-content">
        <h1>{id}</h1>
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading
            icon="people"
            subtitle="Management"
            title="Users Details"
            desc="Inspect account status, profile data, permissions, and recent activity."
          >
            {/* <div className="heading-actions"> */}
            <Link className="btn btn-outline-secondary btn-sm" to="/post">
              <i className="bi bi-arrow-left" aria-hidden="true"></i> Back to
              List
            </Link>
            <Link className="btn btn-primary btn-sm" to="/post-create">
              <i className="bi bi-person-plus" aria-hidden="true"></i> Add New
            </Link>
            {/* </div>  */}
          </PageHeading>
          <section className="row g-3">
            <div className="col-12 col-xl-4">
              <div className="panel h-100 text-center profile-card">
                <div className="profile-cover">
                  <img
                    src="https://picsum.photos/300/300"
                    alt="User workspace preview"
                  />
                </div>
                <div className="profile-hero">
                  <img
                    className="avatar-img avatar-xl profile-photo"
                    src={`https://i.pravatar.cc/${150+ (user?.id ?? 0)}`}
                    alt="Sarah Ahmed"
                  />
                  <h2 className="h5 mb-1">{user?.name ?? "loading.."}</h2>
                  <h2 className="h6 mb-1">{user?.username ?? "loading.."}</h2>
                  <h2 className="h6 mb-1">{user?.email ?? "loading.."}</h2>
                  <h2 className="h6 mb-1"> {user?.phone ?? "loading.."}</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="panel mb-3">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i
                        className="bi bi-person-lines-fill"
                        aria-hidden="true"
                      ></i>
                      <span>{post?.title ?? "loading.."}</span>
                    </h2>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="mini-card">
                      <div>{post?.body ?? "loading.."}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i className="bi bi-clock-history" aria-hidden="true"></i>
                      <span>Comments</span>
                    </h2>
                    <p className="text-muted mb-0">Comments of this post</p>
                  </div>
                </div>
                <div className="activity-list">
                  {comments &&
                    comments.map((comment: any) => (
                      <div key={comment.id} className="activity-item">
                        <span className="activity-dot bg-primary"></span>
                        <div>
                          <p className="mb-1 fw-semibold">{comment.name}</p>
                          <p className="text-muted small mb-0">
                            {comment.email}
                          </p>
                          <p>{comment.body}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default PostDetails;
