import React, { useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    HashRouter,
} from "react-router-dom";
import App from "./app-universal.jsx";
import "react-phone-number-input/style.css";
import config from "config";
import {Provider} from "react-redux";
import Store, {dispatch} from "./redux/store.js";
import axios from "axios";
import * as t from "./redux/types";
import Loading from "./Home/components/Loading/Loading";

const MainApp = (props) => {
    const {history} = props;
    const token = localStorage.getItem('token');
    const role = localStorage.getItem("role");
    const [url, setUlr] = useState(role === "student" ? "student/student-me" : "teacher/teacher-me");
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const author = () => {
        if (token === "" || token == null || token === undefined) {
            // history.push("app/home");
            setLoading(false);
        } else {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const bodyParameters = {};
            axios.post(url, bodyParameters, config).then((res) => {
                localStorage.setItem('role', res.data.role)
                const action = {type: t.AUTHOR, payload: res.data};
                dispatch(action);
                setLoading(false);
                if (res.status >= 200) {
                    history.push("app/home");
                }
            }).catch(err => {
                console.log(err.message)
            });
        }
    }
    useEffect(() => {
        author();
    }, []);
    return (
        <Provider store={Store}>
            <Router>
                <Switch>
                    {loading ? <Loading/> : <Route path="/" component={App}/>}
                </Switch>
            </Router>
        </Provider>
    )
}

export default MainApp;
