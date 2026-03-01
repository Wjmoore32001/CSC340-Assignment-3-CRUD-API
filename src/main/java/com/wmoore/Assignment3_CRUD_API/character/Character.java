package com.wmoore.Assignment3_CRUD_API.character;

import jakarta.persistence.*;
import org.hibernate.type.EntityType;

@Entity
@Table(name = "characters")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long characterId;

    @Column(nullable = false, length = 60, unique = true)
    public String name;
    @Enumerated(EnumType.STRING)
    public CharacterType characterType;

    public Integer age;
    public String description;
    public int chapterFirstAppearance;


    protected Character(){}

    Character(String name){
        this.name = name;
    }


    // Getter & Setters
    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }
}
