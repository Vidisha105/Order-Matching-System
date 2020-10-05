package com.citi.util;

import java.util.ArrayList;
import java.util.List;

import com.citi.json.TradeJson;
import com.citi.model.Trade;

public class TradeUtil {
	
	public static TradeJson convertTradeIntoTradeJson(Trade trade) {
		return new TradeJson(trade.getTradeId(),trade.getTradeTime(),trade.getQuantity(),trade.getPrice(),trade.getBuyId(),trade.getSellId());
	}
	
	public static Trade convertTradeJsonIntoTrade(TradeJson tradejson) {
		return new Trade(tradejson.getTradeTime(),tradejson.getQuantity(),tradejson.getPrice(),tradejson.getBuyId(),tradejson.getSellId());
	}
	public static List<TradeJson> convertTradeListIntoTradeJsonList(List <Trade> trades){
		List<TradeJson> tradejsons = new ArrayList<TradeJson>();
		for(Trade t:trades) {
			tradejsons.add(convertTradeIntoTradeJson(t));
		}
		return tradejsons;
	}
}