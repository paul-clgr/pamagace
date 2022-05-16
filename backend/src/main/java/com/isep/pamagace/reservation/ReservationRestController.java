package com.isep.pamagace.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationRestController {
    @Autowired
    private IReservationService reservationService;

    @RequestMapping(value = "/reservation/get/all/", method = RequestMethod.GET)
    public void getReservations() {
        reservationService.findAllReservations();
    }
}
