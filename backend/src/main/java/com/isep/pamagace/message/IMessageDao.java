package com.isep.pamagace.message;

import com.isep.pamagace.reservation.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IMessageDao extends JpaRepository<Message, Integer> {
    @Query("Select m from Message where ")
    Reservation findReservationById(int id_reservation);
}
