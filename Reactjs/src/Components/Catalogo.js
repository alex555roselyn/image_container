import React from 'react';
import { Popconfirm,message,Select,Input,Modal, Button, Table } from 'antd';
import TablaCatalogo from './TablaCatalogo.js';
import emailjs from 'emailjs-com';
//import Pedidos from './pedidos.js';
import datas from './data.js';
import {HomeFilled,ReadFilled, PhoneFilled, GoldenFilled, WechatOutlined} from '@ant-design/icons';
const clasbutton={background: "rgb(251, 181, 125)",color:"white",width:"100%",height:"100%",};
const clasModal={width:"400%",height:"400%",};



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

const openMessage = () => {
  message.loading({ content: 'Generando...', key, duration: 10 });
   

  setTimeout(() => {
    message.success({ content: 'Tu pedido fue generado exitosamente.!', key, duration: 2 });

    window.location.reload();
  }, 4000);


  setTimeout(() => {
    message.success({ content: 'Enviado!', key, duration: 2 });

    window.location.reload();
  }, 5000);
};
const key = 'updatable';
var sumatoria;
var pushed = [];
var children = [];
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
  this.closep=this.closep.bind(this);
  this.confir=this.confirm.bind(this);
}



  async confirm(ms) {
 message.info(ms);
openMessage();
    this.setState({
        modal1Visible: false,
      });

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

  async next()
  {


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

await  pushed.push({
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

 this.setState({ modal3Visible : true });
  }

async closep()
{
window.location.reload();

  this.setState({
        modal3Visible: false,
      });

  this.setState({
        modal4Visible: false,
      });
  this.start();
}



  async setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  async setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }


  async modalconfirmar(modal4Visible){
    this.setState({ modal4Visible });
  }


async sendpedido()
{


  this.start();




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






if(!correo=="")
{

 this.setState({
        modal3Visible: false,
      });

  this.setState({
        modal1Visible: false,
      });

  this.setState({
        modal4Visible: false,
      });


  this.confirm("Muchas gracias "+nombre+" por su preferencia.");




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
else{


  this.setState({
        modal4Visible: false,
      });

  message.warning("Error Ingrese un Correo valido");
}
}




  render() {

        const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;





    return (
      <>
       
<Modal
          title="Confirmación"
          center
          visible={this.state.modal4Visible}
          onOk={this.sendpedido}
          onCancel={this.closep}
        >  

<div>
Terminos y condiciones.
<br/>

<h7>
¿Qué son los términos y condiciones de uso?
<br/>
Los términos y condiciones, también conocidos como condiciones de uso y contratación, son elementos que regulan la relación con el usuario respecto al acceso de los contenidos y de los servicios que se ponen a disposición a través de la página web. Dichas condiciones son redactadas unilateralmente por el empresario titular de la página web o tienda online sin posibilidad de que los usuarios tengan capacidad de negociación dado que se trata de contratos de adhesión.

¿Para qué sirven?
<br/>
La inclusión detallada en la página web de las reglas que van a regir la relación contractual permiten al usuario conocer cuáles son las responsabilidades que el titular de la web asume respecto del servicio que presta, así como poner en conocimiento del usuario cuáles son sus derechos y obligaciones por acceder a los contenidos y utilizar los servicios que ofrece la web.

¿Por qué son importantes?
<br/>
La normativa legal exige que el usuario tenga conocimiento de las condiciones de contratación de un producto o servicio, por lo que una redacción incompleta o inadecuada puede dar lugar a la imposición de una sanción por parte de un ente público.

Su importancia también radica en  la confianza que genera en los clientes, ya que mientras más conocimiento tenga el usuario de las condiciones del producto o servicio que se ofrecen mayor será su confianza para realizar la adquisición a través de dicha página web.

Por ello, resulta recomendable que se establezcan las condiciones de forma clara, es decir, evitando una redacción ambigua u oscura, ya que el usuario debe conocer y entender las reglas a las que se somete. El contenido de dichas condiciones debe incluir de forma detallada y clara cuestiones como la limitación de responsabilidad, plazos de entrega del producto o garantías, con la finalidad de evitar futuros problemas como podrían ser reclamaciones o pleitos por malos entendidos al no especificarse de la forma más correcta dichas condiciones.

¿Qué cuestiones deben incluirse en las condiciones?
– Datos de identificación: Se debe incluir los datos de identificación del profesional o la empresa titular de la página web o tienda online para que los usuarios tengan conocimiento de la persona con la que contratan y el responsable de la web.

– Derechos de propiedad intelectual e industrial: Se debe señalar quién es el titular de los elementos que componen la página web,  así como el tipo de licencias de uso que se otorgan a los usuarios sobre dichos elementos. Por ejemplo, si la página tiene un blog es importante establecer la licencia que se otorga a los usuarios sobre los artículos que se publican en la web, o sobre los otros elementos que la componen como las fotos, vídeos, logos, etc.

– Pasos a seguir para contratar: Debe informarse al usuario de los pasos que debe seguir para poder adquirir los productos o servicios que se ofrecen, incluyendo los derechos que se le reconocen y las obligaciones que debe asumir.

– Producto o servicio objeto de contratación: Debe establecerse de forma clara y precisa cuál es el producto o servicio que puede contratar el usuario a través de la web, además debe incluirse una descripción detallada de las características del producto o servicio a contratar.

– Precios, duración y formas de pago: Debe señalarse si los precios incluyen los correspondientes impuestos, o si la compra está sometida a cargos adicionales como por ejemplo los gastos de envío. Si son contratos que se prolongan en el tiempo señalar el plazo de duración, así como especificar las formas de pago que tiene el usuario y las condiciones a las que se somete el pago de determinado producto o servicio, por ejemplo si es un pago único o mensual, y cuáles son las consecuencias del retraso e impago.

– Reglas de conducta: En el caso que sea necesario registrarse como usuario para disfrutar de los servicios que se ofrecen en la web deben establecerse las condiciones específicas de uso, los derechos que se le conceden a los usuarios registrados, así como las responsabilidades que asumirán si su conducta no es acorde con las reglas de comportamiento establecidas, por ejemplo si el registro es para un foro, especificar las responsabilidades que asumirá el usuario por los comentarios que realice.

– Responsabilidades: Es relevante que en la página web se establezca de forma precisa las responsabilidades que se asumen, así como las limitaciones de responsabilidad por posibles incidencias que existan en la web.

– Garantías: Es importante dar a conocer al usuario las garantías que tienen por la adquisición de un producto o servicio.

Debe tenerse en cuenta que en el caso de venta de productos tendrán que incluirse cláusulas que regulen cuestiones relacionadas a la responsabilidad por pérdida del producto, reembolsos de dinero y devoluciones.

– Legislación aplicable y sistema de solución de conflictos: Resulta importante dar a conocer al usuario las normas que serán de aplicación a la relación contractual que se crea, así como establecer el sistema extrajudicial de solución de conflictos o los tribunales competentes para resolver las controversias que surjan.

– Otros: En caso de que se realicen ofertas y promociones deben incluirse las condiciones específicas que regirán para esa oferta o promoción. Si se ofrece al usuario un servicio de atención al cliente después de realizada la adquisición del producto o servicio se deben incluir también las condiciones que regulen ese servicio post-venta.
</h7>
<br/>
<h8>
Al hacer click en 'OK' usted esta de acuerdo con nuestras politicas y condiciones. 
</h8>
</div>


</Modal>


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
          title="Paso Final"
      
           width='420'
          visible={this.state.modal3Visible}
          onOk={() => this.modalconfirmar(true)}
          onCancel={this.closep}
        >  

        
<Input type="telefono" id="nombre" placeholder="Introdusca su Nombre y Apellido"/>
<Input type="text" id="correo" placeholder="Introdusca su Dirección de Correo Electrónico"/>
<Input type="telefono" id="telefono" placeholder="Introdusca su Numero Telefonico"/>
<Input type="telefono" id="direccion" placeholder="Introdusca su Dirección"/>
<label>Total: Q.{sumatoria}</label>      
 <Table columns={columnas} dataSource={pushed} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />


        </Modal> 

  






         </div>
      </>
    );
  }
}
