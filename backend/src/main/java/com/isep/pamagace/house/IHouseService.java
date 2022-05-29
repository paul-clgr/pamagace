package com.isep.pamagace.house;


import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IHouseService {


	House saveOrUpdateHouse(House house, int idUser, List<Integer> idCriteria);
}
