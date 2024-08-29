package com.app.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonInclude(value =  Include.NON_NULL)
public class BankDetailsDTO extends BaseDTO {
    private String accountNumber;
    private String bankName;
    private String bankAddress;
    private String ifscCode;
    private Long userId;
    private String firstName;
}
