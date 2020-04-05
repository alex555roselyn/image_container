import React from 'react';
import { Modal, Button } from 'antd';
import './organigrama.css';
import mosaico from './mosaico.png';
import gerente from './gerente.jpg';
import desarrollo from './desarrollo.jpg';
import disenio from './disenio.jpg';
import analista from './analista.jpg';
import analistadoc from './analistadoc.jpg';
//import mosaico from './mosaico.png';
import {HomeFilled,ReadFilled, PhoneFilled, GoldenFilled, WechatOutlined} from '@ant-design/icons';
const clasbutton={background: "rgb(251, 181, 125)" ,color:"white",width:"100%",height:"100%",};
export default class Organigrama extends React.Component {

  state = {
    modal1Visible: false,//alejandro
    modal2Visible: false,//organigrama
     modal3Visible: false,//gaby
      modal4Visible: false,//diana
       modal5Visible: false,//kim
        modal6Visible: false,//barbero
  };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible }); //modal organigrama
  }


  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible }); //modal alejandro
  }



    setModal3Visible(modal3Visible) {
    this.setState({ modal3Visible }); //modal gaby
  }

  
    setModal4Visible(modal4Visible) {
    this.setState({ modal4Visible }); //modal diana
  }


    setModal5Visible(modal5Visible) {
    this.setState({ modal5Visible }); //modal kim
  } 


    setModal6Visible(modal6Visible) {
    this.setState({ modal6Visible }); //modal barbero
  }

   
 
  render() {

    const back={background: mosaico}
    return (
      <>
      
        <Button style={clasbutton} onClick={() => this.setModal2Visible(true)}>Estructura<GoldenFilled /></Button> 
 
        <Modal
          title="Organigrama Institucional"
          centered
          width='920'
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >

<div className="organigrama">
    <ul key="organigrama">
        <li>
          <a href="#" onClick={() => this.setModal1Visible(true)}>Dirección General</a>
            <ul>
                <li>
                    <a href="#" onClick={() => this.setModal4Visible(true)}>Analista De Diseño</a>
                </li>
             
                <li><a href="#" onClick={() => this.setModal5Visible(true)}>Analista</a></li>
                <li><a href="#" onClick={() => this.setModal6Visible(true)}>Analista</a>
                </li>
                <li><a href="#" onClick={() => this.setModal3Visible(true)}>Analista Desarrollador</a></li>   

            </ul>
        </li>
      <br/>
          <br/>
    </ul>

</div>
  <br/>


        <Modal
          title="Dirección General"
          centered
          width='520'
          style={{ top: 20 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
         <h4>Alejandro Corado</h4>
        <h6>Ingeniero en Sistemas de Información</h6>

           <img 
    src={gerente} 
    height={'500'} 
    width={'500'} 

    />
        </Modal>
         <Modal
          title="Analista Desarrollador"
          centered
          width='520'
          style={{ top: 20 }}
          visible={this.state.modal3Visible}
          onOk={() => this.setModal3Visible(false)}
          onCancel={() => this.setModal3Visible(false)}
        >
         <h4>Gabriela Gaitan</h4>
        <h6>Ingeniero en Sistemas de Información</h6>

           <img 
    src={desarrollo} 
    height={'500'} 
    width={'400'} 

    />
        </Modal>
         <Modal
          title="Analista de Diseño"
          centered
          width='520'
          style={{ top: 20 }}
          visible={this.state.modal4Visible}
          onOk={() => this.setModal4Visible(false)}
          onCancel={() => this.setModal4Visible(false)}
        >
         <h4>Diana Mazariegos</h4>
        <h6>Ingeniero en Sistemas de Información</h6>

           <img 
    src={disenio} 
    height={'500'} 
    width={'400'} 

    />
        </Modal>
         <Modal
          title="Analista Desarrollador"
          centered
          width='520'
          style={{ top: 20 }}
          visible={this.state.modal5Visible}
          onOk={() => this.setModal5Visible(false)}
          onCancel={() => this.setModal5Visible(false)}
        >
         <h4>Kimberly Lucero</h4>
        <h6>Ingeniero en Sistemas de Información</h6>

           <img 
    src={analistadoc} 
    height={'500'} 
    width={'500'} 

    /> </Modal>


         <Modal
          title="Analista Desarrollador"
          centered
          width='520'
          style={{ top: 20 }}
          visible={this.state.modal6Visible}
          onOk={() => this.setModal6Visible(false)}
          onCancel={() => this.setModal6Visible(false)}
        >
         <h4>José Canahui</h4>
        <h6>Ingeniero en Sistemas de Información</h6>

           <img 
    src={analista} 
    height={'500'} 
    width={'400'} 

    />
        </Modal>

 
      
        </Modal>
      </>
    );
  }
}