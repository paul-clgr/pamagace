package com.isep.pamagace.criteria;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="criteria")
@Data
public class Criteria {
    public Integer getId_criteria() {
		return id_criteria;
	}

	public void setId_criteria(Integer id_criteria) {
		this.id_criteria = id_criteria;
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
    @GeneratedValue
    private Integer id_criteria;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "category", nullable = false)
    private String category;
}
