const characterList = document.getElementById("character-list");

fetch('/characters/get-character/all').then(response => {
  console.log("got response");
  return response.json();
})
  .then(data => {
    console.log("got data");
    console.log(data);
    characterList.innerHTML = "";

    data.forEach((character) => {
      const divRow = document.createElement("div");
      divRow.className = "row mb-5";

      const divColumn1 = document.createElement("div");
      divColumn1.className = "col-6 col-lg-6";

      divColumn1.innerHTML = `
        <a href="details.html?id=${character.characterId}">
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
