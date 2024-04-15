import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';


const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [againpassword, setAgainpassword] = useState("")
  const [alert, setAlert] = useState("")
  const [text, setText] = useState("")
  const navigate = useNavigate();

  const toggleLang =(lang)=> {
    i18n.changeLanguage(lang)
  }
  const {t} = useTranslation()

  const registerSubmit = e=>{
    e.preventDefault();
    
    if (!firstname || !lastname || !email || !password || !againpassword) {
      setAlert("danger")
      setText("Please fill the input")
    } else {
      if (password === againpassword) {
      localStorage.setItem("firstname", firstname)
      localStorage.setItem("lastname", lastname)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      localStorage.setItem("againpassword", againpassword)
      navigate("/login")
      } else {
        setAlert("warning")
        setText("password is different")
      }
    }
  }


  return (
    
    <>
          <section>
        <div className='register-main'>
          <div className='content'>
            <h1 className='card-title fw-bold display-4'>{t("register.0")}</h1>

          </div>
        </div>
      </section>
    <div style={{ height: "100vh" }}>
    <div className="d-flex flex-column w-100 align-items-center justify-content-center">
      <h1 className="mt-5">{t("register.1")}</h1>
      <div className="col-6">
        <form onSubmit={registerSubmit}>
        
        <div className="mb-3">
              <div class={`alert alert-${alert}`} role="alert" className='p-0'>
              {text}
              </div>
              <label className="form-label">{t("register.2")}</label>
              <input onChange={e=>setFirstname(e.target.value)} type="text" className="form-control input"
              />
            </div>
          <div className="mb-3">
            <label className="form-label">{t("register.3")}</label>
            <input onChange={e=> setLastname(e.target.value)} type="text" className="form-control input" />
          </div>

          <div className="mb-3">
            <label className="form-label">{t("register.4")}</label>
            <input onChange={e=> setEmail(e.target.value)} type="email" className="form-control input" />
          </div>

          <div className="mb-3">
            <label className="form-label">{t("register.5")}</label>
            <input onChange={e=> setPassword(e.target.value)} type="password" className="form-control input" />
          </div>
          <div className="mb-3">
            <label className="form-label">{t("register.6")}</label>
            <input onChange={e=> setAgainpassword(e.target.value)} type="password" className="form-control input" />
          </div>
          <p><Link to="/login" className='text'>{t("register.7")}</Link></p>

          <button type="submit" className="submit">
          {t("register.8")}
          </button>
        </form>
      </div>
    </div>
  </div>
    </>
  )
}

export default Register