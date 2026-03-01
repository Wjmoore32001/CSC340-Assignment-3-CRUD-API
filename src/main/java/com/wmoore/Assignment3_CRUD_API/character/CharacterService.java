package com.wmoore.Assignment3_CRUD_API.character;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {
    private final CharacterRepository characterRepository;

    public CharacterService(CharacterRepository characterRepository){
        this.characterRepository = characterRepository;
    }

    public List<Character> getAll(){
        return characterRepository.findAll();
    }
}
