# CSC340-Assignment-3-CRUD-API
assignment 4 Demo OneDrive Videos:
https://uncg-my.sharepoint.com/:v:/g/personal/wjmoore_uncg_edu/IQA8VqDEza3ZQZSx3LFUvKxfAZZuJtaD_0Cb6sEejZzEDjY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=V5woOY


assignment 3 Demo OneDrive Video:
https://uncg-my.sharepoint.com/:v:/g/personal/wjmoore_uncg_edu/IQBOaF6WsvsKQaRnPkjaezaGAUERxPWX4OBhTfv2al93ltI?e=8VyCzD&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D

# Assignment 3 CRUD API – Jujutsu Kaisen Characters

This is a Spring Boot CRUD API that stores Jujutsu Kaisen character records in a Neon PostgreSQL database.

## Installation

Prerequisites
- Java 21
- A Neon.tech PostgreSQL database

Setup
1. Clone the repository.
2. Open `src/main/resources/application.properties` and set your Neon connection.

Example
spring.datasource.url=jdbc:postgresql://YOUR_NEON_HOST:5432/YOUR_DB?sslmode=require  
spring.datasource.username=YOUR_NEON_USERNAME  
spring.datasource.password=YOUR_NEON_PASSWORD  
spring.jpa.hibernate.ddl-auto=update  

3. Run the app.
- Linux: `./mvnw spring-boot:run`

Base URL
http://localhost:8080

## API Endpoints

All endpoints are prefixed with `/characters`.

Create character
POST /characters/create-character

Request body (JSON)
{
  "name": "Yuji",
  "age": 15,
  "chapterFirstAppearance": 1,
  "characterType": "JUJUTSU_SORCERER",
  "description": "Main character"
}

Get all characters
GET /characters/get-character/all

Get character by id
GET /characters/get-character/{id}

Get character by exact name
GET /characters/get-character-name/{name}

Filter characters by type
GET /characters/by-type?type={CharacterType}

Search characters by name substring
GET /characters/search?name={substring}

Update character name
PUT /characters/update-character/name/{id}/{newName}

Delete character
DELETE /characters/delete-character/{id}

## CharacterType Values

JUJUTSU_SORCERER  
CURSED_SPIRIT  
SHIKIGAMI  
CURSED_CORPSE  
