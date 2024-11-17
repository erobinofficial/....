import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = ()=>{}
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content rounded-lg">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl border-2">
            <h1 className="text-center font-bold text-2xl pt-4 text-blue-700">
              Login
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
           
            
            <p className="text-center pb-4">
              Don't have account?
              <Link className="text-blue-700 ml-3 font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
