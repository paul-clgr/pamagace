package com.isep.pamagace.message;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;

public interface IMessageService {
    @Modifying
    @Query(value="INSERT INTO Message (id_user_sender, id_user_receiver, message, timestamp) VALUES (?1, ?2, ?3, NOW());",
            nativeQuery = true)
    void postMessage(int id_user_sender, int id_user_receiver, String message) throws Exception;
}
