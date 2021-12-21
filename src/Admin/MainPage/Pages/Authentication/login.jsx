import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminLogo } from '../../../imagepath'
import { withRouter, useHistory } from 'react-router-dom'
import { Admin_login } from '../../../Api/Login'
const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const login = (e) => {
    e.preventDefault()
    Admin_login({ email, password }, history)
  }

  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img className="img-fluid w-50" src={AdminLogo} alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Form */}
                <form onSubmit={login}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className={`btn btn-primary btn-block ${
                        email == '' || password == '' ? 'disabled' : ''
                      } `}
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
                {/* /Form */}
                <div className="text-center forgotpass">
                  <Link to="/admin_forgot-password">Forgot Password?</Link>
                </div>
                <div className="login-or">
                  <span className="or-line" />
                  <span className="span-or">or</span>
                </div>
                {/* Social Login */}
                <div className="social-login">
                  <span>Login with</span>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="google">
                    <i className="fa fa-google" />
                  </a>
                </div>
                {/* /Social Login */}
                <div className="text-center dont-have">
                  Don’t have an account?{' '}
                  <Link to="/admin_register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)
