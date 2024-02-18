import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  async function handleSignOut() {
    try {
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success) {
        dispatch(logout());
        toast.success(data.message);
        navigate("/sign-in");
      }
    } catch (error) {
      toast.error("Error signing out");
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="card-title">Profile</h1>
              <p className="card-text">Name: {user?.username}</p>
              <p className="card-text">Email: {user?.email}</p>
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
