import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <>
      <div className="login-wrapper">
        <div className="login-container">
            <div className="row">
              <div className="col-md-6 login-content-1">
                  <figure className="logo">
                      <img src="images/loginImg2.png"/>
                  </figure>
              </div>
              <div className="col-md-6 login-content-2">
                <div className="form-bx login-form show">
                    <h2>Login to account</h2>
                    <form action="Dashboard">
                      <div className="form-group">  
                           <label>Email</label>
                           <input type="email" autofocus=""/>
                      </div>
                      <div className="form-group">
                         <label>Password</label>
                          <input type="password"/>
                      </div>
                      <div className="form-group forgot-pwd">
                            <label className="checkbox leftlabel"><input type="checkbox"/><i className="input-helper" ></i>Remember me</label>
                            <Link  id="moveleft" className="linkright flip-change">Forgot password? </Link>
                      </div>	
                      <div className="form-group">
                          <button type="submit" className="submit button"><span></span>Log In</button>
                      </div>
                  </form>
                </div>
                
              </div>					
            </div>
        </div>
      </div>
   </>
  )
}

export default Login