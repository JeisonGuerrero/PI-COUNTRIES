const Validate = (formulario) => {
    let errors = {};
    if(!formulario.name) {
        errors.name = 'Nombre Requerido*'
    };
    if(formulario.difficulty > 5 || formulario.difficulty < 1){
        errors.difficulty = 'Dificultad maxima de 1 a 5*'
    };
    if(formulario.duration > 24 || formulario.duration < 1 ){
        errors.duration = 'Duracion maxima de 1 a 24 hs*'
    };
    if(!formulario.season){
        errors.season = 'Seleccionar una temporada*'
    };
    if(!formulario.countries.length){
        errors.countries = 'Seleccionar por lo menos un pais*'
    };

    return errors;
};


export default Validate;