package com.isep.pamagace.house;

import com.isep.pamagace.user.User;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="house")
@Data
public class House {
    @Id
    @GeneratedValue
    private Integer id_house;

    @OneToOne
    @JoinColumn(name= "id_user")
    private User user;

    @Column(name = "adress")
    private String adress;

    @Column(name = "type")
    private String type;

    @Column(name = "bedrooms")
    private Integer bedrooms;

    @Column(name = "description")
    private String description;

}
