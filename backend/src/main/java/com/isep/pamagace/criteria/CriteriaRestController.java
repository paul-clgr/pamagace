package com.isep.pamagace.criteria;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/public/criteria")
public class CriteriaRestController {
	@Autowired
	private ICriteriaDao criteriaDao;
	@Autowired
	private ICriteriaService criteriaService;
	
	//CriteriaRestController(ICriteriaDao criteria){
	//	this.criteriaDao =criteria;
	//}

	public CriteriaRestController() {
	}

	@GetMapping("/all")
	List<Criteria> all() {
		return criteriaDao.findAll();
	}
	
	@GetMapping("/id")
	Optional<Criteria> byID(Integer id) {
		return criteriaDao.findById(id);
	}

	@PostMapping("/addCriteria")
	Criteria addCriteria(@RequestBody Criteria newCriteria){ return criteriaService.saveOrUpdateCritera(newCriteria);}
}
