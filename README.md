# CSC340-Assignment-3-CRUD-API

OneDrive Video:
https://uncg-my.sharepoint.com/:v:/g/personal/wjmoore_uncg_edu/IQBOaF6WsvsKQaRnPkjaezaGAUERxPWX4OBhTfv2al93ltI?e=8VyCzD&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D

# Demo 

## 1. Create a Character 

  curl -i -X POST http://localhost:8080/characters/create-character \
    -H "Content-Type: application/json" \
    -d '{"name":"Yuji","age":15,"chapterFirstAppearance":1,"characterType":"JUJUTSU_SORCERER","description":"Main character"}'; echo

## 2. Get all Characters 

curl -i http://localhost:8080/characters/get-character/all; echo

### 3. Get Character by ID 

Worked:

curl -i http://localhost:8080/characters/get-character/all; echo

Failed:

curl -i http://localhost:8080/characters/get-character/99999; echo

### 4. Get Character by Type (role)

Cursed Spirit: 

curl -i "http://localhost:8080/characters/by-type?type=CURSED_SPIRIT"; echo

JUJUTSU_SORCERER: 

curl -i "http://localhost:8080/characters/by-type?type=JUJUTSU_SORCERER"; echo

### 5. Search by substring 

Valid:

curl -i "http://localhost:8080/characters/search?name=go"; echo

No results:

curl -i "http://localhost:8080/characters/search?name=zzzz"; echo

### 6. Get by name 

Success: 

curl -i http://localhost:8080/characters/get-character-name/Yuji; echo

Error:

curl -i http://localhost:8080/characters/get-character-name/DoesNotExist; echo

### 7. Update Name 

Success:

curl -i -X PUT http://localhost:8080/characters/update-character/name/ID_YUJI/YujiUpdated; echo

Confirm:

curl -i http://localhost:8080/characters/get-character/ID_YUJI; echo

Error:

curl -i -X PUT http://localhost:8080/characters/update-character/name/99999/Nope; echo

### 8. Delete character 

curl -i -X DELETE http://localhost:8080/characters/delete-character/ID_GOJO; echo

Confirm:

curl -i http://localhost:8080/characters/get-character/ID_GOJO; echo
