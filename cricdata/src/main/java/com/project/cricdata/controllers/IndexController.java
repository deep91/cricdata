package com.project.cricdata.controllers;

import java.io.InputStream;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class IndexController {
	
	
	public static String API_URL ="dev132-cricket-live-scores-v1.p.rapidapi.com";
	public static String API_KEY ="fbbb6225efmsh9af32cb41e0cea3p14af0fjsn6bda50795da7";
	
	@RequestMapping("/welcome")
	public String WelcomeMsg ()
	{
		return "Welcome to CricData";
	}
	
	@RequestMapping("/")
	public HttpResponse<String> allMatches() throws UnirestException
	{
		
		
		HttpResponse<String> response = Unirest.get("https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=5&inprogresslimit=5&upcomingLimit=5")
				.header("x-rapidapi-host", "dev132-cricket-live-scores-v1.p.rapidapi.com")
				.header("x-rapidapi-key", "fbbb6225efmsh9af32cb41e0cea3p14af0fjsn6bda50795da7")
				.asString();
		
        System.out.println("Response"+response);
        
		int code = response.getStatus();
        System.out.println("code"+code);
        
        Map<String, List<String>> headers = response.getHeaders();
        System.out.println("headers"+headers);
        
        String body = response.getBody();
        System.out.println("body"+body);

        InputStream rawBody = response.getRawBody();
        System.out.println("rawBody"+rawBody);

	
	return response;
	}
	
	@RequestMapping("/series")
	public HttpResponse<String> allseries() throws UnirestException
	{
		HttpResponse<String> response = Unirest.get("https://dev132-cricket-live-scores-v1.p.rapidapi.com/series.php")
				.header("x-rapidapi-host", "dev132-cricket-live-scores-v1.p.rapidapi.com")
				.header("x-rapidapi-key", "fbbb6225efmsh9af32cb41e0cea3p14af0fjsn6bda50795da7")
				.asString();
		System.out.println("Hitting Series");
	      System.out.println("Response"+response);
	        
			int code = response.getStatus();
	        System.out.println("code"+code);
	        
	        Map<String, List<String>> headers = response.getHeaders();
	        System.out.println("headers"+headers);
	        
	        String body = response.getBody();
	        System.out.println("body"+body);

	        InputStream rawBody = response.getRawBody();
	        System.out.println("rawBody"+rawBody);
		return response;
	}

}
