import React from "react";
import "./style/Home.scss";
import Login from "./page/Login";
import NotFound from "./page/404";
import AppLayout from "./page/Layout";
import AuthorizedRoute from "./AuthorizedRoute.js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class AppRoot extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Redirect from="/" exact to="/login" />
                        {/*注意redirect转向的地址要先定义好路由*/}
                        <AuthorizedRoute path="/app" component={AppLayout} />
                        {/* <Route path="/app" component={AppLayout} /> */}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AppRoot;
