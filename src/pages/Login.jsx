import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const admin = {
    firstname: "Admin",
    email: "narmin@123",
    password: "narmin123"
  };

  const toggleLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const user = registeredUsers.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("login", "true");
      localStorage.setItem("activeUser", JSON.stringify(user));
      console.log(user);
      navigate("/products");
    } 
    else if (admin.email === email && admin.password === password) {
      localStorage.setItem("email", JSON.stringify(admin.email));
      localStorage.setItem("password", JSON.stringify(admin.password));
      navigate("/products");
    } 
    else {
      setAlert("warning");
      setText("email or password is wrong");
    }
  };

  return (
    <>
      <section>
        <div className='login-main'>
          <div className='content'>
            <h1 className='card-title fw-bold display-4'>{t("login.0")}</h1>
          </div>
        </div>
      </section>
      <div style={{ height: "80vh" }}>
        <div className="d-flex flex-column w-100 align-items-center justify-content-center">
          <h1 className="mt-5">{t("login.1")}</h1>
          <div className="col-6">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                {text && (
                  <div className={`alert alert-${alert}`} role="alert">
                    {text}
                  </div>
                )}
                <label className="form-label">{t("login.2")}</label>
                <input
                
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">{t("login.3")}</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control input"
                />
              </div>
              <p><NavLink to={"/register"} className="text">{t("login.4")}</NavLink></p>
              <p><NavLink to={"/forgotpassword"} className="text">{t("login.5")}</NavLink></p>
              <button type="submit" className="submit">
                {t("login.6")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
