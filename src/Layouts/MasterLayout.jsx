import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import renderRoutes, { createRouteMenus } from '../renderRoutes';

const { Header, Content, Sider } = Layout;

const style = {
    sider: {
        boxShadow: '0 1px 11px rgba(0,0,0, 0.2)',
        zIndex: 8
    },
    logo: {
        height: '64px'
    },
    layout: { height: '100vh' }
}

class MasterLayout extends React.Component {
    componentDidUpdate() {
        console.log('update na masterlayout');
    }
    componentWillUnmount() {
        console.log('will unmount masterlayout');
    }

    renderMenu = () => (
        createRouteMenus(this.props.route).map(routeItem => (
            <Menu.Item key={`${routeItem.key}`}>
                <Link to={`${routeItem.path}`}>
                    {routeItem.description}
                </Link>
            </Menu.Item>
        ))
    )

    render() {
        const { route } = this.props;
        const routes = renderRoutes(route);

        const layout = (
            <Layout>                 
                <Sider style={style.sider}>
                    <div 
                    className="logo"
                    style={style.logo}
                    >
                        Logo
                    </div>
                    <Menu theme="dark">
                        { this.renderMenu() }
                    </Menu>
                </Sider>
                <Layout style={style.layout}>
                    <Header>Header</Header>            
                    <Content>
                        {routes}
                    </Content>
                </Layout>
            </Layout>
        )

        return (
            <div className="master-layout">
                {layout}
            </div>
        );
    }
}

export default MasterLayout;