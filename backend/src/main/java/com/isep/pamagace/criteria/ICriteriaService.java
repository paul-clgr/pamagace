package com.isep.pamagace.criteria;

import java.util.List;

public interface ICriteriaService {
    Criteria saveOrUpdateCritera(Criteria newCriteria);

    List<Criteria> findCriteriasByIds(List<Integer> idCriteria);
}
