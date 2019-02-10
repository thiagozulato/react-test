import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledTheme } from 'styled-components';

const ThemeProvider = ({ 
    theme, 
    globalStyle: GlobalStyle, 
    children 
}) => (
    <StyledTheme theme={theme}>
        <React.Fragment>
            { GlobalStyle && <GlobalStyle /> }
            {children}
        </React.Fragment>
    </StyledTheme>
);

ThemeProvider.propTypes = {
    theme: PropTypes.object,
    globalStyle: PropTypes.func
};

export default ThemeProvider;