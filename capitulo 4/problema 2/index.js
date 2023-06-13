const obtenerInformacion = materia=>{
    materias = {
        fisica: ["perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["dalto","pedro", "juan", "pepito"], 
        logica: ["hernandez","pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["rodriguez","pedro", "juan", "pepito", "cofla", "maria"]
    };
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    };
};


const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
    if (informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style='color:red'>${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`);
    };
};

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    let clasesPresentes = [];
    for(info in informacion) {
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        };
    };
    return `<b style="color:blue">${alumno}</b> esta en <b style="color:red">${cantidadTotal} de clases</b><br>
    Esta cursando las clases: <b style="color:green">${clasesPresentes}</b><br><br>`;
};

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));

