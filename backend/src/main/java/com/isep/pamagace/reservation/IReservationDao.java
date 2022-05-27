package com.isep.pamagace.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface IReservationDao extends JpaRepository<Reservation, Integer> {
    @Query("Select r from Reservation r Where r.id_reservation = ?1")
    Reservation findReservationById(int id_reservation);

    @Query(value="Select r from Reservation r Where r.id_user = ?1", nativeQuery = true)
    List<Reservation> findReservationByUserID(int id_user);

    /*@Query("SELECT r FROM Reservation r " + "WHERE r.id_house = :id")
    List<Reservation> findReservationByHouseID(@Param("id") int id);*/

    @Query("SELECT r FROM Reservation r")
    List<Reservation> findAllReservations();
}
