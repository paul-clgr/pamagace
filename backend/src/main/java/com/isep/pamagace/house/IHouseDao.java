package com.isep.pamagace.house;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isep.pamagace.criteria.Criteria;

@Repository
public interface IHouseDao extends JpaRepository<House, Integer> {

	
	List<House> findAllByuserIduser(Integer id_user);
	
	List<House> findDistinctByBedroomsAndCityAndCriterias_idcriteriaIn( Integer bedrooms, String city, List<Integer> idCriterias);
	
}
