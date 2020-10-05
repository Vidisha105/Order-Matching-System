package com.citi.util;

import java.util.ArrayList;
import java.util.List;

import com.citi.json.OrderJson;
import com.citi.model.*;

public class OrderUtil {

	public static OrderJson convertOrderIntoOrderJson(Order order) {
		return new OrderJson(order.getId(),order.getBuyOrSell(), order.getOrderTime(), order.getQuantity(), order.getOrderType(),order.getPrice(),order.getOrderStatus(),order.getAllOrNone(), order.getMinFill());
	}
	
	public static List<OrderJson> convertOrderListIntoOrderJsonList(List<Order> orders) {
		List<OrderJson> orderjsons = new ArrayList<OrderJson>();
		for(Order order: orders) {
			orderjsons.add(convertOrderIntoOrderJson(order));
		}
		
		return orderjsons;
	}
	
	public static UpdatedOrder convertOrderJsonIntoUpdatedOrder(OrderJson order)
	{
		return new UpdatedOrder(order.getId(),order.getBuyOrSell(),order.getOrderTime(),order.getQuantity(),order.getOrderType(),order.getPrice(),order.getOrderStatus(),order.getAllorNone(),order.getMinFill());
	}
	
	public static List<UpdatedOrder> convertOrderJsonListIntoUpdatedOrderJsonList(List<OrderJson> orderJson) {
		List<UpdatedOrder> updatedorder = new ArrayList<UpdatedOrder>();
		for(OrderJson order: orderJson) {
			updatedorder.add(convertOrderJsonIntoUpdatedOrder(order));
		}
		
		return updatedorder;
	}
	
	public static OrderJson convertUpdatedOrderIntoOrderJson(UpdatedOrder upOrd)
	{
		
			return new OrderJson(upOrd.getId(),upOrd.getBuyOrSell(),upOrd.getOrderTime(),upOrd.getQuantity(),upOrd.getOrderType(),upOrd.getPrice(),upOrd.getOrderStatus(),upOrd.getAllOrNone(),upOrd.getMinFill());
	}
	public static List<OrderJson> convertUpdatedOrdedListIntoOrderJson(List<UpdatedOrder> updatedOrders)
	{
		List<OrderJson> oj = new ArrayList<OrderJson>();
		for(UpdatedOrder upOrd : updatedOrders)
		{
			oj.add(convertUpdatedOrderIntoOrderJson(upOrd));
		}
		return oj;
	}
	
}