module.exports.datosLlenos = (req, res, next) => {
    // const nombre = req.body.nombre;
    // const edad = req.body.edad;
    // const apellidos = req.body.apellidos;

    const  { nombre, edad, apellidos } = req.body;

    if(!nombre){
        return res.send('Falta el nombre');
    }
    if(!edad){
        return res.send('Falta la edad');
    }

    if(!apellidos){
        return res.send('Falta el apellido');
    }

    if(typeof(apellidos) != "object"){
        return res.send({
            mensaje: 'Apellidos debe de ser un Objeto'
        });
    }

    if(!apellidos.paterno){
        return res.send('Falta el apellido paterno');
    }
    if(!apellidos.materno){
        return res.send('Falta el apellido materno');
    }
    next();
};

module.exports.tipoDato = (req, res, next) => {
    const  { nombre, edad, apellidos, profesion } = req.body;

    if(typeof(nombre) != "string"){
        return res.send({
            mensaje: 'Nombre debe de ser Texto'
        });
    }
    if(typeof(edad) != "number"){
        return res.send({
            mensaje: 'Edad debe de ser Numero'
        });
    }
    if(typeof(apellidos.paterno) != "string"){
        return res.send({
            mensaje: 'Paterno debe de ser Texto'
        });
    }
    if(typeof(apellidos.materno) != "string"){
        return res.send({
            mensaje: 'Materno debe de ser Texto'
        });
    }
    if(profesion && typeof(profesion) != "string"){
        return res.send({
            mensaje: 'Profesion debe de ser texto'
        });
    }

    next();
};