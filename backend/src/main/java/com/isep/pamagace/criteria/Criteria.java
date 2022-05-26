package com.isep.pamagace.criteria;

import com.isep.pamagace.house.House;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="criteria")
@Data
public class Criteria {

    public Integer getIdcriteria() {
		return idcriteria;
	}

	public void setIdcriteria(Integer id_criteria) {
		this.idcriteria = id_criteria;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_criteria")
    private Integer idcriteria;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "category", nullable = false)
    private String category;

	@ManyToMany(mappedBy = "criterias")
	List<House> houses;
	public Criteria(String name, String description, String category) {
		this.name = name;
		this.description = description;
		this.category = category;
	}

	public Criteria(){}
}
