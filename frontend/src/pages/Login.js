import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const loginUser = async () => {

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    try {

      const response =
        await axios.post(
          "http://127.0.0.1:5000/api/auth/login",
          {
            email,
            password
          }
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert(
        "Login Successful"
      );

      navigate(
        "/dashboard"
      );

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>
        Appointment Booking System
      </h1>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <br /><br />

      <button
        onClick={loginUser}
      >
        Login
      </button>

      <p>
        Don't have an account?

        <Link to="/register">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;