import React from 'react';
import { Layout, Menu} from 'antd';
import './Header.css';
import logo from './logo.png';
import { HomeFilled} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;





function Cls() {
  return (  //ACA EN ESTE RETURN ESTÁ TODO LO QUE SE VA A VER EN EL NAVEGADOR
    <div>
     <Layout>   
    <Header style={{ position: 'left', zIndex: 1, width: '100%' }}>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">  <div className="logo" />

    
   
    </Menu.Item>
     <Menu.Item key="1">    <img 
    src={logo} 
    height={'40'} 
    width={'100'} 

    />


  &nbsp; Inicio &nbsp;
  <HomeFilled/> 
    



    </Menu.Item>

        <Menu.Item key="2">nav 2</Menu.Item>

        <Menu.Item key="3">nav 3</Menu.Item>

      </Menu>
    </Header>

    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

     
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content hola
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    </div>
  );
}

export default Cls;



