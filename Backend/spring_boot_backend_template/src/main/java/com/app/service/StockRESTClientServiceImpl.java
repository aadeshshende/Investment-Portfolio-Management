package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.app.dto.StockInfoListDTO;
import com.app.dto.StockSearchResultDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class StockRESTClientServiceImpl implements StockRESTClientService {

	@Autowired
	private RestTemplate restTemplate;

	@Value("${get.url.symbolSearch}")
	private String getSymbolSearchURL;

	@Override
	@Async
	public StockInfoListDTO getData(String keyword) {
		ResponseEntity<String> response = restTemplate.getForEntity(
				"https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo", String.class);

		// StockSearchResultDTO res = restTemplate.getForObject(getSymbolSearchURL,
		// StockSearchResultDTO.class, keyword);
		System.out.println(response.getBody());

		ObjectMapper objectMapper = new ObjectMapper();
		StockInfoListDTO results = null;
		try {
			results = objectMapper.readValue(response.getBody(), StockInfoListDTO.class);
			System.out.println(results);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return results;
	}
}
