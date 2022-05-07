package com.isep.pamagace.picture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPictureDao extends JpaRepository<Picture, Integer> {
}
