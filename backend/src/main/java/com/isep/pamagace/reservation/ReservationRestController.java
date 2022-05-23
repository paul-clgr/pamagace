package com.isep.pamagace.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@RestController
public class ReservationRestController {

    @Autowired
    private IReservationDao reservationDao;
    @Autowired
    private IReservationService reservationService;

    @RequestMapping(value = "api/public/reservation/get/all", method = RequestMethod.GET)
    public List<Reservation> getReservations() {
        return reservationDao.findAllReservations();
    }

    @RequestMapping(value = "api/public/reservation/get/by/id/{reservation_id}", method = RequestMethod.GET)
    public Reservation getReservationByID(@PathVariable("reservation_id") int reservation_id) {
        return reservationDao.findReservationById(reservation_id);
    }

    @RequestMapping(value = "api/public/reservation/post", method = RequestMethod.POST)
    public void postReservation(@RequestParam("id_user") int id_user, @RequestParam("id_house") int id_house,
                                             @RequestParam("date_start") String date_start, @RequestParam("date_end") String date_end,
                                             @RequestParam("grade_house") int grade_house, @RequestParam("grade_host") int grade_host,
                                             @RequestParam("grade_visitor") int grade_visitor, @RequestParam("status") int status) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate date_s = LocalDate.parse(date_start,formatter);
        LocalDate date_e = LocalDate.parse(date_end,formatter);
        reservationService.insertReservation(id_user, id_house, date_s, date_e, grade_house, grade_host, grade_visitor, status);
    }


    }
