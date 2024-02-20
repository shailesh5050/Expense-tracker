import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SIgnUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    //api call using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    const response = await fetch("/api/auth/signup", requestOptions);
    const data = await response.json();
    if (!data.success) {
      toast.error(data.message);
      setUser({ username: "", email: "", password: "" });
    } else {
      toast.success(data.message);
      setUser({ username: "", email: "", password: "" });
      navigate("/sign-in");
    }
  }
  return (
    <div className="row container-fluid">
      <div className="col-md-4 col-sm-12 offset-md-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-4">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby=""
              placeholder="Enter Username"
              data-listener-added_34cb197d="true"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              value={user.username}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-4">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              data-listener-added_34cb197d="true"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              value={user.email}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              data-listener-added_34cb197d="true"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              value={user.password}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Sign Up
          </button>
          <div className="mt-4">
            <Link to="/sign-in">Already have an account? Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SIgnUp;
