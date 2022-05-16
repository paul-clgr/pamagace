package com.isep.pamagace.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface IReservationDao extends JpaRepository<Reservation, Integer> {
	/*@Transactional
	void postNewReservation(int id_user, int id_house, Date date_start, Date date_end);

	@Modifying
	@Query
	void modifyReservation(int id_reservation, int id_user, int id_house, Date date_start, 
			Date date_end);

	@Modifying
	@Query
	void deleteReservation(int id_reservation);*/
}
