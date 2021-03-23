import React from 'react';
import { Row, Col }  from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
const Admin = (props) => {
  return (
    // 后台的界面架构
    <div className="app">
      <Header />
      <div className="app-content">
        <Row type="flex" justify="center">
          <Col span={2}>
            <NavLeft />
          </Col>
          <Col span={12}>
            {props.children}
            
          </Col>
          <Col span={8}>
            <NavRight />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Admin;