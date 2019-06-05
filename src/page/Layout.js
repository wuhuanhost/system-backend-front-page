import { Layout, Menu, Icon } from "antd";
import React from "react";
import "../style/Home.scss";
import ADD from "../containers/ADD";
import ToDo from "../containers/TodoList";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
class AppLayout extends React.Component {
    rootSubmenuKeys = ["sub1", "sub2", "sub4"];

    constructor(props) {
        super(props);
        this.state = {
            openKeys: ["sub1"],
            collapsed: false
        };

        this.onOpenChange = this.onOpenChange.bind(this);
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Router>
                <Layout id="components-layout-demo-custom-trigger">
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed ? 1 : 0} width={256} collapsedWidth={80}>
                        <div className="logo" />
                        <Menu mode="inline" theme="dark" defaultOpenKeys={["sub1"]} defaultSelectedKeys={["1"]} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
                            <SubMenu
                                collapsed={this.state.collapsed ? 1 : 0}
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>Navigation One</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1">
                                    <Link to="/app/test">文件系统</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/app/test1">文件系统</Link>
                                </Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>Navigation Two</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>Navigation Three</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>

                    <Layout>
                        <Header style={{ background: "#fff", padding: 0 }}>
                            <Icon className="trigger" type={this.state.collapsed ? "menu-unfold" : "menu-fold"} onClick={this.toggle} />
                        </Header>
                        <Content
                            style={{
                                margin: "24px 16px",
                                padding: 24,
                                background: "#fff",
                                minHeight: 280
                            }}
                        >
                            Content
                            {/* <ADD />
                            <ToDo /> */}
                            <Switch>
                                <Route path="/app/test" component={ADD} />
                                <Route path="/app/test1" component={ToDo} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default AppLayout;
