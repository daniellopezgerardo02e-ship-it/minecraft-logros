// Inicializa el array global que contendrá todos los logros cargados.
// Este array será poblado por los scripts individuales (.js) cargados posteriormente.
window.logrosData = [];

/**
 * Función para registrar un logro en la base de datos global.
 * @param {object} logro - Objeto que contiene id, titulo, descripcion y ediciones compatibles.
 */
function registrarLogro(logro) {
    if (typeof logro === 'object' && logro !== null && logro.id && logro.titulo) {
        window.logrosData.push(logro);
        // console.log(`Logro registrado: ${logro.titulo}`);
    } else {
        console.error('Intento de registrar un objeto no válido como logro.');
    }
}