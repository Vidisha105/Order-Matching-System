package com.citi.service;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citi.json.OrderJson;
import com.citi.json.TradeJson;
import com.citi.model.Order;
import com.citi.model.Trade;
import com.citi.repo.OrderRepository;
import com.citi.repo.TradeRepository;
import com.citi.util.OrderUtil;
import com.citi.util.TradeUtil;

@Service
public class TradeServiceImpl implements TradeService{
	
	static Logger logger1 = LogManager.getLogger(OrderServiceImpl.class.getName());
	
	@Autowired
	private TradeRepository tradeRepository;
	
	

	
	@Override
	public void sendTradesToTable(List<TradeJson> trades) {
		logger1.info("before getting trades");
		
		logger1.info(trades.size());
		logger1.info("sending trades to table");
		
		for(TradeJson t:trades) {
			Trade trade = TradeUtil.convertTradeJsonIntoTrade(t);
			logger1.info(t.toString());
			logger1.info(trade.toString());
			Trade tr=tradeRepository.save(trade);
			//logger1.info(tr);
		}
		
		
	}

	@Override
	public List<TradeJson> getAllTrades() {
		// TODO Auto-generated method stub
		List<Trade> trades = tradeRepository.findAll();
		return TradeUtil.convertTradeListIntoTradeJsonList(trades);
	}

	@Override
	public void clearTable() {
		tradeRepository.deleteAll();
		
	}
	 @Override
	 @Transactional
	 public void truncateMyTable() {
	        tradeRepository.truncateMyTable();
	    }
	

}