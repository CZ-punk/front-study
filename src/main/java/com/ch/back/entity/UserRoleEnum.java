package com.ch.back.entity;

import lombok.Getter;

@Getter
public enum UserRoleEnum {

    USER(Authority.USER), ADMIN(Authority.ADMIN);

    private final String authority;

    UserRoleEnum(String role) {
        authority = role;
    }

    public static class Authority {

        public static final String USER = "ROLE_USER";
        public static final String ADMIN = "ROLE_ADMIN";
    }
}
