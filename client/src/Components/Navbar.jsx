import { Link } from "react-router-dom";
import expense from "../assets/logo-expense-small.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={expense} alt="Expense" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarColor01">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/expense">
                Expense
              </Link>
            </li>
            {user == null ? (
              <li className="nav-item">
                <Link className="nav-link" to="sign-in">
                  Sign In
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  profile
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
