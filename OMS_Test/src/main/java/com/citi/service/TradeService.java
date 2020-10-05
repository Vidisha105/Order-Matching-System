package com.citi.service;

import java.util.List;

import com.citi.json.TradeJson;

public interface TradeService {
	void sendTradesToTable(List<TradeJson> trades);

	List<TradeJson> getAllTrades();

	void clearTable();

	void truncateMyTable();
}