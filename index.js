const sobre = document.getElementById("sobre");
const portifolio = document.getElementById("portifolio");

"use strict";

const images = [
  { id: "1", url: "./assets/01.jpeg" },
  { id: "2", url: "./assets/02.jpeg" },
  { id: "3", url: "./assets/03.jpeg" },
  { id: "4", url: "./assets/04.jpeg" },
  { id: "5", url: "./assets/05.jpeg" },
  { id: "6", url: "./assets/06.jpeg" },
];


function about () {
spam.textContent = "⚠️ Este desafio foi criado através de alguns estudos baseados em JavaScript puro (Vanilla JS) e foi utilizado para aprendizado e treinamento da linguagem JavaScript. Visite meu GitHub ou o meu Portifólio para ver mais trabalhos meus! Obrigado por visitar esta página, seu apoio é muito importante⚠️!" 

}

function port () {
spam.textContent = "⚠️Em breve este link estará disponível!⚠️"
}


const containerItems = document.querySelector("#container-itens");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
    
    <div class='item'>
    <img src='${image.url}'
    
    </div>
    
    `;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll(".item");
};

const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);
sobre.addEventListener("click", about);
portifolio.addEventListener("click", port);