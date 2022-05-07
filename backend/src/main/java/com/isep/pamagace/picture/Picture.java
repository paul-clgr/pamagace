package com.isep.pamagace.picture;

import com.isep.pamagace.house.House;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="picture")
@Data
public class Picture {
    @Id
    @GeneratedValue
    private Integer id_picture;

    @OneToOne
    @JoinColumn(name = "id_house")
    private House house;

    @Column(name = "link", nullable = false)
    private String link;

}
