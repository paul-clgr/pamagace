package com.isep.pamagace.house;


import java.util.List;

import com.isep.pamagace.criteria.Criteria;
import com.isep.pamagace.criteria.ICriteriaDao;
import com.isep.pamagace.criteria.ICriteriaService;
import com.isep.pamagace.user.IUserDao;
import com.isep.pamagace.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("houseService")
@Transactional
public class HouseServiceImpl implements IHouseService {
    @Autowired
    private IHouseDao houseDao;
    @Autowired
    private ICriteriaDao criteriaDao;
    @Autowired
    private IUserDao userDao;

    @Autowired
    private ICriteriaService criteriaService;


    @Override
    @Transactional
    public House saveOrUpdateHouse(House house, int idUser, List<Integer> idCriteria) {
        User user = userDao.findById(idUser).get();
        house.setUser(user);
        List<Criteria> criterias = criteriaService.findCriteriasByIds(idCriteria);
        house.setCriterias(criterias);
        return houseDao.save(house);
    }
}
