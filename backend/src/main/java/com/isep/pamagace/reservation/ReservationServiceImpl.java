package com.isep.pamagace.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("reservationService")
@Transactional
public class ReservationServiceImpl {
    @Autowired
    private IReservationDao reservationDao;
}
