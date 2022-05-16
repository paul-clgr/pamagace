package com.isep.pamagace.house;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHouseDao extends JpaRepository<House, Integer> {

	
}
