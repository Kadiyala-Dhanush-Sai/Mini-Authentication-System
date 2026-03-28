import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="#">MyApp</a>

        <div className="ms-auto">
          <button
            className="btn btn-outline-light me-2"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center mt-5">
        <h1 className="display-4 fw-bold">
          Welcome to My App 🚀
        </h1>

        <p className="lead mt-3">
          Build your future with modern web development.
        </p>

        <div className="mt-4">
          <button
            className="btn btn-success btn-lg me-3"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>

          <button
            className="btn btn-outline-secondary btn-lg"
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h5>Fast</h5>
              <p>Lightning fast performance using React.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h5>Secure</h5>
              <p>Your data is safe with our system.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h5>Easy</h5>
              <p>Simple and user-friendly interface.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;