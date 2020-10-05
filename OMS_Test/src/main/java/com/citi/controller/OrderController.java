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
import org.springframework.web.bind.annotation.RequestParam;
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
import com.citi.service.UpdatedOrderService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private TradeService tradeService;
	
	@Autowired
	private UpdatedOrderService updatedOService;
	
	private OrderBusinessLogic obl;
	
	static Logger logger = LogManager.getLogger(OrderController.class.getName());
	
	@GetMapping(value = "/order", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<OrderJson> getAllOrders() {
		logger.info("in get orders api ");
		
		return orderService.getAllOrders();
	}
	
	@PostMapping(value="/order", consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public OrderJson sendOrder(@RequestBody Order order) {
		logger.info("to service layer");
		return orderService.sendOrder(order);
	}
	
	@GetMapping(value="/match", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<TradeJson> match()
	{
		logger.info("Matching orders ...");
		obl = new OrderBusinessLogic();
		List<OrderJson> ord = orderService.getAllOrders();
		
		List<TradeJson> trades = obl.startMatching(ord);
		List<OrderJson> finalOrders = obl.getFinalOrderList();
		
		updatedOService.sendOrders(finalOrders);
		
		System.out.println("Final orders list : "+finalOrders);
		tradeService.sendTradesToTable(trades);
		
		return trades;
	}
	
	@GetMapping(value = "/updatedorder", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<OrderJson> getAllUpdatedOrders() {
		logger.info("in get orders api ");
		
		return updatedOService.getAllOrders();
	}
	
	/*
	 * @GetMapping(value="/match", produces=MediaType.APPLICATION_JSON_VALUE) public
	 * void match() { obl = new OrderBusinessLogic(); List<OrderJson> ord =
	 * orderService.getAllOrders();
	 * 
	 * List<TradeJson> trades = obl.startMatching(ord);
	 * tradeService.sendTradesToTable(trades); }
	 */
	
	@GetMapping(value="/reset")
	public void reset(){
		//orderService.clearTable();
		orderService.truncateMyTable();
		//updatedOService.clearTable();
		updatedOService.truncateMyTable();
		//tradeService.clearTable();
		tradeService.truncateMyTable();
		logger.info("table cleaned");
	}

	
	@GetMapping(value="/randomize", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<OrderJson> randomize()
	{
		//logger.info(parentMessage);
		logger.info("In randomize api ....");
		for(int i=0;i<30;i++)
		{
			Order order = new Order();
			try {
				order.setBuyOrSell(Order.Buy_Sell());
				order.setQuantity(Order.Quantity());
				order.setPrice(Order.Price());
				order.setAllOrNone(Order.All_None());		
				order.setOrderType(Order.Order_Type());
				order.setOrderStatus(Order.Order_Status());
				order.setOrderTime(Order.Time());
				order.setMinFill(Order.Min_Fill());
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			orderService.sendOrder(order);
		}
		return orderService.getAllOrders();
	}
}