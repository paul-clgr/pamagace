package com.isep.pamagace.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    @RequestMapping(value = "/reservation/get/by/id/{reservation_id}", method = RequestMethod.GET)
    public Reservation getReservationByID(@PathVariable("reservation_id") int reservation_id) {
        return reservationDao.findReservationById(reservation_id);
    }

    @RequestMapping(value = "/reservation/post", method = RequestMethod.POST)
    public List<Reservation> postReservation(@RequestParam("id_user") int id_user, @RequestParam("id_house") int id_house,
                                             @RequestParam("date_start") Date date_start, @RequestParam("date_end") Date date_end,
                                             @RequestParam("grade_house") int grade_house, @RequestParam("grade_host") int grade_host,
                                             @RequestParam("grade_visitor") int grade_visitor, @RequestParam("status") int status) {
        return reservationService.insertReservation(id_user, id_house, date_start, date_end, grade_house, grade_host, grade_visitor, status);
    }


    }
