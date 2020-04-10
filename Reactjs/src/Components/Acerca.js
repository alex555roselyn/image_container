import React from 'react'
import misionImg from './mision.png'
import visionImg from './vision.png'
import valoresImg from './valoresE.png'
import {Modal} from 'antd';
import { Button } from 'react-bootstrap';
import fa from './fa.webp';
import tw from './tw.png';

class Acerca extends React.Component {


constructor(props) {
  super(props);
  // No llames this.setState() aquí!
  this.state = { 
  modal1Visible: false,
    modal2Visible: false,
     modal3Visible: false,    
  };

}

   modal1(modal1Visible){
    this.setState({ modal1Visible });
  }

 modal2(modal2Visible){
    this.setState({ modal2Visible });
  }
   modal3(modal3Visible){
    this.setState({ modal3Visible });
  }

		render(){
			return( 
				<>
    

			<div style={{ background: "white", color: 'red', opacity:'0.4',borderRadius: '9px'}} > 
      <h4 style={{ display: 'flex', marginLeft: "10vh", color: 'red'}}>ACERCA DE NOSOTROS &nbsp;
      <a
          className="App-link"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        > <img src={fa}

                 height={40} 
                 width={40}
              /></a>  <a
          className="App-link"
          href="https://twitter.com/explore" target="_blank"
          rel="noopener noreferrer"
        >
         <img src={tw}

                 height={40} 
                 width={40} 

              /></a>
              </h4>

      </div>	


		<Modal
          title="Misión"
          center
          visible={this.state.modal1Visible}
          onOk={() => this.modal1(false)}
          onCancel={() => this.modal1(false)}
        >  
        <div>
							<img src={misionImg}

							   height={200} 
							   width={200} 

							/>
								<p>Somos una empresa que distribuye productos de calidad, 
        						a precios competitivos, con un servicio seguro y de calidad, 
       					    	con innovacion empresarial, 
       							con espiritu de competencia y con garantía de satisfaccion.</p>
        				</div>

        	</Modal>
					
<Modal
          title="Visión"
          center
          visible={this.state.modal2Visible}
          onOk={() => this.modal2(false)}
          onCancel={() => this.modal2(false)}
        >  

<div>
							<img src={visionImg}/>
        				 		<p>Ser una empresa con crecimiento continuo y sostenible, 
        						una empresa amiga con nuestros empleados y nuestros clientes, 
        						garantizando satisfaccion para todos.</p>
        				</div>
						

        	</Modal>


 <Modal
          title="Valores"
          center
          visible={this.state.modal3Visible}
          onOk={() => this.modal3(false)}
          onCancel={() => this.modal3(false)}
        >  

						
        				
        				
					
							<img src={valoresImg}/>
        				

			
        	</Modal>


<div style={{ opacity: "0.5"}}><h4 style={{ display: "flex", marginLeft: "10vh"}}>Misión</h4>
<Button className="btn btn-outline-dark" style={{ display: "flex",  marginLeft: "10vh" }} onClick={() => this.modal1(true)}>Ver mas...</Button> 

<h4 style={{ display: "flex", marginLeft: "10vh"}}>Visión</h4>
<Button className="btn btn-outline-dark"  style={{display: "flex",  marginLeft: "10vh" }}  onClick={() => this.modal2(true)}>Ver mas...</Button>

<h4 style={{ display: "flex", marginLeft: "10vh"}}>Valores</h4>
<Button  className="btn btn-outline-dark"  style={{display: "flex",  marginLeft: "10vh" }} onClick={() => this.modal3(true)}>Ver mas...</Button>
</div>
<br/>


				</>
			
					)
		}

}
export default Acerca