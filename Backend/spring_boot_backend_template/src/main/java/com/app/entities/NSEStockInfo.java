package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "nse_stocks")
@Setter
@Getter
@NoArgsConstructor
@ToString
public class NSEStockInfo {
	@Id
	@Column(name = "instrument_key")
	private String instrumentKey;
	
	@Column(name = "tradingsymbol")
	private String tradingSymbol;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "last_price")
	private String lastPrice;
	
	@Column(name = "instrument_type")
	private String instrumentType;
	
	@Column(name = "exchange")
	private String exchange;
}
