import React, {Component, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomeLayout from './Home/homelayout.jsx';
import Login from './Home/Authentication/login';
import Register from './Home/Authentication/register';
import Forgotpassword from './Home/Authentication/forgotpassword';

//Admin Layout
import AdminLayout from './Admin/initialpage/Sidebar/DefaultLayout';
import AdminLogin from './Admin/MainPage/Pages/Authentication/login';
import AdminRegister from './Admin/MainPage/Pages/Authentication/register';
import AdminForgotpassword from './Admin/MainPage/Pages/Authentication/forgotpassword';
import LockScreen from './Admin/MainPage/Pages/Authentication/lockscreen';
import Home from "./Home/Home_";
import axios from "axios";
import * as t from "./redux/types";
import {dispatch} from "./redux/store";
 const AppUniversal = () => {

	const author = () => {
		const token = localStorage.getItem('token')
		const config = {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		}
		const bodyParameters = {
			key: "value"
		};
		axios.post("http://teach-api.uz/teach-api/public/api/teacher/teacher-me", bodyParameters, config).then((res) => {
			setData(res.data);
		}).catch(err => console.log(err.message));
	}
	const autorizationUser = () => {
		const action = {type: t.AUTHOR, payload: data};
		dispatch(action);
	}
	useEffect(() => {
		author();
		if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
			|| location.pathname.includes("otp")|| location.pathname.includes("lockscreen") ) {
			$('body').addClass('account-page');
		}else if (location.pathname.includes("error-404") || location.pathname.includes("error-500") ) {
			$('body').addClass('error-page');
		}else if (location.pathname.includes("chat")  ) {
			$('body').addClass('chat-page');
		}
	}, []);
	useEffect(() => {
		autorizationUser();
		console.log(data)
	}, [data]);
		const { location, match } = this.props;
		if (location.pathname === '/') {
			return (<Redirect to={'/app/home'} />);
	  	}
		return (
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
			</Switch>
	
		);
}
export default AppUniversal;