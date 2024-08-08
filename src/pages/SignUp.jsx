import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Styling/pages/Login.css';
import { useNavigate } from "react-router-dom";
import config from "../config/config";

const Signup = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(config.backendURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        navigate("/home");
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error("Error Signing up to the system user");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleAddUser}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="login-button" >Sign Up</button>
        </form>
        <br />
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
