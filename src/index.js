import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import ThemeProvider from  './UIComponents/ThemeProvider';

const GlobalStyled = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }

    .ant-layout-header {
        background: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0, 0.2);
        z-index: 9;
    }
`;

const theme = {
    primary: '#ff6347',
    padding: '20px 35px'
}

ReactDOM.render(
    <ThemeProvider theme={theme} globalStyle={GlobalStyled}>     
        <App />
    </ThemeProvider>, 
    document.getElementById('root')
);
