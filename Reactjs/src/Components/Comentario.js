import React from 'react';
import { Form, Input, InputNumber, Button, message } from 'antd';
import emailjs from 'emailjs-com';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


var service_id = "default_service";
var template_id = "template_DdfYlqAX";






const Forms = () => {
  const onFinish = values => {
    console.log(values);

  console.log(values.user.name);


  var template_params = {
   "reply_to": values.user.email,
   "from_name": values.user.name,
   "to_name": "Alejandro Corado-Spring Cleaning",
   "message_html": values.user.introduction+"<br/> Contactame al: "+values.user.phone+"<br/> Via APP_WEB",

}

emailjs.send(service_id, template_id,template_params,"user_FVsQlsnsbkITOs0yGLILA");

 message.loading({ content: 'Enviando...', key, duration: 10 });
setTimeout(() => {

message.success({ content: 'Mensaje enviado exitosamente.!', key, duration: 2 });

  window.location.reload();
}, 4000);


  };

 const key = 'updatable';

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Nombre" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Correo" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
  <Form.Item name={['user', 'phone']} label="Teléfono" rules={[{  max: 8 }]}>
        <Input />
 </Form.Item>

      <Form.Item name={['user', 'age']} label="Edad" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Mensaje">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Forms;