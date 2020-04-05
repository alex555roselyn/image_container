import React from 'react';
import { Select,Input,Modal, Button, Table } from 'antd';
import TablaCatalogo from './TablaCatalogo.js';
import emailjs from 'emailjs-com';
//import Pedidos from './pedidos.js';
import datas from './data.js';
import {HomeFilled,ReadFilled, PhoneFilled, GoldenFilled, WechatOutlined} from '@ant-design/icons';
const clasbutton={background: "rgb(251, 181, 125)",color:"white",width:"100%",height:"100%",};
const clasModal={width:"400%",height:"400%",};

const { Option } = Select;

const columns = [
  {
    title: 'Producto',
    dataIndex: 'name',
    key:'name',
  },
  {
    title: 'Q. Precio',
    dataIndex: 'precio',

  },
 
];

const columnas = [
  {
    title: 'Producto',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Q.Precio',
    dataIndex: 'precio',
    width: 150,
  },
];

var sumatoria;
const pushed = [];
const children = [];
export default class Catalogo extends React.Component {

constructor(props) {
  super(props);
  // No llames this.setState() aquí!
  this.state = { 
  modal1Visible: false,
    modal2Visible: false,
     modal3Visible: false,    
      modal4Visible: false,
     selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  this.next = this.next.bind(this);
  this.sendpedido=this.sendpedido.bind(this);
}



  
  

    start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  next(modal3Visible)
  {
   
 this.setState({ modal3Visible });
console.log(this.state.selectedRowKeys);

var exchange=this.state.selectedRowKeys;

  var numeros = [];
  var objeto={};  
for (let i = 0; i < exchange.length; i++) {

for (var j = 0; j < datas.length; j++) {
  //console.log(datas[j].key);

if(datas[j].key==exchange[i])
{

 
numeros.push({
  "precio" : datas[j].precio}
  );

    pushed.push({
   key: i,
   name: exchange[i],
    precio: datas[j].precio,
  
  });

objeto.numeros=numeros;
}
}


}

console.log(objeto.numeros);

var suma=0;

for (var a = 0; a < objeto.numeros.length; a++) {
 suma+=objeto.numeros[a].precio;

}
console.log(suma);

sumatoria=suma;


  }




  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }


sendpedido()
{
 this.setState({
        modal3Visible: false,
      });

for (let i =0; i < pushed.length; i++) {
  children.push("<li style='background-color:powderblue;'>"+pushed[i].name+" Precio: "+pushed[i].precio+"</li>");
  //console.log(pushed[i].name);  


}
   console.log(JSON.stringify(children));  
 



  var nombre=document.getElementById("nombre").value;
   var telefono=document.getElementById("telefono").value;
    var correo=document.getElementById("correo").value;
     var direccion=document.getElementById("direccion").value;

console.log(nombre,telefono,correo,direccion);








  var service_id = "default_service";
var template_id = "template_DdfYlqAX";
var body="Pedido: via Web.  <br/> "+children+" Para un Total de: <div align='center'>Q."+sumatoria+"</div><br/>Dirección de Contacto: <br/>"+direccion+"<br/>"+nombre+"<br/>Teléfono de Contacto: "+telefono;

console.log(body);
  var template_params = {
   "reply_to": correo,
   "from_name": nombre,
   "to_name": "Alejandro Corado",
   "message_html": body,
};

emailjs.send(service_id, template_id,template_params,"user_FVsQlsnsbkITOs0yGLILA");

}




  render() {

        const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;



/*
var suma=0;

for (var k = 0; k < numeros.length; k++) {
 // console.log(numeros[k]);

  suma=+numeros[k];console.log("este es el resultado"+suma);
}
*/

    return (
      <>
       
        <Modal
          title="Pedidos"
           width='420'
          style={{ left: 0 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <p>Crea tu pedido</p>
          <>
           <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
            <Button type="primary" disabled={!hasSelected} onClick={this.next}>
            Siguiente paso
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={datas} /></>
        
        </Modal>
      
        
        <Button style={clasbutton} onClick={() => this.setModal2Visible(true)}>Catalogos<ReadFilled /></Button> 
      <div style={clasModal}> 
       <Modal
          title="Catalogo"
      
           width='520'
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >  
           <Button type="primary" onClick={() => this.setModal1Visible(true)}>
         Pedidos
        </Button>
      
        <TablaCatalogo/>
    
        </Modal>   

 <Modal
          title="Siguiente Paso"
      
           width='420'
          visible={this.state.modal3Visible}
          onOk={this.sendpedido}
          onCancel={() => this.next(false)}
        >  

<Input type="telefono" id="nombre" placeholder="Introdusca su Nombre y Apellido"/>
<Input type="text" id="correo" placeholder="Introdusca su Dirección de Correo Electrónico"/>
<Input type="telefono" id="telefono" placeholder="Introdusca su Numero Telefonico"/>
<Input type="telefono" id="direccion" placeholder="Introdusca su Dirección"/>
<label>Total: {sumatoria}</label>      
 <Table columns={columnas} dataSource={pushed} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </Modal> 








         </div>
      </>
    );
  }
}
