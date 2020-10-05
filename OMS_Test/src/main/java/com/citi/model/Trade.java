package com.citi.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trades")
public class Trade {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="trade_id")
	private Long tradeId;
	
	public Trade() {
		super();
	}
	@Column(name="trade_time")
	private Date tradeTime;
	
	@Column(name="quantity")
	private Long quantity;
	
	@Column(name="price")
	private Double price;
	
	@Column(name="buy_id")
	private Long buyId;
	
	@Column(name="sell_id")
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
	
	public Trade(Date tradeTime, Long quantity, Double price, Long buyId, Long sellId) {
		super();
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