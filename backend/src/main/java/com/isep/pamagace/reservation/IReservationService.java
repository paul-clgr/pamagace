package com.isep.pamagace.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import java.util.List;

@Repository
public interface IReservationService extends JpaRepository<Reservation, Integer>{
    @Modifying
    @Query(value="INSERT INTO Reservation (id_user, id_house, date_start, date_end, grade_house, grade_host, grade_visitor, status) VALUES (1, 2, '2022-10-01', '2022-10-15', 5,5,5,0);",
            nativeQuery = true)
    List<Reservation> insertReservation();
}
