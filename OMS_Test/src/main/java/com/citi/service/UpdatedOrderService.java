package com.citi.service;

import java.util.List;

import com.citi.json.OrderJson;
import com.citi.model.UpdatedOrder;

public interface UpdatedOrderService {

	void sendOrders(List<OrderJson> order);

	List<OrderJson> getAllOrders();

	void clearTable();

	void truncateMyTable();
}
