package com.isep.pamagace.house;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isep.pamagace.criteria.Criteria;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/public/house")
public class HouseRestController {
	@Autowired
	private final IHouseDao house;
	
	@Autowired
	private IHouseService houseService;

	HouseRestController(IHouseDao house) {
		this.house = house;
	}

	@GetMapping("/all")
	List<House> all() {
		return house.findAll();
	}

	@GetMapping("/{id}")
	Optional<House> byId(@PathVariable int id) {
		return house.findById(id);
	}
	
	@GetMapping("/owner")
	List<House> byOwner(Integer id_user) {
		return house.findAllByuserIduser(id_user);
	}
	
	@PostMapping("/search")
	List<House> byCriteria(@RequestBody HouseSearchCriterias houseSearchCriterias){
		return house.findDistinctByBedroomsAndCityAndCriterias_idcriteriaIn(houseSearchCriterias.getBedrooms(), houseSearchCriterias.getCity(), houseSearchCriterias.getIdcriterias());
	}
	
	@PostMapping("/addhouse")
	House addHouse(@RequestBody HouseUserCriteria houseUserCriteria) {
		return houseService.saveOrUpdateHouse(houseUserCriteria.getHouse(), houseUserCriteria.getIdUser(), houseUserCriteria.getCriteria());
	}

}
