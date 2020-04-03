import React from 'react';
import { Drawer, Button } from 'antd';
import {HomeFilled,ReadFilled, PhoneFilled, GoldenFilled, WechatOutlined} from '@ant-design/icons';
import Forms from './Comentario.js';
//import CustomerChat from './CustomersChat.js'
export default class Contacme extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
const clasbutton={background: "rgb(251, 181, 125)",color:"white",width:"30%",height:"50px",};
const clasbuttonchat={background: "rgb(251, 181, 125)",color:"white",width:"25%",height:"5%",};

const icon=(<WechatOutlined/>);
    return (
      <div>
      
          <Button style={clasbutton} onClick={this.showDrawer}>Contactanos<PhoneFilled /></Button> 
     
        <Drawer
          title={icon}
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
         
         <Button style={clasbuttonchat} onClick={this.showChildrenDrawer}>Comentarios</Button>
         <h3>Chat {icon}</h3>

          <Drawer
            title="Comentarios y Sugerencias"
            width={420}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
           
             <Forms/>
          </Drawer>
        </Drawer>
      </div>
    );
  }
}
