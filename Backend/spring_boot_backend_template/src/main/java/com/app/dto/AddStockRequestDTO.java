package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddStockRequestDTO {

	private String email;
    private String password;
    private Long stockId;
    private String watchlistName;
}
