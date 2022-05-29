package com.isep.pamagace.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface IReservationDao extends JpaRepository<Reservation, Integer> {
    @Query(value = "Select * from Reservation r Where r.id_reservation = ?1", nativeQuery = true)
    Reservation findReservationById(int id_reservation);

    @Query(value="Select * from Reservation r Where r.id_user = ?1", nativeQuery = true)
    List<Reservation> findReservationByUserID(int id_user);

    @Query(value = "SELECT * FROM Reservation r WHERE r.id_house = ?1", nativeQuery = true)
    List<Reservation> findReservationsByHouseID(int id);

    @Query(value = "SELECT * FROM Reservation r WHERE r.id_house = ?1 AND r.status = 2", nativeQuery = true)
    List<Reservation> findCurrentReservationsByHouseID(int id);

    @Query(value = "SELECT * FROM Reservation r", nativeQuery = true)
    List<Reservation> findAllReservations();

    @Query(value = "SELECT AVG(grade_host + grade_visitor) FROM Reservation r JOIN House h ON r.id_house = h.id_house WHERE r.id_user = ?1 OR h.id_user = ?1", nativeQuery = true)
    int findUserGrade(int id_user);

    @Query(value = "SELECT AVG(grade_house) FROM Reservation r WHERE r.id_house = ?1", nativeQuery = true)
    int findHouseGrade(int id_house);
}
