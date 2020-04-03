import React from 'react';
import { Steps ,Button} from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import logo from './logo.png';
import Contactme from './Contacto.js';
import {HomeFilled,ReadFilled, PhoneFilled, GoldenFilled, WechatOutlined} from '@ant-design/icons';
const { Step } = Steps;


const labuser={background: "rgb(251, 181, 25)",color:"white",width:"100%",height:"10%"};

const clasbutton={background: "rgb(251, 181, 125)",color:"white",width:"30%",height:"50px",};


export default class Home extends React.Component{

/*    <Step status="finish" title="Login" icon={<UserOutlined />} />
    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />*/
render(){
	return(
		<div className="nav navbar" style={labuser}>
<div className="col-3 col-md-3">
<img 
    src={logo} 
    alt={logo} 

    />
  &nbsp; Inicio &nbsp;
  <HomeFilled/> 
   	


</div>

<div className="col-md-6">


&nbsp;
   	  <Button style={clasbutton}>Catalogos<ReadFilled /></Button> 
&nbsp;
   	   <Button style={clasbutton}>Estructura<GoldenFilled /></Button> 

<Contactme/>
 

</div>
      	
		</div>
		);
}

}