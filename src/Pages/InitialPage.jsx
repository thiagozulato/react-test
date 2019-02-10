import React from 'react';
import { Card, Input, Form, Row, Col } from 'antd';
import styled from 'styled-components';
import PageHeaderContent from '../Components/PageHeaderContent';

const { Item } = Form;

const FormStyle = styled(Form)`
    width: 440px;
    margin: 0 auto;

    .ant-form-item {
        margin-bottom: 0;
    }

    .ant-form-item-label {
        line-height: normal;
    }

    .ant-form-explain, .ant-form-extra {
        font-size: 12px;
    }
`;

const InitialPage = ({ form }) => {
    const { getFieldDecorator } = form;
    return(
        <PageHeaderContent>
            <Card
                title={'Filter'}
                bordered={false}                  
            >
                <FormStyle hideRequiredMark>
                    <Row gutter={10}>
                        <Col md={12}>
                            <Item label={(<span>
                                            Name&nbsp;
                                            <small><i>(Optional)</i></small>
                                        </span>
                                        )}
                                    colon={false} required={true}>
                                {
                                    getFieldDecorator('name', {
                                        rules: [{
                                            required: true,
                                            message: 'Required field'
                                        }]
                                    })(<Input />)
                                }
                            </Item>
                        </Col>
                        <Col md={12}>
                            <Item label="Document" colon={false}>
                                {
                                    getFieldDecorator('document', {
                                        rules: [{
                                            required: true,
                                            message: 'Document is a required field'
                                        }]
                                    })(<Input />)
                                }
                            </Item>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col md={12}>
                            <Item label={(<span>
                                            City&nbsp;
                                            <small><i>(Optional)</i></small>
                                        </span>
                                        )}
                                    colon={false} required={true}>
                                {
                                    getFieldDecorator('city')(<Input />)
                                }
                            </Item>
                        </Col>
                        <Col md={12}>
                            <Item label="State" colon={false}>
                                {
                                    getFieldDecorator('state')(<Input />)
                                }
                            </Item>
                        </Col>
                    </Row>
                </FormStyle>
            </Card>        
        </PageHeaderContent>
    )
};

export default Form.create()(InitialPage);