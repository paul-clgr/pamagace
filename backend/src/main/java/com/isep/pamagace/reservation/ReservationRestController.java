package com.isep.pamagace.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReservationRestController {
    @Autowired
    private IReservationDao reservationDao;
    @Autowired
    private IReservationService reservationService;

    @RequestMapping(value = "/reservation/get/all", method = RequestMethod.GET)
    public List<Reservation> getReservations() {
        return reservationDao.findAllReservations();
    }

    /*@RequestMapping(value = "/reservation/get/by/id/{id}", method = RequestMethod.GET)
    public List<Reservation> getReservationsByID(@PathVariable("id") int id) {
        return reservationDao.findReservationByHouseID(id);
    }*/

    @RequestMapping(value = "/reservation/post", method = RequestMethod.POST)
    public List<Reservation> postReservation() {
        return reservationService.insertReservation();
    }


    }
