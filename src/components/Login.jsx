import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

// components
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const { user, signIn } = useContext(LoginContext);

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password);
  };

  return (
    <section className="md:pt-60 md:p-10 p-5 pt-40 pb-40">
      <div className=" max-w-md p-3 mx-auto bg-white border-2 rounded-lg">
        <h1 className="font-semiboldp m-10 text-3xl text-center">Login</h1>
        <div className="md:container">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col">
              <label>
                Din email:
                <input
                  type="email"
                  name="email"
                  placeholder="Din email"
                  className="w-full p-2 mt-1 border rounded"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="block mt-4">
                Dit adganskode:
                <input
                  type="password"
                  name="password"
                  placeholder="Dit password"
                  className="w-full p-2 mt-1 border rounded"
                  required
                />
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary  p-2 px-3 text-white rounded cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-end m-1 text-sm">
          <p className="text-silver italic">
            Login for at kom ind på admin sidden
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
