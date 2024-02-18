import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Your Expense App!</h1>
        <p className="lead">Track and manage your expenses with ease.</p>
        <hr className="my-4" />
        <p>Get started by creating your first expense.</p>
        <Link to="/expense" className="btn btn-primary btn-lg">
          Create Expense
        </Link>
      </div>
    </div>
  );
};

export default Home;
