package com.isep.pamagace.picture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("pictureService")
@Transactional
public class PictureServiceImpl implements IPictureService{
    @Autowired
    private IPictureDao pictureDao;
}
