import React from 'react';
import styled from 'styled-components';

const PageHeaderContentStyle = styled.div`

`;

const PageHeaderStyle = styled.div`
    padding: 16px 32px 0;
    background: #fff;
    border-bottom: 1px solid #efefef;
`;

const PageContentStyle = styled.div`
    margin: 24px;
`;

const PageHeaderContent = ({ children }) => {
    return(
        <PageHeaderContentStyle className="page-header-content">
            <PageHeaderStyle className="page-header">
                <h2>Descrição da página</h2>
            </PageHeaderStyle>
            <PageContentStyle className="page-content">
                { children }
            </PageContentStyle>
        </PageHeaderContentStyle>
    );
}

export default PageHeaderContent;