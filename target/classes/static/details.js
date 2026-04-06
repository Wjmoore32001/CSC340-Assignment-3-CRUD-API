const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

const pageTitle = document.getElementById("page-title");
const detailName = document.getElementById("detail-name");
const detailType = document.getElementById("detail-type");
const detailAge = document.getElementById("detail-age");
const detailChapter = document.getElementById("detail-chapter");
const detailDescription = document.getElementById("detail-description");
const characterImage = document.getElementById("character-image");

const editCharacterButton = document.getElementById("edit-character-button");
const deleteCharacterButton = document.getElementById("delete-character-button");
const detailsMessage = document.getElementById("details-message");

function loadCharacter() {
  if (!characterId) {
    detailsMessage.textContent = "No character id found.";
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
      pageTitle.textContent = character.name;
      detailName.textContent = character.name;
      detailType.textContent = character.characterType;
      detailAge.textContent = character.age;
      detailChapter.textContent = character.chapterFirstAppearance;
      detailDescription.textContent = character.description;

      characterImage.src = character.imageUrl;
      characterImage.alt = character.name;
    })
    .catch(error => {
      console.log("details fetch failed:", error);
      detailsMessage.textContent = "Could not load character details.";
    });
}

editCharacterButton.addEventListener("click", () => {
  window.location.href = `edit-character.html?id=${characterId}`;
});

deleteCharacterButton.addEventListener("click", () => {
  const confirmed = window.confirm("Are you sure you want to delete this character?");

  if (!confirmed) {
    return;
  }

  fetch(`/characters/delete-character/${characterId}`, {
    method: "DELETE"
  })
    .then(response => {
      if (!response.ok && response.status !== 204) {
        throw new Error("Failed to delete character");
      }
      window.location.href = "index.html";
    })
    .catch(error => {
      console.log("delete failed:", error);
      detailsMessage.textContent = "Could not delete character.";
    });
});

loadCharacter();
