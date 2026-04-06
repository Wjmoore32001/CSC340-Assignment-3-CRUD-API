const form = document.getElementById("new-character-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", event => {
  event.preventDefault();

  const newCharacter = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    characterType: document.getElementById("characterType").value,
    age: document.getElementById("age").value ? parseInt(document.getElementById("age").value) : null,
    chapterFirstAppearance: document.getElementById("chapterFirstAppearance").value
      ? parseInt(document.getElementById("chapterFirstAppearance").value)
      : null,
    imageUrl: document.getElementById("imageUrl").value
  };

  fetch("/characters/create-character", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCharacter)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to create character");
      }
      return response.json();
    })
    .then(createdCharacter => {
      console.log("created character:", createdCharacter);
      window.location.href = `details.html?id=${createdCharacter.characterId}`;
    })
    .catch(error => {
      console.log("create failed:", error);
      message.textContent = "Could not add character.";
    });
});
