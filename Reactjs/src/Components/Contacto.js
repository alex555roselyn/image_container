import React from 'react';
import { Drawer, Button } from 'antd';
import {HomeFilled,ReadFilled, PhoneFilled, GoldenFilled, WechatOutlined} from '@ant-design/icons';
import Forms from './Comentario.js';

//import MessengerCustomerChat from 'react-messenger-customer-chat';
//import './MessengerCustomerChat.js';
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
const clasbutton={background: "rgb(251, 181, 125)",color:"white",width:"100%",height:"100%",};
const clasbuttonchat={background: "rgb(251, 181, 125)" ,color:"white",width:"25%",height:"5%",};


const icon=(<WechatOutlined/>);
    return (


         
      <>
          <Button style={clasbutton} onClick={this.showDrawer}>Contactanos<PhoneFilled /></Button> 
     
        <Drawer
          title="Comentarios y Sugerencias"
          width={420}
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
         
         <Button style={clasbuttonchat} onClick={this.showChildrenDrawer}>Chat {icon}</Button>
        
            <Forms/>
     <div className="container">

     <h5>
     Sus comentarios serán enviados a nuestros agentes de servicio al cliente en breves momentos se pondran en contacto con usted.
     </h5>
      <h6>
     Muchas gracias por su preferencia.
     </h6>


     </div>

          <Drawer
            title="Comentarios y Sugerencias"
            width={420}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
           holis
          
          </Drawer>
        </Drawer>
      </>
    );
  }
}
