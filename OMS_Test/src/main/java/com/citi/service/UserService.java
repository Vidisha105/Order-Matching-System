package com.citi.service;

import java.util.List;

import com.citi.json.UserJson;
import com.citi.model.User;

public interface UserService {

	List<UserJson> getAllUsers();
	
	UserJson createUser(User user);
}