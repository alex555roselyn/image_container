package com.example.api_insert;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/api")

public class Controller {

    @Autowired
    Insert insert;

    @Autowired 
    private UserRepository userRepository;
    

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/message/", method = RequestMethod.POST)
    public Object SendQuery(@RequestBody Payload payload) throws JSONException {


    

		return insert.insertMessage(payload.toString());
//



    }
    
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/message/", method = RequestMethod.GET)
    public @ResponseBody Iterable<User> getAllUsers() {
      // This returns a JSON or XML with the users

      return userRepository.findAll();
    }
}