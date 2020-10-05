package com.citi.json;

import java.util.Date;

public class TradeJson {

	private Long tradeId;
	private Date tradeTime;
	private Long quantity;
	private Double price;
	private Long buyId;
	private Long sellId;
	

	public Long getBuyId() {
		return buyId;
	}
	public void setBuyId(Long buyId) {
		this.buyId = buyId;
	}
	public Long getSellId() {
		return sellId;
	}
	public void setSellId(Long sellId) {
		this.sellId = sellId;
	}
	@Override
	public String toString() {
		return "TradeJson [tradeId=" + tradeId + ", tradeTime=" + tradeTime + ", quantity=" + quantity + ", price="
				+ price + ", buyId=" + buyId + ", sellId=" + sellId + "]";
	}
	public Long getTradeId() {
		return tradeId;
	}
	
	public TradeJson(long trade_Id,Date tradeTime, Long quantity, Double price, Long buyId, Long sellId) {
		super();
		this.tradeId = trade_Id;
		this.tradeTime = tradeTime;
		this.quantity = quantity;
		this.price = price;
		this.buyId = buyId;
		this.sellId = sellId;
	}
	public void setTradeId(Long tradeId) {
		this.tradeId = tradeId;
	}
	public Date getTradeTime() {
		return tradeTime;
	}
	public void setTradeTime(Date tradeTime) {
		this.tradeTime = tradeTime;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	
}
