package com.isep.pamagace.reservation;

import com.isep.pamagace.house.House;
import com.isep.pamagace.user.User;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "reservation")
@Data
public class Reservation {
    @Id
    @GeneratedValue
    private Integer id_reservation;

    @OneToOne
    @JoinColumn(name = "id_user")
    private User user;

    @OneToOne
    @JoinColumn(name = "id_house")
    private House house;


    @Column(name = "date_start", nullable = false)
    private Date date_start;

    @Column(name = "date_end", nullable = false)
    private Date date_end;

    @Column(name = "grade_house", nullable = false)
    private Integer grade_house;

    @Column(name = "grade_host", nullable = false)
    private Integer grade_host;

    @Column(name = "grade_visitor", nullable = false)
    private Integer grade_visitor;

    @Column(name = "status", nullable = false)
    private Integer status;

}
