/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-05 14:39:32
 * @LastEditTime: 2019-06-05 17:22:51
 * @LastEditors: Please set LastEditors
 */

// 权限校验的router
// 参考地址:https://codepen.io/bradwestfall/project/editor/XWNWge?preview_height=50&open_file=src/app.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { getLoggedUser } from "./utils/xhr";

class AuthorizedRoute extends React.Component {
    componentWillMount() {
        // getLoggedUser();
    }

    render() {
        const { component: Component, logged, ...rest } = this.props;
        console.log(this.props);
        return (
            <Route
                {...rest}
                render={props => {
                    return logged ? <Component {...props} /> : <Redirect to="/login" />;
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    logged: state.user.isLogin
});

export default connect(mapStateToProps)(AuthorizedRoute);
