let funcionesAsync = require('../funciones');

funcionesAsync.obtenerDatos()
    .then(function(resultado){
        console.log(resultado)
})

