package com.app.dto;



public class StockSearchResultDTO {
	
	
	private StockInfoListDTO result;

	public StockInfoListDTO getResult() {
		return result;
	}

	public void setResult(StockInfoListDTO result) {
		this.result = result;
	}

	@Override
	public String toString() {
		return "StockSearchResultDTO [result=" + result + "]";
	}

}
