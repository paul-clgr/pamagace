package com.isep.pamagace.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

@Service("userService")
@Transactional
public class UserServiceImpl implements IUserService, UserDetailsService {
    @Autowired
    private IUserDao userDao;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserServiceImpl(IUserDao userDao, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userDao = userDao;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Objects.requireNonNull(username);
        return userDao.findUserWithName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    @Transactional
    public User saveOrUpdateUser(User user) {
        if (null == user.getIduser()) {
            user.setRole("USER");
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        } else {
            Optional<User> userFromDB = findUserByID(user.getIduser());
            if (!bCryptPasswordEncoder.matches(user.getPassword(), userFromDB.get().getPassword())) {
                user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            } else {
                user.setPassword(userFromDB.get().getPassword());
            }
        }
        return userDao.save(user);
    }

    public User saveOrUpdateUserAdmin(User user) {
        if (null == user.getIduser()) {
            user.setRole("ADMIN");
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        } else {
            Optional<User> userFromDB = findUserByID(user.getIduser());
            if (!bCryptPasswordEncoder.matches(user.getPassword(), userFromDB.get().getPassword())) {
                user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            } else {
                user.setPassword(userFromDB.get().getPassword());
            }
        }
        return userDao.save(user);
    }

    @Override
    public User updateAdmin(User user) {
        user.setRole("ADMIN");
        return userDao.save(user);
    }


    private Optional<User> findUserByID(Integer id_user) {
        return userDao.findById(id_user);
    }
}
