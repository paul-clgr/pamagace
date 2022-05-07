package com.isep.pamagace.criteria;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="criteria")
@Data
public class Criteria {
    @Id
    @GeneratedValue
    private Integer id_criteria;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "category", nullable = false)
    private String category;
}
