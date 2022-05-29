package com.isep.pamagace.house;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHouseDao extends JpaRepository<House, Integer> {

	
	List<House> findAllByuserIduser(Integer id_user);
	
	List<House> findByTypeOrBedroomsOrCity(String type, Integer bedrooms, String city);
	
}
