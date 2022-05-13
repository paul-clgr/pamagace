package com.isep.pamagace.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserRestController {
    @Autowired
    private IUserDao userDao;
    @Autowired
    private IUserService userService;

    @RequestMapping(value="/user", method = RequestMethod.GET)
    public String hello(@Param("name") String name){
        return "Hello" + name;
    }

    @RequestMapping(value="/users", method = RequestMethod.GET)
    public List<User> getUsers(){
        return userDao.findAll();
    }

    @PostMapping(value="/addUser")
    public User addUser(@RequestBody User user){
        return userService.saveOrUpdateUser(user);
    }
}
