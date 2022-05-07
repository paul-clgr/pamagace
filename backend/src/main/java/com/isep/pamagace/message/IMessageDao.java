package com.isep.pamagace.message;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMessageDao extends JpaRepository<Message, Integer> {
}
