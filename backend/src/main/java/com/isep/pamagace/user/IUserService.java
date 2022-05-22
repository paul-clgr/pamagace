package com.isep.pamagace.user;

public interface IUserService {
    User saveOrUpdateUser(User user);

    User saveOrUpdateUserAdmin(User user);
}
