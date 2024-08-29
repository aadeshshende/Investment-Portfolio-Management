package com.app.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@JsonInclude(value = Include.NON_NULL)
public class NSEStockInfoDTO {
	private String instrumentKey;
	private String name;
	private String lastPrice;
}
