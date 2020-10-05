package com.citi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.citi.service.OrderBusinessLogic;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
public class OmsTestApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(OmsTestApplication.class, args);
	}
		
}
