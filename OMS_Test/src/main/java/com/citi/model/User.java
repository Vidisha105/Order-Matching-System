package com.citi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="user_id")
	private Long user_id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="email_id")
	private String email_id;
	
	@Column(name="pass_word")
	private String pass_word;

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

	public User() {
		super();
	}

	public User(Long user_id, String username, String email_id, String pass_word) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.email_id = email_id;
		this.pass_word = pass_word;
	}
	
}