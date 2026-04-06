const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

const form = document.getElementById("edit-character-form");
const message = document.getElementById("form-message");
const cancelButton = document.getElementById("cancel-button");

function loadCharacterForEdit() {
  if (!characterId) {
    message.textContent = "No character id found.";
    return;
  }

  fetch(`/characters/get-character/${characterId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load character");
      }
      return response.json();
    })
    .then(character => {
      document.getElementById("name").value = character.name;
      document.getElementById("description").value = character.description;
      document.getElementById("characterType").value = character.characterType;
      document.getElementById("age").value = character.age ?? "";
      document.getElementById("chapterFirstAppearance").value = character.chapterFirstAppearance ?? "";
      document.getElementById("imageUrl").value = character.imageUrl;
    })
    .catch(error => {
      console.log("edit load failed:", error);
      message.textContent = "Could not load character for editing.";
    });
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const updatedCharacter = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    characterType: document.getElementById("characterType").value,
    age: document.getElementById("age").value ? parseInt(document.getElementById("age").value) : null,
    chapterFirstAppearance: document.getElementById("chapterFirstAppearance").value
      ? parseInt(document.getElementById("chapterFirstAppearance").value)
      : null,
    imageUrl: document.getElementById("imageUrl").value
  };

  fetch(`/characters/update-character/${characterId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedCharacter)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to update character");
      }
      return response.json();
    })
    .then(updatedCharacterFromServer => {
      window.location.href = `details.html?id=${updatedCharacterFromServer.characterId}`;
    })
    .catch(error => {
      console.log("update failed:", error);
      message.textContent = "Could not update character.";
    });
});

cancelButton.addEventListener("click", () => {
  window.location.href = `details.html?id=${characterId}`;
});

loadCharacterForEdit();
