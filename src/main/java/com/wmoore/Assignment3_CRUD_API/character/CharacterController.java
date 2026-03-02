package com.wmoore.Assignment3_CRUD_API.character;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/characters")
public class CharacterController {
  private final CharacterService characterService;

  public CharacterController(CharacterService characterService) {
    this.characterService = characterService;
  }

  @PostMapping("/create-character")
  public Character createCharacter(@RequestBody Character character) {
    return characterService.createCharacter(character);
  }

  @GetMapping("/get-character/all")
  public ResponseEntity<List<Character>> getAllCharacters() {
    return ResponseEntity.ok(characterService.getAllCharacters());
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

}
