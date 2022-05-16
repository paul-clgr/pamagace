package com.isep.pamagace.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.EntityManager;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service("reservationServiceImpl")
@Transactional
public class ReservationServiceImpl{
    @Autowired
    private IReservationDao reservationDao;
    @Autowired
    private EntityManager entityManager;




}
