package com.wmoore.Assignment3_CRUD_API.character;

import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.List;

@Service
public class CharacterService {
  private final CharacterRepository characterRepository;

  public CharacterService(CharacterRepository characterRepository) {
    this.characterRepository = characterRepository;
  }

  // POST Methods ---------------------------------------------------
  public Character createCharacter(Character character) {
    return characterRepository.save(character);
  }

  // GET Methods ------------------------------------------------------
  public List<Character> getByType(CharacterType type) {
    return characterRepository.findByCharacterType(type);
  }

  public List<Character> searchCharacterByName(String name) {
    return characterRepository.searchByName(name);
  }

  public List<Character> getAllCharacters() {
    return characterRepository.findAll();
  }

  public Character getCharacterById(Long id) {
    return characterRepository.findById(id).orElse(null);
  }

  public Collection<Character> getCharacterByName(String name) {
    return characterRepository.getCharacterByName(name);
  }

  // PUT Methods --------------------------------------------------------
  public Character updateCharacter(Long id, Character updatedCharacter) {
    return characterRepository.findById(id).map(character -> {
      character.setName(updatedCharacter.getName());
      character.setCharacterType(updatedCharacter.getCharacterType());
      character.setAge(updatedCharacter.getAge());
      character.setDescription(updatedCharacter.getDescription());
      character.setChapterFirstAppearance(updatedCharacter.getChapterFirstAppearance());
      character.setImageUrl(updatedCharacter.getImageUrl());
      return characterRepository.save(character);
    }).orElse(null);
  }

  // DELETE Methods -----------------------------------------------------
  public void deleteCharacter(Long id) {
    characterRepository.deleteById(id);
  }
}
