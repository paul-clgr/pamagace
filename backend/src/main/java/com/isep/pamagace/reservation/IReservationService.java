package com.isep.pamagace.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import java.util.List;

@Component
public interface IReservationService {
	@Query("Select r from Reservation r Where r.id_reservation = ?1")
	Reservation findReservationById(int id_reservation);

	@Query("Select r from Reservation r Where r.id_user = ?1")
	List<Reservation> findReservationByUserID(int id_user);

	@Query("Select r from Reservation r Where r.id_house = ?1")
	List<Reservation> findReservationByHouseID(int id_house);

	@Query("SELECT r FROM Reservation r")
	List<Reservation> findAllReservations();
}
