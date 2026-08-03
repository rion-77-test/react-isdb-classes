import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import { useEffect, useState } from "react";
import { defaultUser, type User } from "../../../interfaces/User";

function UserCreate() {
  const [user, setUser] = useState<User>(defaultUser);
  const [error, setError] = useState({
    name: "",
    email: "",
    role_id: "",
    password: "",
  })

  // useEffect

  // function updateUser(e:any) {
  //   setUser({...user, 
  //     [e.target.name]: e.target.value})
  // } 

  function handleSubmit() {
    let newError:any = {}
    // Name validation
    if(user.name == "") {
      newError.name = "Name is required"
    } else if (user.name.length > 100 || user.name.length < 3) {
       newError.name = "Name must be between 3 and 100 characters"
    } else {
      newError.name = ""
    }

    // Name validation
    if(user.email == "") {
      newError.email = "Email is required"
    } else {
      newError.email = ""
    }
   setError(newError)    
  //  setError({...error ,...newError})    
  }

  return (
    <>
     <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading
            icon="person-plus"
            subtitle="Management"
            title="Add Users"
            desc="Create a new user account with role and team assignments."
          >   
              <Link className="btn btn-outline-secondary btn-sm" to="/user">
                <i className="bi bi-arrow-left" aria-hidden="true"></i> Back to
                List
              </Link>  
          </PageHeading>

          <section className="row g-3">
            <div className="col-12">
              <form className="panel needs-validation">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="firstName">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="firstName"
                      type="text"
                      required
                      name="name"
                      value={user.name}
                      onChange={(e)=> {setUser({...user, name: e.target.value})}}
                      // onChange={updateUser}
                    />
                    <small className="text-danger">{error.name}</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      value={user.email}
                      onChange={(e)=> {setUser({...user, email: e.target.value})}}
                      required
                    />
                    <small className="text-danger">{error.email}</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="role">
                      Role
                    </label>
                    <select className="form-select" id="role" required  value={user.role_id}
                    onChange={(e)=> {setUser({...user, role_id: Number(e.target.value)})}}
                    >
                      <option value={0} disabled>Choose a role</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Manager</option>
                      <option value={3}>Editor</option>
                      <option value={4}>Viewer</option>
                    </select>
                    {/* <small className="text-danger">{error.email}</small> */}
                    <div className="invalid-feedback">{error.role_id}</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      value={user.password}
                      onChange={(e)=> {setUser({...user, password: e.target.value})}}
                      required
                    />
                    <small className="text-danger">{error.password}</small>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-end gap-2 mt-4">
                  <button className="btn btn-outline-secondary" type="reset">
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="button" onClick={handleSubmit}>
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

export default UserCreate;
