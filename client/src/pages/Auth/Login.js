import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/authStyle.css";
import { useAuth } from "../../context/AuthContext";

function Login() {
  // states for getting value and store into it

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (result && result.data.success) {
        toast.success(result.data && result.data.message);
        setAuth({
          ...auth,
          user: result.data.user,
          token: result.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(result.data));
        navigate("/");
      } else {
        toast.error(result.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went wrong");
    }
  };

  return (
    <Layout title={"login  -Ecom app"}>
      <div className="form-container">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
