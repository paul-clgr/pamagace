package com.isep.pamagace.house;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

	@GetMapping("/id")
	Optional<House> byId(Integer id) {
		return house.findById(id);
	}
	
	@GetMapping("/owner")
	List<House> byOwner(Integer id_user) {
		return house.findAllByuserIduser(id_user);
	}
	
	@GetMapping("/search")
	List<House> byCriteria(String type, Integer bedrooms, String city){
		return house.findByTypeAndBedroomsAndCity(type, bedrooms, city);
	}
	
	@PostMapping("/addhouse")
	House addHouse(@RequestBody HouseUserCriteria houseUserCriteria) {
		return houseService.saveOrUpdateHouse(houseUserCriteria.getHouse(), houseUserCriteria.getIdUser(), houseUserCriteria.getCriteria());
	}

}
