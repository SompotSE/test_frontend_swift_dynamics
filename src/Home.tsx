import React from 'react'
import { Card, Row, Col } from 'antd';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import './Home.css';
import test1 from './test1.png'
import test2 from './test2.png'

function Home() {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const onClickPath1 = () => {
        navigate("/MoveShape");
    }

    const onClickPath2 = () => {
        navigate("/FormAndTable");
    }

    return (
        <div className='centered'>
            <Row gutter={16}>
                <Col span={12}>
                    <Card
                        className='card-main'
                        title={t('title_test_1')}
                        bordered={false}
                        style={{ width: 300 }}
                        onClick={onClickPath1}
                        cover={
                            <img
                                alt={t('title_test_1')}
                                src={test1}
                            />}
                    >
                        <p>{t('detail_test_1')}</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        className='card-main'
                        title={t('title_test_2')}
                        bordered={false}
                        style={{ width: 300 }}
                        onClick={onClickPath2}
                        cover={
                            <img
                                alt={t('title_test_2')}
                                src={test2}
                            />}
                    >
                        <p>{t('detail_test_2')}</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Home