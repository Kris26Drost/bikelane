import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
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
    <div className="mx-auto max-w-md p-5 bg-white rounded-lg border-2 border-cultured m-10">
      <h1 className="text-3xl font-semiboldp p-5 text-center">Login</h1>
      <div className="container">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label>
              Din email:
              <input
                type="email"
                name="email"
                placeholder="Din email"
                className="mt-1 p-2 w-full border rounded"
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
                className="mt-1 p-2 w-full border rounded"
                required
              />
            </label>
          </div>
          <div className="flex justify-end">
          <button
            type="submit"
            className="bg-safety-orange-blaze-orange text-white cursor-pointer p-2 px-3 rounded "
          >
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
