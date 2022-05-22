package com.isep.pamagace.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class UserRestController {
    @Autowired
    private IUserDao userDao;
    @Autowired
    private IUserService userService;

    @GetMapping(value="")
    public String welcome(){return "Welcome";}
    @RequestMapping(value="api/user/welcome", method = RequestMethod.GET)
    public String hello(Principal principal){
        return "Hello " + principal.getName();
    }

    @RequestMapping(value="api/admin/users", method = RequestMethod.GET)
    public List<User> getUsers(){
        return userDao.findAll();
    }

    @PostMapping(value="api/public/addUser")
    public User addUser(@RequestBody User user){
        return userService.saveOrUpdateUser(user);
    }

    @PostMapping(value="api/admin/addAdmin")
    public User addAdminUser(@RequestBody User user){
        return userService.saveOrUpdateUserAdmin(user);
    }

    @PostMapping(value="api/user/deleteUser")
    public void deleteUser(@RequestBody User user){
        userDao.delete(user);
    }

    @PostMapping(value="api/admin/declareAdmin")
    public User addAdminRole(@RequestBody User user){return userService.updateAdmin(user);}
}
