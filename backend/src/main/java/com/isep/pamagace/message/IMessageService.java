package com.isep.pamagace.message;

import com.isep.pamagace.reservation.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface IMessageService extends JpaRepository<Message, Integer> {

    @Transactional
    @Modifying
    @Query(value="INSERT INTO Message (id_user_sender, id_user_receiver, message, timestamp) VALUES (?1, ?2, ?3, NOW());",
            nativeQuery = true)
    void postMessage(int id_user_sender, int id_user_receiver, String message) throws Exception;
}
