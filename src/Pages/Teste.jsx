import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Button, Icon, Divider } from 'antd';

import Card from '../Components/Card';

import PageHeaderContent from '../Components/PageHeaderContent';

const TableListWrapper = styled.div`
    display: flex;
    flex-direction: column;    
`;

const TableList = ({ 
    border,
    space,
    children
}) => (
    <TableListWrapper className="table-list">
        {
            React.Children.map(children, (child, index) => (
                React.cloneElement(child, { border, space })
            ))
        }
    </TableListWrapper>
);

TableList.defaultProps = {
    space: 5,
    border: ""
};  

TableList.propTypes = {
    space: PropTypes.number,
    border: PropTypes.oneOf(['solid', 'dashed', ""])
};

const TableListItemWrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: ${props => `${props.space}px 0`};
    border-bottom: ${props => props.border ? `1px ${props.border} #efefef` : null};    

    &:last-child {
        border-bottom: 0;
    }

    .table-list-item-title {
        flex: 1;
    }

    .table-list-item-actions {
        margin-left: 10px;

        * + * {
            margin-left: 5px;
        }
    }
`;

const TableListItem = ({ text, children, actions, ...rest }) => (
    <TableListItemWrapper {...rest} className={`table-list-item`}>
        <div className="table-list-item-title">{text}</div>
        { children && <div className="table-list-item-content">{children}</div> }
        { actions && <div className="table-list-item-actions">{actions}</div> }
    </TableListItemWrapper>
);

TableList.Item = TableListItem;

class ExpandCard extends React.PureComponent {
    state = {
        expanded: false,
        style: null
    }

    onExpanded = (evt) => {
        evt.preventDefault();

        if (this.state.expanded) {
            this.setState({
                expanded: false,
                style: null
            });
        } else {
            this.setState({
                expanded: true,
                style: {
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: 99
                }
            });
        }
    }

    renderExtra = () => {
        let icon = "fullscreen";

        if (this.state.expanded) {
            icon = "fullscreen-exit";
        }
        return (
            <a href="#" onClick={this.onExpanded}>
                <Icon type={icon} />
            </a>
        );
    }

    render() {
        const { 
            title, 
            bordered,
            children
        } = this.props;
        return(
            <Card
                title={title}
                bordered={bordered}
                extra={this.renderExtra()}
                style={this.state.style}
            >
                {children(this.state.expanded)}
            </Card>
        );
    }
}

class Teste extends React.PureComponent {
  render() {
    return(
      <PageHeaderContent>
        <Card bordered={false} title="Table List Component">
          <TableList border="dashed">
            <TableList.Item 
                text="Saldo Devedor" 
                actions={[
                    <Button key="view.sd" size="small">View</Button>,
                    <Button key="check.sd" size="small">Check</Button>
                ]}>
                <span>
                    R$ 10.000,00
                </span>
            </TableList.Item>
            <TableList.Item text="Texto da table aqui" actions={[
                    <Button key="view.texto" size="small">View</Button>,
                    <Button key="check.texto" size="small">Check</Button>
                ]} />
          </TableList>
        </Card>
        <Divider dashed />
        <ExpandCard title="Expanded Card" bordered={false}>
          {
            (expanded) => {
              const extra = (
                <Card bordered={false} title="Table List Component">
                  <TableList border="dashed">
                    <TableList.Item 
                        text="Saldo Devedor" 
                        actions={<React.Fragment>
                            <Button size="small">View</Button>
                            <Button size="small">Check</Button>
                            </React.Fragment>}>
                        <span>
                            R$ 10.000,00
                        </span>
                    </TableList.Item>
                    <TableList.Item text="Texto da table aqui" actions={<React.Fragment>
                            <Button size="small">View</Button>
                            <Button size="small">Check</Button>
                            </React.Fragment>} />
                  </TableList>
                </Card>
              );
              return (
                <React.Fragment>
                    <span>Expanded card</span>
                    { expanded ? extra : null }                               
                </React.Fragment>
              )
            }
          }
        </ExpandCard>
      </PageHeaderContent>
    )
  }
}

export default Teste;