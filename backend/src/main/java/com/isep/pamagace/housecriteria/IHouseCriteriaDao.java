package com.isep.pamagace.housecriteria;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHouseCriteriaDao extends JpaRepository<House_Criteria, Integer> {
}
