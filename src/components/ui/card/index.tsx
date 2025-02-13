import React from 'react';
import { Card, Col, Row } from 'antd';
import "./_style.scss"

const CardStat: React.FC = () => (
  <Row gutter={16}>
    <Col span={6}>
      <Card title="Card title" variant="borderless" className='cardPrimary'>
        Primary Card
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Card title" variant="borderless" className='WarningCard'>
        Wrning Card
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Card title" variant="borderless" className='succesCard'>
        Succes Card
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Card title" variant="borderless" className='dangerCard'>
        Danger Card
      </Card>
    </Col>
  </Row>
);

export default CardStat;