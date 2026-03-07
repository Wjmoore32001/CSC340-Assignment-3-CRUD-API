package com.wmoore.Assignment3_CRUD_API.character;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/characters")
public class CharacterController {
  private final CharacterService characterService;

  public CharacterController(CharacterService characterService) {
    this.characterService = characterService;
  }

  // GetMappings
  @GetMapping("/get-character/all")
  public ResponseEntity<List<Character>> getAllCharacters() {
    return ResponseEntity.ok(characterService.getAllCharacters());
  }

  @GetMapping("/get-character-name/{name}")
  public ResponseEntity<Collection<Character>> getCharacterByName(@PathVariable String name) {
    Collection<Character> c = characterService.getCharacterByName(name);
    if (c != null) {
      return ResponseEntity.ok(c);
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @GetMapping("/get-character/{id}")
  public ResponseEntity<?> getCharacterById(@PathVariable Long id) {
    Character c = characterService.getCharacterById(id);
    if (c != null) {
      return ResponseEntity.ok(c);
    } else {
      return ResponseEntity.status(404).body(Map.of("error", "Character Not Found", "id", id));
    }

  }

  @GetMapping("/search")
  public List<Character> searchCharacterByName(@RequestParam String name) {
    return characterService.searchCharacterByName(name);
  }

  // PostMappings
  @PostMapping("/create-character")
  public Character createCharacter(@RequestBody Character character) {
    return characterService.createCharacter(character);
  }

  // PutMappings
  @PutMapping("/update-character/name/{id}/{newName}")
  public ResponseEntity<?> updateCharacterName(@PathVariable Long id, @PathVariable String newName) {
    Character c = characterService.updateCharacterName(id, newName);
    if (c != null) {
      return ResponseEntity.ok(c);
    } else {
      return ResponseEntity.status(404).body(Map.of("error", "character not found", "id", id));
    }
  }

  // DeleteMappings
  @DeleteMapping("/delete-character/{id}")
  public ResponseEntity<Void> deleteCharacter(@PathVariable Long id) {
    characterService.deleteCharacter(id);
    return ResponseEntity.noContent().build();
  }

}
