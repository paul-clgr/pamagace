package com.isep.pamagace.house;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class HouseSearchCriterias implements Serializable {

	private int bedrooms;
	private String city;
	private List<Integer> idCriterias;

	public HouseSearchCriterias(int bedrooms, String city, List<Integer> idCriterias) {
		this.bedrooms = bedrooms;
		this.city = city;
		this.idCriterias = idCriterias;
	}

	public HouseSearchCriterias() {
	}

//  getter setter paul

	public int getBedrooms() {
		return bedrooms;
	}

	public void setBedrooms(int bedrooms) {
		this.bedrooms = bedrooms;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public List<Integer> getIdcriterias() {
		return idCriterias;
	}

	public void setIdcriterias(List<Integer> idcriterias) {
		this.idCriterias = idcriterias;
	}

}
