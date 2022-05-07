package com.isep.pamagace.message;

import com.isep.pamagace.user.User;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "message")
@Data

public class Message {
    @Id
    @GeneratedValue
    private Integer id_message;

    @OneToOne
    @JoinColumn(name = "id_user_sender")
    private User user_sender;

    @OneToOne
    @JoinColumn(name = "id_user_receiver")
    private User user_receiver;

    @Column(name = "message", nullable = false)
    private String message;

    @Column(name = "timestamp", nullable = false)
    private Date timestamp;
}
