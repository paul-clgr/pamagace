package com.isep.pamagace.house;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.isep.pamagace.criteria.Criteria;
import com.isep.pamagace.user.User;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@Entity
@Table(name = "house")
@Data
public class House implements Serializable {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_house")
	private Integer idhouse;

	@OneToOne
	@JoinColumn(name = "id_user")
	private User user;


	@Column(name = "adress")
	private String adress;

	@Column(name = "type")
	private String type;

	@Column(name = "bedrooms")
	private Integer bedrooms;

	@Column(name = "description")
	private String description;
	
	@Column(name = "city")
	private String city;

	@ManyToMany
	@JoinTable(name="criteria_house",
	joinColumns = @JoinColumn(name="id_house"),
	inverseJoinColumns = @JoinColumn(name="id_criteria"))
	@JsonIgnoreProperties("houses")
	List<Criteria> criterias;
	public House() {

	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	//public Integer getId_house() {
	//	return id_house;
	//}

	public void setIdhouse(Integer id_house) {
		this.idhouse = id_house;
	}

	public User getUser() {
		return user;
	}

	//public void setUser(User user) {
	//	this.user = user;
	//}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getBedrooms() {
		return bedrooms;
	}

	public void setBedrooms(Integer bedrooms) {
		this.bedrooms = bedrooms;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public House( String adress, String type, Integer bedrooms, String description, String city) {
		this.adress = adress;
		this.type = type;
		this.bedrooms = bedrooms;
		this.description = description;
		this.city = city;
	}

	public List<Criteria> getCriterias() {
		return criterias;
	}

	public void setCriterias(List<Criteria> criterias) {
		this.criterias = criterias;
	}

	public Integer getIdhouse() {
		return idhouse;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
