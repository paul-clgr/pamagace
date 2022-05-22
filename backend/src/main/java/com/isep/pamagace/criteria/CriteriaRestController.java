package com.isep.pamagace.criteria;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/criteria")
public class CriteriaRestController {
	
	private final ICriteriaDao criteria;
	
	CriteriaRestController(ICriteriaDao criteria){
		this.criteria=criteria;
	}
	
	@GetMapping("/all")
	List<Criteria> all() {
		return criteria.findAll();
	}
	
	@GetMapping("/id")
	Optional<Criteria> byID(Integer id) {
		return criteria.findById(id);
	}
	
	
}
