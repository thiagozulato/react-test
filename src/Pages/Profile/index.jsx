import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageHeaderContent from '../../Components/PageHeaderContent';
import renderRoutes, { createRouteMenus } from '../../renderRoutes';

const ProfileWrapper = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    padding: 20px 0;
`;

const ProfileMenu = styled.div`
    width: 200px    
`;

const ProfileContent = styled.div`
    padding: 0 24px;
`;

class Profile extends React.Component {
    componentDidMount() {
        console.log('did mount Profile');
    }
    componentDidUpdate() {
        console.log('did update Profile');
    }
    componentWillUnmount() {
        console.log('will unmount Profile');
    }

    render() {
        const { route } = this.props;
        const routes = renderRoutes(route.routes);

        return (
            <PageHeaderContent>
                <ProfileWrapper>
                    <ProfileMenu>
                        <Menu theme="light" mode="inline">
                            {
                                createRouteMenus(route.routes).map(routeItem => (
                                    <Menu.Item key={`${routeItem.key}`}>
                                        <Link to={`${routeItem.path}`}>
                                            {routeItem.description}
                                        </Link>
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </ProfileMenu>
                    <ProfileContent>                    
                        {routes}
                    </ProfileContent>
                </ProfileWrapper>
            </PageHeaderContent>
        )
    }    
};

export default Profile;