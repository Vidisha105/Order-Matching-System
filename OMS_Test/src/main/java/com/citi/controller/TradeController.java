package com.citi.controller;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.citi.json.OrderJson;
import com.citi.json.TradeJson;
import com.citi.model.*;
import com.citi.repo.OrderRepository;
import com.citi.service.OrderBusinessLogic;
import com.citi.service.OrderService;
import com.citi.service.TradeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TradeController {
	

	
	@Autowired
	private TradeService tradeService;
	
	static Logger logger = LogManager.getLogger(OrderController.class.getName());
	
	@GetMapping(value = "/tradelist", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<TradeJson> getAllTrades() {
		logger.info("in get tradelist api ");
		
		return tradeService.getAllTrades();
	}
	

	
	
	
}