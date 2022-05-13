package com.isep.pamagace.user;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "user")
@Data
public class User implements Serializable, UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_user;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "firstname", nullable = false)
    private String firstname;

    @Column(name = "lastname", nullable = false)
    private String lastname;

    @Column(name = "emailadress", nullable = false)
    private String emailadress;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "birthday", nullable = false)
    private Date birthday;

    @Column(name="authorization", nullable = false)
    private String authorization;

    public User(String username, String firstname, String lastname, String emailadress, String password, Date birthday, String authorization) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.emailadress = emailadress;
        this.password = password;
        this.birthday = birthday;
        this.authorization = authorization;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
        GrantedAuthority authority = new SimpleGrantedAuthority(authorization);
        grantList.add(authority);
        return grantList;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }
}
