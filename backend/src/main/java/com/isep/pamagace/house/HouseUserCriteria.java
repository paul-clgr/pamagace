package com.isep.pamagace.house;

import lombok.Data;

import java.io.Serializable;
import java.util.List;


@Data
public class HouseUserCriteria implements Serializable {
private House house;
private int idUser;

private List<Integer> criteria;

    public HouseUserCriteria(House house, int idUser, List<Integer> idCriteria) {
        this.house = house;
        this.idUser = idUser;
        this.criteria = idCriteria;
    }

    public HouseUserCriteria() {
    }

//    getter setter paul
    
	public House getHouse() {
		return house;
	}

	public void setHouse(House house) {
		this.house = house;
	}

	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public List<Integer> getCriteria() {
		return criteria;
	}

	public void setCriteria(List<Integer> criteria) {
		this.criteria = criteria;
	}
}
