package com.wmoore.Assignment3_CRUD_API.character;

import jakarta.persistence.*;

@Entity
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long characterId;

    @Column(nullable = false, length = 60, unique = true)
    public String name;

    public Integer age;
    public
}
