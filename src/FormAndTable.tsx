import React from 'react'
import { Col, Row } from 'antd';
import { useTranslation } from "react-i18next";
import { Radio, Form, Input, Select, DatePicker, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { useTypedSelector } from './store/stateStore';

const { Option } = Select;
function FormAndTable() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const title_detail = [{
        key: "Mr",
        value: t('title_detail_mr')
    }, {
        key: "Mrs",
        value: t('title_detail_mrs')
    }, {
        key: "Miss",
        value: t('title_detail_miss')
    }]

    const gender_detail = [{
        value: "M",
        name: t('gender_m')
    }, {
        value: "F",
        name: t('gender_f')
    }, {
        value: "NS",
        name: t('gender_ns')
    }]

    const nationality_detail = [{
        key: "Mr",
        value: t('nationality_detail_thai')
    }]

    const phone_detail = [{
        key: "66",
        value: "+66"
    }]

    const onClickPathHome = () => {
        navigate("/");
    }

    return (
        <div className='body-form'>
            <Row gutter={[8, 8]} className='buttom-back'>
                <Button type="primary" danger onClick={onClickPathHome}>{t('back_home')}</Button>
            </Row>
            <Row gutter={[8, 8]}>
                <Col className="gutter-row" xs={24} md={5}>
                    <Form.Item name="title" label={t('title')} rules={[{ required: true }]}>
                        <Select
                            placeholder={t('title')}
                            // onChange={onGenderChange}
                            allowClear
                        >
                            {
                                title_detail.map((e) => {
                                    return <Option value={e?.key}>{e?.value}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} md={9}>
                    <Form.Item name="firstname" label={t('firstname')} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} md={9}>
                    <Form.Item name="lastname" label={t('lastname')} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} md={5}>
                    <Form.Item name="birthday" label={t('birthday')} rules={[{ required: true }]}>
                        <DatePicker placeholder={t('birthday')} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={9}>
                    <Form.Item name="nationality" label={t('nationality')} rules={[{ required: true }]}>
                        <Select
                            placeholder={t('nationality')}
                            // onChange={onGenderChange}
                            allowClear
                        >
                            {
                                nationality_detail.map((e) => {
                                    return <Option value={e?.key}>{e?.value}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} md={14}>
                    <Form.Item name="citizenid" label={t('citizenid')} >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} md={16}>
                    <Form.Item name="gender" label={t('gender')} rules={[{ required: true }]}>
                        <Radio.Group
                        // onChange={onChange} 
                        // value={value}
                        >
                            {
                                gender_detail.map((e) => {
                                    return <Radio value={e?.value}>{e?.name}</Radio>
                                })
                            }
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} md={4}>
                    <Form.Item name="phone" label={t('phone')} rules={[{ required: true }]}>
                        <Select
                            // placeholder="สัญชาติ"
                            // onChange={onGenderChange}
                            allowClear
                        >
                            {
                                phone_detail.map((e) => {
                                    return <Radio value={e?.key}>{e?.value}</Radio>
                                })
                            }
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="phone" label="" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} md={16}>
                    <Form.Item name="passport" label={t('passport')}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} md={16}>
                    <Form.Item name="expected_salary" label={t('expected_salary')} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Button type="primary" danger>{t('button_clear')}</Button>
                <Button type="primary">{t('button_submit')}</Button>
            </Row>

        </div>
    )
}
export default FormAndTable