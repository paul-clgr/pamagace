package com.isep.pamagace.criteria;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICriteriaDao extends JpaRepository<Criteria,Integer> {
}
