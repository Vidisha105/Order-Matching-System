package com.citi.json;

public class UserJson {

	private Long user_id;
	private String username;
	private String email_id;
	private String pass_word;
	
	public UserJson(Long user_id, String username, String email_id, String pass_word) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.email_id = email_id;
		this.pass_word = pass_word;
	}
	public UserJson() {
		super();
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getPass_word() {
		return pass_word;
	}
	public void setPass_word(String pass_word) {
		this.pass_word = pass_word;
	}
	@Override
	public String toString() {
		return "UsersJson [user_id=" + user_id + ", username=" + username + ", email_id=" + email_id + ", pass_word="
				+ pass_word + "]";
	}
	
	
	
}