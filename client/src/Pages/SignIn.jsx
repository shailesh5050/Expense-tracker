import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure, loginStart } from "../redux/userSlice";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
    dispatch(loginStart());
    const response = await fetch("/api/auth/signin", requestOptions);
    const data = await response.json();
    if (!data.success) {
      alert(data.message);
      dispatch(loginFailure());
    } else {
      alert(data.message);
      dispatch(loginSuccess(data));
      setUser({ email: "", password: "" });
      navigate("/expense");
    }
  }
  return (
    <div className="row">
      <div className="col-4 offset-4">
        <form onSubmit={handleSubmit}>
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

export default SignIn;
