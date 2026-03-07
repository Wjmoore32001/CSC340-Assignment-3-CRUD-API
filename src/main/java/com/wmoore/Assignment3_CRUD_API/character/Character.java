package com.wmoore.Assignment3_CRUD_API.character;

import jakarta.persistence.*;

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
  public Integer chapterFirstAppearance;

  protected Character() {
  }

  // Getter & Setters
  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
