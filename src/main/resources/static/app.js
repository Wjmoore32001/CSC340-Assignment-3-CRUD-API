const characterList = document.getElementById("character-list");

fetch('/characters/get-character/all')
  .then(response => {
    console.log("got response");
    return response.json();
  })
  .then(data => {
    console.log("got data");
    console.log(data);

    characterList.innerHTML = "";

    const firstCharacterId = data[0].characterId;

    data.forEach((character, index) => {
      const divRow = document.createElement("div");
      divRow.className = "row mb-5";

      const divColumn1 = document.createElement("div");
      divColumn1.className = "col-6 col-lg-6";

      let detailId;
      if (index < 2) {
        detailId = character.characterId;
      } else {
        detailId = firstCharacterId;
      }

      const link = document.createElement("a");
      link.href = `details.html?id=${detailId}`;

      const image = document.createElement("img");
      image.src = character.imageUrl;
      image.alt = character.name;
      image.className = "img-fluid";

      link.appendChild(image);
      divColumn1.appendChild(link);

      const divColumn2 = document.createElement("div");
      divColumn2.className = "col-6 col-lg-6";

      divColumn2.innerHTML = `
        <p class="fs-4 mb-5">
          <span class="h3 fw-bold">${character.name}</span>
          ${character.description}
        </p>
      `;

      divRow.appendChild(divColumn1);
      divRow.appendChild(divColumn2);
      characterList.appendChild(divRow);
    });
  });
