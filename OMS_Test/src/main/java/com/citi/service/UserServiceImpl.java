package com.citi.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citi.json.UserJson;
import com.citi.model.User;
import com.citi.repo.UserRepository;
import com.citi.util.UserUtil;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	static Logger logger1 = LogManager.getLogger(UserServiceImpl.class.getName());

	
	@Override
	public List<UserJson> getAllUsers() {
		// TODO Auto-generated method stub
		List<User> users = userRepository.findAll();
		for(User u: users) {
			u.getUser_id();
			u.getPass_word();
		}
		
		return UserUtil.convertUsersListIntoUsersJsonList(users);
	}

	@Override
	public UserJson createUser(User user) {
		// TODO Auto-generated method stub
		User users = userRepository.save(user);
		logger1.error("to repository");

		return UserUtil.convertUsersIntoUsersJson(users);
	}

}