import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout, Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import "./MainLayout.css";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class NavMenu extends React.Component {
  render() {
    const { userDetails } = this.props;
    const userType = userDetails.userType || "";
    let path = window.location.href.split("/")[3];

    return (
      <div>
        <Layout>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="/home">
              <Link to="/Homepage">
                <span>Form</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/counter">
              <Link to="/task">
                <span>Counter</span>
              </Link>
            </Menu.Item>
          </Menu>
          <Layout style={{ marginLeft: 210 }}></Layout>
        </Layout>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  fetchingUserDetails: auth.fetchingUserDetails,
  userDetails: auth.userDetails
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
