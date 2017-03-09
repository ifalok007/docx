package com.counsellink.techeval.web.rest;

import java.util.List;

import javax.inject.Inject;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.counsellink.techeval.domain.Album;
import com.counsellink.techeval.repository.SearchRepository;

@RestController
@RequestMapping("/api")
public class SearchResultResource {
	
	@Inject
	private SearchRepository searchRepo;

	@RequestMapping(value = "/search/{keyword}", 
			method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Album> searchInAll(@PathVariable String keyword) {
		System.out.println("**********************SEARCH IN ALL********************");
		List<Album> searchResults = searchRepo.doSearch(keyword);
		System.out.println("RESULTS "+searchResults);
		return searchResults;
	}
}
