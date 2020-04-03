package com.example.api_insert;





import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties(ignoreUnknown = true)
public class Payload {

    public String mensaje;
  
 

public void payload(String mensaje)
{
    this.mensaje=mensaje;
  

}
    



public String getMensaje()
{
return mensaje;
}


public void setMensaje(String mensaje)
{

this.mensaje=mensaje;

}
	 



@Override
public String toString() {
    return "{\"mensaje\":\""+ mensaje+"\"}";
}



}

