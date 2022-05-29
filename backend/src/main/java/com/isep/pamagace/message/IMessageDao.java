package com.isep.pamagace.message;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IMessageDao extends JpaRepository<Message, Integer> {
    @Query(value="Select * from Message m WHERE m.id_user_receiver = ?1",nativeQuery = true)
    List<Message> findAllUserInbox(int id_user);

    @Query(value="Select * from Message m WHERE m.id_user_sender = ?1",nativeQuery = true)
    List<Message> findAllUserOutbox(int id_user);

    @Query(value="Select * from Message m WHERE m.id_message",nativeQuery = true)
    Message findMessage(int id_message);

    @Query("Select * from Message m")
    List<Message> findAllMessages();
}
