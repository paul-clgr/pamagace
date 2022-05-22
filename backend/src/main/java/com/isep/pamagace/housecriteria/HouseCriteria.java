package com.isep.pamagace.housecriteria;

import com.isep.pamagace.criteria.Criteria;
import com.isep.pamagace.house.House;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="house_criteria")
@Data
public class HouseCriteria {
    @Id
    @GeneratedValue
    private Integer id_hc;

    @OneToOne
    @JoinColumn(name="id_house")
    private House house;

    @OneToMany
    private List<Criteria> criterias = new ArrayList<>();
}
