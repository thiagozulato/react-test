import React from 'react';
import Card from 'antd/lib/card';   
import Modal from 'antd/lib/modal';

import Color from 'color';
import styled, { css } from 'styled-components';
import PageHeaderContent from '../Components/PageHeaderContent';

const createTheme = (custom) => {
    const theme = {
        primary: 'tomato',
        borderRadiusBase: '4px',

        get buttonBorderRadius() {
            return theme.borderRadiusBase;
        },

        ...custom
    }

    return theme;
}

const theme = key => props => {
    const innerTheme = createTheme(props.theme);
    return innerTheme[key];
}

const darken = (key, ratio) => props => {
    const color = theme(key)(props);
    return new Color(color).darken(ratio).string();
}

const Button = styled.button`
    background: ${theme('primary')};
    padding: 15px 25px;
    border: 1px solid ${theme('primary')};
    color: #fff;
    border-radius: ${theme('buttonBorderRadius')};
    outline: none;

    &:hover {
        background: ${darken('primary', 0.1)};
        border: 1px solid ${darken('primary', 0.1)};
    }
`;

class PageOne extends React.Component { 
    componentDidMount() {
        console.log('did mount PageOne');
    }
    componentDidUpdate() {
        console.log('did update PageOne');
    }
    componentWillUnmount() {
        console.log('will unmount PageOne');
    }
    render() {
        return(
            <PageHeaderContent>
                <Card
                    title={'Page One'}
                    bordered={false}                  
                >
                    <Button>Click</Button>
                </Card>
            </PageHeaderContent>   
        )
    }    
}

export default PageOne;