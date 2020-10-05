package com.citi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citi.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}