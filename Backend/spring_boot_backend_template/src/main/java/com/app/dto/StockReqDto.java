package com.app.dto;

import javax.validation.constraints.NotBlank;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class StockReqDto {
	
	@NotBlank(message = "Company Name Must not be Blank!!")
	private String companyName;
	
	@NotBlank(message = "Stock instrument key Must not be Blank!!")
	private String instrumentkey;
	
	
}
