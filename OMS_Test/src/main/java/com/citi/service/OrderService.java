package com.citi.service;

import java.util.List;

import com.citi.json.OrderJson;
import com.citi.model.*;
import com.citi.util.*;

public interface OrderService {
	List<OrderJson> getAllOrders();

	OrderJson sendOrder(Order order);
	
	void clearTable();
	
	 void truncateMyTable();

}
