import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import { Button } from "../buttons/Button";
import "./Auth.css";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://tomatimer.herokuapp.com/users/register", newUser);
      const loginRes = await Axios.post("http://tomatimer.herokuapp.com/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="auth-container">
      <div className="register">
        <div className="reg-screen">
          <div className="reg-title">
            <h2>Register</h2>
            {error && (
              <ErrorNotice
                message={error}
                clearError={() => setError(undefined)}
              />
            )}
          </div>
          <form className="register-form" onSubmit={submit}>
            <div className="control-group">
              <label htmlFor="register-email" className="form-label">
                Email
              </label>
              <br></br>
              <input
                className="form-input"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="control-group">
              <label htmlFor="register-password" className="form-label">
                Password
              </label>
              <br></br>
              <input
                className="form-input"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div className="control-group">
              <label htmlFor="register-password" className="form-label">
                Verify password
              </label>
              <br></br>
              <input
                className="form-input"
                type="password"
                placeholder="Verify password"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </div>
            <div className="control-group">
              <label htmlFor="register-display-name" className="form-label">
                Display name
              </label>
              <br></br>
              <input
                className="form-input"
                type="text"
                placeholder="display name"
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className="auth-btn">
              <Button buttonStyle="btn--outline">submit </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
