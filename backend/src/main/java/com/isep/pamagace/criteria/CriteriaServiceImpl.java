package com.isep.pamagace.criteria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("criteraiService")
@Transactional
public class CriteriaServiceImpl implements ICriteriaService{
@Autowired
    private ICriteriaDao criteriaDao;
}
