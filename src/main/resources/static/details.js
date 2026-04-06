const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

console.log("id from url:", characterId);

if (characterId !== null) {
  fetch(`/characters/get-character/${characterId}`)
    .then(response => {
      console.log("details response:", response.status);
      return response.json();
    })
    .then(character => {
      console.log("details data:", character);

      document.getElementById("page-title").textContent = character.name;
      document.getElementById("detail-name").textContent = character.name;
      document.getElementById("detail-type").textContent = character.characterType;
      document.getElementById("detail-age").textContent = character.age;
      document.getElementById("detail-chapter").textContent = character.chapterFirstAppearance;
      document.getElementById("detail-description").textContent = character.description;

      const image = document.getElementById("character-image");
      image.src = character.imageUrl;
      image.alt = character.name;
    })
    .catch(error => {
      console.log("details fetch failed:", error);
    });
} else {
  console.log("No id in URL");
}
