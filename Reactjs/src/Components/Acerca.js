import React from 'react'
import misionImg from './mision.png'
import visionImg from './vision.png'
import valoresImg from './valoresE.png'
import { Popconfirm,message,Input,Modal} from 'antd';
import { Button } from 'react-bootstrap';

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
				<div>

			<h4 style={{
				display: 'flex',
				 marginLeft: "20px"
			}}> ACERCA DE NOSOTROS	</h4>	


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

					<div style={{display: "flex"}}>
						
        				
        				
						<div>
							<img src={valoresImg}/>
        				</div>

					</div>
        	</Modal>


<p style={{ opacity: "0.5"}}><h3 style={{ display: "flex", marginLeft: "20px"}}>Misión</h3>
<Button className="btn btn-outline-dark" style={{ display: "flex",  marginLeft: "20px" }} onClick={() => this.modal1(true)}>Ver mas...</Button> 

<h3 style={{ display: "flex", marginLeft: "20px"}}>Visión</h3>
<Button className="btn btn-outline-dark"  style={{display: "flex",  marginLeft: "20px" }}  onClick={() => this.modal2(true)}>Ver mas...</Button>

<h3 style={{ display: "flex", marginLeft: "20px"}}>Valores</h3>
<Button  className="btn btn-outline-dark"  style={{display: "flex",  marginLeft: "20px" }} onClick={() => this.modal3(true)}>Ver mas...</Button>
</p>


				</div>
			
					)
		}

}
export default Acerca