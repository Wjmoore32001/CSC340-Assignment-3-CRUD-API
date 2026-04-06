const characterList = document.getElementById("character-list");
console.log("NEW VERSION OF APPJS IS RUNNING");
fetch('/characters/get-character/all').then(response => {
  console.log("got response");
  return response.json();
})
  .then(data => {
    console.log("got data");
    console.log(data);
    characterList.innerHTML = "";

    data.forEach((character, index) => {
      const divRow = document.createElement("div");
      divRow.className = "row mb-5";

      const divColumn1 = document.createElement("div");
      divColumn1.className = "col-6 col-lg-6";

      let detailId;
      if (index < 2) {
        detailId = character.characterId;
      } else {
        detailId = data[0].characterId;
      }

      divColumn1.innerHTML = `
        <a href="details.html?id=${detailId}">
          <img src="${character.imageUrl}" class="img-fluid" alt="${character.name}">
        </a>
      `;

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
