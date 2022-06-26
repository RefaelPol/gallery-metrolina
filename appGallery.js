import {
    pictures
}
from "./export/export-class.js";


//search function:
function searchPicture() {
    const searchField = document.getElementById('search-box');
    const searchTerm = searchField.value.trim();

    const searchResult = pictures.filter(prod => {
        return prod.name
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
    });
    displayPictures(searchResult);
}
const btn = document.getElementById('btn');
btn.addEventListener('click', searchPicture);

function displayPictures(pictureData) {
    const container = document.getElementById('pictures-container');
    let html = '';

    pictureData.forEach(prod => {
        html +=
            `<div class="card" style="width: 18rem;">
        <img class="card-img" src="${prod.getImage()}"
        alt="${prod.getName()}">
        <div class="card-body">
        <h5 class="card-title">${prod.getName()}</h5>
        <p class="card-author">${prod.getAuthor()}</p>
        <p class="card-text">${prod.getPrice()}</p>
        <a href="#" class="btn btn-primary">View Details</a>
        <div class="card-flag" style="color: red;">${prod.getInventory()}</div>
        </div>
        </div>`;
    })

    container.innerHTML = html;
    getTotalPictures();
}
displayPictures(pictures)