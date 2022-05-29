package com.isep.pamagace.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserRestController {
    @Autowired
    private IUserDao userDao;
    @Autowired
    private IUserService userService;

    @GetMapping(value = "")
    public String welcome() {
        return "Welcome";
    }

    @RequestMapping(value = "api/user/welcome", method = RequestMethod.GET)
    public String hello(Principal principal) {
        return "Hello " + principal.getName();
    }

    @RequestMapping(value = "api/admin/users", method = RequestMethod.GET)
    public List<User> getUsers() {
        return userDao.findAll();
    }

    @PostMapping(value = "api/public/addUser")
    public User addUser(@RequestBody User user) {
        return userService.saveOrUpdateUser(user);
    }

    @PostMapping(value = "api/admin/addAdmin")
    public User addAdminUser(@RequestBody User user) {
        return userService.saveOrUpdateUserAdmin(user);
    }

    @PostMapping(value = "api/user/deleteUser")
    public void deleteUser(@RequestBody User user) {
        userDao.delete(user);
    }

    @PostMapping(value = "api/admin/declareAdmin")
    public User addAdminRole(@RequestBody User user) {
        return userService.updateAdmin(user);
    }


    @GetMapping(value = "api/public/user/{username}")
    public Optional<User> getUser(@PathVariable(value = "username") String username) {
        return userDao.findUserWithName(username);
    }

    @PostMapping(value = "api/public/login")
    public User login(@RequestBody String username) {
        System.out.println(username);
        return  userDao.findUserWithName(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        //System.out.println(user);
        //return user;
    }

    @GetMapping(value = "api/public/login")
    public User login(Principal principal) {
        System.out.println(principal.getName());
        return  userDao.findUserWithName(principal.getName()).orElseThrow(() -> new UsernameNotFoundException("User not found"));}

}
