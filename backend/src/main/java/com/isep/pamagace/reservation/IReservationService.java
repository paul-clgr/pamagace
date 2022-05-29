package com.isep.pamagace.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface IReservationService extends JpaRepository<Reservation, Integer>{

    @Modifying
    @Query(value="INSERT INTO Reservation (id_user, id_house, date_start, date_end, grade_house, grade_host, grade_visitor, status) VALUES (?1, ?2, ?3, ?4, ?5,?6,?7,?8);",
            nativeQuery = true)
    Void insertReservation(int id_user, int id_house, Date date_start, Date date_end, int grade_house, int grade_host, int grade_visitor, int status);


}
