package com.citi.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.citi.json.UserJson;
import com.citi.model.User;
import com.citi.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	static Logger logger = LogManager.getLogger(OrderController.class.getName());
	
	@GetMapping(value = "/user", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<UserJson> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@PostMapping(value="/user", consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public UserJson createUser(@RequestBody User user) {
		logger.info("to service layer");
		return userService.createUser(user);
	}
	
	@PostMapping(value="/authenticate", consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public UserJson authenticateUser(@RequestBody User user) {
		List<UserJson> users = getAllUsers();
		for (UserJson userjson: users) {
			logger.info(userjson.getUsername());
			if(user.getUsername().equals(userjson.getUsername()) && user.getPass_word().equals(userjson.getPass_word())) {
				return userjson;
			}
		}
		return null;
	}
}