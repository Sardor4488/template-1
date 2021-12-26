import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import HomeLayout from './Home/homelayout.jsx'
import Login from './Home/Authentication/login'
import Register from './Home/Authentication/register'
import Forgotpassword from './Home/Authentication/forgotpassword'
//Admin Layout
import AdminLayout from './Admin/initialpage/Sidebar/DefaultLayout'
import AdminLogin from './Admin/MainPage/Pages/Authentication/login'
import AdminRegister from './Admin/MainPage/Pages/Authentication/register'
import AdminForgotpassword from './Admin/MainPage/Pages/Authentication/forgotpassword'
import LockScreen from './Admin/MainPage/Pages/Authentication/lockscreen'
import Loading from './Home/components/Loading/Loading.js'
import { useSelector } from 'react-redux'
import { LoadingOff, LoadingOn } from './redux/Actions.js'
import { UserAuth } from './Api/index.js'
import Page404 from './Home/components/Page404/page404.js'
const AppUniversal = (props) => {
  const { location } = props
  const history = useHistory()
  const [path, setPath] = useState('')
  useEffect(() => {
    LoadingOff()
    UserAuth(setPath, history)
    if (
      location.pathname.includes('login') ||
      location.pathname.includes('register') ||
      location.pathname.includes('forgotpassword') ||
      location.pathname.includes('otp') ||
      location.pathname.includes('lockscreen')
    ) {
      $('body').addClass('account-page')
    } else if (
      location.pathname.includes('error-404') ||
      location.pathname.includes('error-500')
    ) {
      $('body').addClass('error-page')
    } else if (location.pathname.includes('chat')) {
      $('body').addClass('chat-page')
    }
  }, [])
  const loading = useSelector((state) => state.Reducer.loading)
  return (
    <>
      {loading && <Loading />}
      <Switch>
        <Route path="/app" component={HomeLayout} />
        <Route path="/admin" component={AdminLayout} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={Forgotpassword} />

        <Route path="/admin_login" component={AdminLogin} />
        <Route path="/admin_register" component={AdminRegister} />
        <Route path="/admin_forgot-password" component={AdminForgotpassword} />
        <Route path="/lock-screen" component={LockScreen} />
        <Route exact path="/">
          <Redirect to={path} />
        </Route>
        <Route path={'/404'} component={Page404} />
      </Switch>
    </>
  )
}
export default AppUniversal
