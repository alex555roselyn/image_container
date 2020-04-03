
package com.example.api_insert;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.stereotype.Component;

@Component

public class Insert {
	@Autowired 
	private UserRepository userRepository;
  
public int contador;
    public String insertMessage(String mensaje) throws JSONException {


try {

    contador=contador+1;

    JSONObject json = new JSONObject(mensaje);

    String body=json.getString("mensaje");


    JSONObject J = new JSONObject();
    J.put("id", contador);
    J.put("mensaje", body);
    User n = new User();
    n.setName(body);
    userRepository.save(n);
 
    System.out.println("exitoso");
    return J.toString();
    
} catch (Exception e) {
    return e.toString();
}



		
	}
}
