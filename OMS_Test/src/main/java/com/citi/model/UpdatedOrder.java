package com.citi.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

 
@Entity
@Table(name ="updatedorders")
public class UpdatedOrder {
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="order_id")
	private Long id;
	
	@Column(name="buy_or_sell")
	private String buyOrSell;
	
	public UpdatedOrder() {
		super();
	}

	@Column(name="order_time")
	private Date orderTime;
	
	@Column(name="quantity")
	private Long quantity;
	
	@Column(name="order_type", length = 255,nullable = true)
	private String orderType;
	
	@Column(name="price")
	private Double price;
	
	@Column(name="order_status", length = 255)
	private String orderStatus;
	
	@Column(name="allOrNone")
	private Long allOrNone;
	
	@Column(name="min_fill")
	private Long minFill;
	

	public UpdatedOrder(Long id, String buyOrSell, Date orderTime, Long quantity, String orderType, Double price,
			String orderStatus, Long allOrNone, Long minFill) {
		this.id = id;
		this.buyOrSell = buyOrSell;
		this.orderTime = orderTime;
		this.quantity = quantity;
		this.orderType = orderType;
		this.price = price;
		this.orderStatus = orderStatus;
		this.allOrNone = allOrNone;
		this.minFill = minFill;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBuyOrSell() {
		return buyOrSell;
	}

	public void setBuyOrSell(String buyOrSell) {
		this.buyOrSell = buyOrSell;
	}

	public Date getOrderTime() {
		return orderTime;
	}

	public void setOrderTime(Date orderTime) {
		this.orderTime = orderTime;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public String getOrderType() {
		return orderType;
	}

	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public Long getAllOrNone() {
		return allOrNone;
	}

	public void setAllOrNone(Long allOrNone) {
		this.allOrNone = allOrNone;
	}

	public Long getMinFill() {
		return minFill;
	}

	public void setMinFill(Long minFill) {
		this.minFill = minFill;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", buyOrSell=" + buyOrSell + ", orderTime=" + orderTime + ", quantity=" + quantity
				+ ", orderType=" + orderType + ", price=" + price + ", orderStatus=" + orderStatus + ", allOrNone="
				+ allOrNone + ", minFill=" + minFill + "]";
	}	

	
}
