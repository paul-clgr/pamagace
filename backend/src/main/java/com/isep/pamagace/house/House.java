package com.isep.pamagace.house;

import com.isep.pamagace.user.User;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "house")
@Data
public class House {

	@Id
	@GeneratedValue
	private Integer id_house;

//	@OneToOne
//	@JoinColumn(name = "id_user")
//	private User user;

	@Column(name = "adress")
	private String adress;

	@Column(name = "type")
	private String type;

	@Column(name = "bedrooms")
	private Integer bedrooms;

	@Column(name = "description")
	private String description;

	public Integer getId_house() {
		return id_house;
	}

	public void setId_house(Integer id_house) {
		this.id_house = id_house;
	}

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}

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

}
