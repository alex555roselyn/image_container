import React from 'react';
import { Steps} from 'antd';
import logotip from './logotip.png';
import Cls from './Header.js';
import Contactme from './Contacto.js';
import Catalogo from './Catalogo.js';
import Organigrama from './Organigrama.js';
import {HomeFilled,ReadFilled, PhoneFilled, GoldenFilled, WechatOutlined} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import Mapa from './Mapa.js';
import Carrousel from './Carrousel.js';
import Acerca from './Acerca.js';
const { Header, Content, Footer } = Layout;
const { Step } = Steps;


const labuser={background: "rgb(251, 181, 25)", opacity: '0.9',color:"white",width:"100%",height:"100%"};

const clasbutton={background: "rgb(251, 181, 125)" ,color:"white",width:"100%",height:"100%",};


export default class Home extends React.Component{

/*    <Step status="finish" title="Login" icon={<UserOutlined />} />
    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />*/
render(){
	return(
		<>
		<div className="nav navbar" style={labuser}>
<div style={{marginLeft : "20px", padding: 7}}>
 <img 
    src={logotip} 
    height={100} 
    width={210} 

    />
</div>

      <Menu theme="dark" style={labuser} mode="horizontal" >
        <Menu.Item key="logo"> 

         <div className="logo">
         <div style={{ left: 10 }}>
 
  Inicio&nbsp;<HomeFilled/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  </div>
         </div>

    
   
    </Menu.Item>

        <Menu.Item key="1">
	Menú >
        </Menu.Item>

        <Menu.Item key="5"><Catalogo/></Menu.Item>


        <Menu.Item key="3"> 
        <Organigrama/>
        </Menu.Item>
			<Menu.Item key="4"><Contactme/></Menu.Item>
      </Menu>      	
		</div>	
		<div><Mapa/><Acerca/></div>
		
	
		<Carrousel/>
		</>
		);
}

}