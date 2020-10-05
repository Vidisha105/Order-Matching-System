package com.citi.model;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.citi.json.RandomDouble;
import com.citi.json.RandomInt;
 
/**
 * 
 * @author Indianrenters
 * This is the Order class
 *
 */
@Entity
@Table(name ="orders")
public class Order {
	@Id
	//@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@SequenceGenerator(name = "order_id",initialValue=1,allocationSize=1)
	@Column(name="order_id",updatable=false,nullable=false/*,columnDefinition="int default '1'"*/)
	private Long id;
	
	@Column(name="buy_or_sell")
	private String buyOrSell;
	
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
	
	static RandomDouble randomDouble = new RandomDouble();
	static RandomInt randomInt = new RandomInt();

	static {
		randomDouble.initialize();
		randomInt.initialize( );
	}

	public Order() {
		super();
	}

	public Order(Long id, String buyOrSell, Date orderTime, Long quantity, String orderType, Double price,
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
		BigDecimal bd = new BigDecimal(price).setScale(2, RoundingMode.HALF_UP);
        this.price = bd.doubleValue();
		
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

	
	public static String Buy_Sell() throws InterruptedException 
	{
		
	      Random rd = new Random();// creating Random object
	      if(rd.nextBoolean() == true)
	      {
	      return "BUY";
	      
	      }
	      else {
	    	  return "SELL";
	    	 
	      }
	}
	public static long Quantity() throws InterruptedException {
		
		double qty = randomInt.nextInt();
		return (long)qty;

	}


	public static double Price() throws InterruptedException {
		double r = (Math.random() * ((2685*1.1) - (2685*0.9))) + (2685*0.9);
		return r;
	
	}
	
	
	public static long All_None() throws InterruptedException {
	
		      Random rd = new Random(); // creating Random object
		      
		      if(rd.nextBoolean() == true) {
			      return 1;    // For all
			      } else {
			    	  return 0;    // For None
			      }
	
	}
	
	public static String Order_Type() throws InterruptedException {
	
	
	   Random rd = new Random(); // creating Random object
		      
		      if(rd.nextBoolean() == true) {
			      return "LIMIT";}
			      else {
			    	  return "MARKET"; 
			      }
	  
	
	}
	
	public static String Order_Status() throws InterruptedException {
			return "PENDING";	
	}
	
	
	public static Date Time() throws InterruptedException {
	
	
			DateFormat formatter = new SimpleDateFormat("yyyy-MMM-dd HH:mm:ss");
			
			 
			 
	         Calendar cal=Calendar.getInstance();
	         String str_date1="2020-Oct-05 16:30:00";
	         String str_date2="2020-Oct-05 17:30:00";
	
	         try {
				cal.setTime(formatter.parse(str_date1));
			} catch (ParseException e) {
				e.printStackTrace();
			}
	         Long value1 = cal.getTimeInMillis();
	
	         try {
				cal.setTime(formatter.parse(str_date2));
			} catch (ParseException e) {
				e.printStackTrace();
			}
	         Long value2 = cal.getTimeInMillis();
	
	         long value3 = (long)(value1 + Math.random()*(value2 - value1));
	         cal.setTimeInMillis(value3);
	         Date retDate = null;
			try {
				retDate = formatter.parse(formatter.format(cal.getTime()));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	         return retDate;
		} 
	
	
	
	
	public static long Min_Fill() throws InterruptedException {
	
	return 0;
	}	

	

	
}
