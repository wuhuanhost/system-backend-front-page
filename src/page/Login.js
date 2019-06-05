import React from "react";
// import "./Login.css";
// import { login } from "../../mock/mock";
import { Form, Icon, Input, Button } from "antd";
import { userLogin } from "../actions";
import { connect } from "react-redux";
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: "", userPassword: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeUserPassword = this.handleChangeUserPassword.bind(this);
    }
    handleSubmit = e => {
        e.preventDefault();
        // alert(this.state.userName + "  " + this.state.userPassword);
        const { login } = this.props;
        login({ isLogin: true });
        this.props.history.push({
            pathname: "/app"
        });
        // 修改状态
    };

    // 获取用户名
    handleChangeUserName(event) {
        this.setState({ userName: event.target.value });
    }

    // 获取密码
    handleChangeUserPassword(event) {
        this.setState({ userPassword: event.target.value });
    }

    render() {
        console.log(this);
        // const { login } = this.props;
        return (
            <div style={{ width: "600px", margin: "40px auto" }}>
                <Form className="login-form">
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="用户名" onChange={this.handleChangeUserName} />
                    </FormItem>
                    <FormItem>
                        <Input type="password" prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="密码" onChange={this.handleChangeUserPassword} />
                    </FormItem>
                    <Button type="primary" onClick={this.handleSubmit}>
                        登录
                    </Button>
                    {/* <Button type="primary" onClick={() => login({ isLogin: true })}>
                        登录
                    </Button> */}
                </Form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isLogin: state.user.isLogin
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(userLogin(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
