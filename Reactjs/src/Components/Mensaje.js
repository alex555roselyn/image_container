import React, {useState} from 'react';
import emailjs from 'emailjs-com';



var template_params = {
   "reply_to": "reply_to_value",
   "from_name": "from_name_value",
   "to_name": "to_name_value",
   "message_html": "holaaaa perro",

}

var service_id = "default_service";
var template_id = "template_DdfYlqAX";
export default class Mensaje extends React.Component {


componentDidMount()
{

emailjs.send(service_id, template_id,template_params,"user_FVsQlsnsbkITOs0yGLILA");

}

render() {


  return (
  	<>
  	</>
   
  );
}
}