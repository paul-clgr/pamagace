package com.isep.pamagace.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface IReservationService extends JpaRepository<Reservation, Integer>{

    @Transactional
    @Modifying
    @Query(value="INSERT INTO Reservation (id_user, id_house, date_start, date_end, status) VALUES (?1, ?2, ?3, ?4, 1);",
            nativeQuery = true)
    void insertReservation(int id_user, int id_house, Date date_start, Date date_end);

    @Transactional
    @Modifying
    @Query(value="UPDATE Reservation SET grade_house = ?2 WHERE id_reservation = ?1",
            nativeQuery = true)
    void setHouseGrade(int id_reservation, int grade_house);

    @Transactional
    @Modifying
    @Query(value="UPDATE Reservation SET grade_host = ?2 WHERE id_reservation = ?1",
            nativeQuery = true)
    void setHostGrade(int id_reservation, int grade_host);

    @Transactional
    @Modifying
    @Query(value="UPDATE Reservation SET grade_visitor = ?2 WHERE id_reservation = ?1",
            nativeQuery = true)
    void setVisitorGrade(int id_reservation, int grade_visitor);


}
