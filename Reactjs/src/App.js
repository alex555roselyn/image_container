import React from 'react';
import logo from './logo.svg'; //ACA ESTOY IMPORTANDO OTROS ARCHIVOS PARA MOSTRARLOS EN ESTA CLASE
import './App.css'; //ACA ESTOY IMPORTANDO OTROS ARCHIVOS PARA MOSTRARLOS EN ESTA CLASE
import Home from './Components/home.js';   //ACA ESTOY IMPORTANDO OTROS ARCHIVOS PARA MOSTRARLOS EN ESTA CLASE
import Page404 from './Components/page404.js'; //ACA ESTOY IMPORTANDO OTROS ARCHIVOS PARA MOSTRARLOS EN ESTA CLASE


function App() {
  return (  //ACA EN ESTE RETURN ESTÁ TODO LO QUE SE VA A VER EN EL NAVEGADOR
  	<div>
    <div className="App">  
    <Home/> 
    </div>
    <Page404/>
    </div>
  );
}

export default App;
