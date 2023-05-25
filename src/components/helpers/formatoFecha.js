export const formatoFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha);
}

export const listaMeses = () => {
    const meses = [
        {id: 0, mesNombre: 'Enero'},
        {id: 1, mesNombre: 'Febrero'},
        {id: 2, mesNombre: 'Marzo'},
        {id: 3, mesNombre: 'Abril'},
        {id: 4, mesNombre: 'Mayo'},
        {id: 5, mesNombre: 'Junio'},
        {id: 6, mesNombre: 'Julio'},
        {id: 7, mesNombre: 'Agosto'},
        {id: 8, mesNombre: 'Setiembre'},
        {id: 9, mesNombre: 'Octubre'},
        {id: 10, mesNombre: 'Noviembre'},
        {id: 11, mesNombre: 'Diciembre'},
    ];
    return meses;    
}


export const mesYearSolicitud = (fecha) => {
    const fechaSolicitud = new Date(fecha);
    const mesNumero = fechaSolicitud.getMonth(); 
    const yearS = fechaSolicitud.getFullYear();

    const resultadoFecha = [mesNumero, yearS];

    return resultadoFecha;
}