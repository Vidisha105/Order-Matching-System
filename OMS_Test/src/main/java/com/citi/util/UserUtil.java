package com.citi.util;

import java.util.ArrayList;
import java.util.List;

import com.citi.json.UserJson;
import com.citi.model.User;

public class UserUtil {

	public static UserJson convertUsersIntoUsersJson(User user) {
		return new UserJson(user.getUser_id(), user.getUsername(), user.getEmail_id(), user.getPass_word());
	}
	
	public static List<UserJson> convertUsersListIntoUsersJsonList(List<User> users) {
		List<UserJson> userjsons = new ArrayList<UserJson>();
		for(User user : users) {
			userjsons.add(convertUsersIntoUsersJson(user));
		}
		
		return userjsons;
	}
	
}