const contenedor = document.querySelector('.flex-container');

function crearLlave(nombre, modelo, precio) {
    img = '<img class="llave-img" src="llave.png"';
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return [img, nombre, modelo, precio];
} 

let documentFragment = document.createDocumentFragment()

for (let i = 0; i <= 20; i++){
  let modeloRandom = Math.round(Math.random()*10000);
  let precioRandom = Math.round(Math.random()*10+30);
  let llave = crearLlave(`Llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
  let div = document.createElement('div');
  div.tabIndex = i;
  div.addEventListener("click",()=>{
    document.querySelector('.key-data').value = modeloRandom;
  });
  div.classList.add(`item-${i}`, 'flex-item');
  div.innerHTML = llave.join("");
  documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
