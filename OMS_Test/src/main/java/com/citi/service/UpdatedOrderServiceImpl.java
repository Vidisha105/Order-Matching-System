package com.citi.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citi.json.OrderJson;
import com.citi.model.Order;
import com.citi.model.UpdatedOrder;
import com.citi.repo.UpdatedOrderRepository;
import com.citi.util.OrderUtil;

@Service
public class UpdatedOrderServiceImpl implements UpdatedOrderService{

	@Autowired
	private UpdatedOrderRepository updatedorderRepository;


	@Override
	public void sendOrders(List<OrderJson> orderjson) {
		// TODO Auto-generated method stub
		for(OrderJson oj : orderjson)
		{
			UpdatedOrder upOrder = OrderUtil.convertOrderJsonIntoUpdatedOrder(oj);
			UpdatedOrder updatedorder = updatedorderRepository.save(upOrder);
		}
		
	}


	@Override
	public List<OrderJson> getAllOrders() {
		// TODO Auto-generated method stub
		
		List<UpdatedOrder> updatedorders = updatedorderRepository.findAll();

		return OrderUtil.convertUpdatedOrdedListIntoOrderJson(updatedorders);
	}


	@Override
	public void clearTable() {
		updatedorderRepository.deleteAll();
		
	}


	 @Override
	 @Transactional
	 public void truncateMyTable() {
	        updatedorderRepository.truncateMyTable();
	    }
	
	
}
