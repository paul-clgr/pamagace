package com.isep.pamagace.housecriteria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("houseCriteriaService")
@Transactional
public class HouseCriteriaServiceImpl implements IHouseCriteriaService{
    @Autowired
    private IHouseCriteriaDao houseCriteriaDao;
}
