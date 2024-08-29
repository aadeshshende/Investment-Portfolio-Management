package com.app.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

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
@JsonInclude(value = Include.NON_NULL)
public class OrderDto {
	@JsonProperty("userEmail")
    private String userEmail;
	@JsonProperty("stockID")
    private Long stockID;
    private String orderType;
    private String orderStatus;
    private int quantity;
    private double price;


}
