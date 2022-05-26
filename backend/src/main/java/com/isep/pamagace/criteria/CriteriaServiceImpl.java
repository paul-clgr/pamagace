package com.isep.pamagace.criteria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service("criteriaService")
@Transactional
public class CriteriaServiceImpl implements ICriteriaService{
@Autowired
    private ICriteriaDao criteriaDao;

    public Criteria saveOrUpdateCritera(Criteria newCriteria){
        return criteriaDao.save(newCriteria);
    }

    @Override
    public List<Criteria> findCriteriasByIds(List<Integer> idCriterias) {
        List<Criteria> criterias = new ArrayList<>();
        for (Integer idCriteria: idCriterias) {
            Criteria criteria = criteriaDao.findById(idCriteria).get();
            criterias.add(criteria);
        }
        return criterias;
        }
    }

