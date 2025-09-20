const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "Mx"
    }
};

function showInfo({nombre, edad, direccion}) {
    console.log('Me llamo : ' + nombre + ' Tengo  ' + edad + ' y vivo en ' + direccion.ciudad + ', ' + direccion.pais);
// aqui a las direcciones les agregue a cada apartado como se vio en los videos de las explicaciones
}

showInfo(persona);
