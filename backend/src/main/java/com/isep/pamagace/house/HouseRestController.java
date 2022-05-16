package com.isep.pamagace.house;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/house")
public class HouseRestController {

	private final IHouseDao house;

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

}
