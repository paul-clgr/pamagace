package com.isep.pamagace.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
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
                                             @RequestParam("date_start") String date_start, @RequestParam("date_end") String date_end) throws Exception {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date_s = formatter.parse(date_start);
        Date date_e = formatter.parse(date_end);

        List<Reservation> currentReservations = reservationDao.findCurrentReservationsByHouseID(id_house);
        for (Reservation reservation : currentReservations) {
            if (date_s.before(reservation.getDate_end()) && date_s.after(reservation.getDate_start())) {
                throw new Exception("House unavailable these dates.");
            }
        }
        reservationService.insertReservation(id_user, id_house, date_s, date_e);

    }

    @RequestMapping(value = "api/public/reservation/update/grade/host/{id_reservation}", method = RequestMethod.PUT)
    public void putGradeHost(@PathVariable("id_reservation") int id_reservation, @RequestParam("grade_host") int grade_host) {
        reservationService.setHostGrade(id_reservation, grade_host);
    }

    @RequestMapping(value = "api/public/reservation/update/grade/house/{id_reservation}", method = RequestMethod.PUT)
    public void putGradeHouse(@PathVariable("id_reservation") int id_reservation, @RequestParam("grade_house") int grade_house) {
        reservationService.setHouseGrade(id_reservation, grade_house);
    }

    @RequestMapping(value = "api/public/reservation/update/grade/visitor/{id_reservation}", method = RequestMethod.PUT)
    public void putGradeVisitor(@PathVariable("id_reservation") int id_reservation, @RequestParam("grade_visitor") int grade_visitor) {
        reservationService.setVisitorGrade(id_reservation, grade_visitor);
    }

    @RequestMapping(value = "api/public/reservation/get/house/grade/{id_house}", method = RequestMethod.GET)
    public int getHouseGrade(@PathVariable("id_house") int id_house) {
        return reservationDao.findHouseGrade(id_house);
    }

    @RequestMapping(value = "api/public/reservation/get/user/grade/{id_user}", method = RequestMethod.GET)
    public int getUserGrade(@PathVariable("id_user") int id_user) {
        return reservationDao.findUserGrade(id_user);
    }

    }
