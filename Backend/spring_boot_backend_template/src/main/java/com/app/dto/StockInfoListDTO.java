package com.app.dto;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class StockInfoListDTO {

    @JsonProperty("bestMatches")
    private List<StockInfoDTO> bestMatches;

    public List<StockInfoDTO> getBestMatches() {
        return bestMatches;
    }

    public void setBestMatches(List<StockInfoDTO> bestMatches) {
        this.bestMatches = bestMatches;
    }

    @Override
    public String toString() {
        return "StockInfoListDTO [bestMatches=" + bestMatches + "]";
    }
}
