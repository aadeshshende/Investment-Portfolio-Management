package com.app.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class StockInfoDTO {

    @JsonProperty("1. symbol")
    private String symbol;

    @JsonProperty("2. name")
    private String name;

    @JsonProperty("3. type")
    private String type;

    @JsonProperty("4. region")
    private String region;

    @JsonProperty("5. marketOpen")
    private String marketOpen;

    @JsonProperty("6. marketClose")
    private String marketClose;

    @JsonProperty("7. timezone")
    private String timezone;

    @JsonProperty("8. currency")
    private String currency;

    @JsonProperty("9. matchScore")
    private String matchScore;

    // Getters and setters

    @Override
    public String toString() {
        return "StockInfoDTO [symbol=" + symbol + ", name=" + name + ", type=" + type + ", region=" + region
                + ", marketOpen=" + marketOpen + ", marketClose=" + marketClose + ", timezone=" + timezone
                + ", currency=" + currency + ", matchScore=" + matchScore + "]";
    }
}