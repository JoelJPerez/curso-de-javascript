let alumnos = [{
    nombre: "Jeison Smith",
    email: "soyjeison@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Karin Ramirez",
    email: "soykarin@gmail.com",
    materia: "Calculo 2"
},{
    nombre: "Facundo Roberto",
    email: "soyroberto@gmail.com",
    materia: "Literatura"
},{
    nombre: "Cofla XD",
    email: "soycofla@gmail.com",
    materia: "Recreo"
},{
    nombre: "Jorge Ramirez",
    email: "soyjorge@gmail.com",
    materia: "Matematicas"
}];

const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");

for (let alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
      <div class="grid-item email">${email}</div>
      <div class="grid-item materia">${materia}</div>
      <div class="grid-item semana">
        <select class="semana-elegida">
          <option value="Semana 1">Semana 1</option>
          <option value="Semana 2">Semana 2</option>
        </select>
      </div>`;
      contenedor.innerHTML += htmlCode;
};

boton.addEventListener("click", () => {
  let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
  if (confirmar) {
    document.body.removeChild(boton);
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (let elemento in elementos) {
      semana = elementos[elemento];
      semana.innerHTML = semanasElegidas[elemento].value;
    }
  }
});