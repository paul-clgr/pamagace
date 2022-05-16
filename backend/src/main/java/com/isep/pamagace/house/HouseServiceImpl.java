package com.isep.pamagace.house;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("houseService")
@Transactional
public class HouseServiceImpl implements IHouseService {
    @Autowired
    private IHouseDao houseDao;

	
}
