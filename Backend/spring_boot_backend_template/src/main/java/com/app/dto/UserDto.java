package com.app.dto;

import java.time.LocalDate;

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
public class UserDto {
	@JsonProperty("id")
	 	private Long id;
	    private String firstName;
	    private String lastName;
	    private LocalDate dob;
	    private String phoneNumber;
	    private String email;

}
