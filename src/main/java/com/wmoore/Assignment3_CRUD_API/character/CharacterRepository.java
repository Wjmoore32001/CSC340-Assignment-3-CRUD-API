package com.wmoore.Assignment3_CRUD_API.character;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {

  @Query("select c from Character c where c.name = :name")
  Collection<Character> getCharacterByName(@Param("name") String name);
}
