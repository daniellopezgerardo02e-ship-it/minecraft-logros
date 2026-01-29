/**
 * biblioteca.js
 * Define la base de datos de logros y la lógica de renderizado en el DOM.
 */

const logrosBase = [
    { id: 'start', name: 'Abriendo el Inventario', desc: 'Abre el inventario.', type: 'Java/Bedrock', version: '1.0.0' },
    { id: 'mine_wood', name: 'Talando árboles', desc: 'Consigue un tronco de madera.', type: 'Java/Bedrock', version: '1.0.0' },
    { id: 'craft_tool', name: 'Herramientas básicas', desc: 'Crea cualquier herramienta.', type: 'Java/Bedrock', version: '1.0.0' },
    { id: 'diamond_age', name: 'Diamantes', desc: 'Consigue diamantes.', type: 'Java', version: '1.0.0' },
    { id: 'un_viaje_obligado', name: 'Un viaje obligado', desc: 'Entra al Nether.', type: 'Java/Bedrock', version: '1.5.0' },
    { id: 'viaje_al_end', name: 'Viaje al End', desc: 'Encuentra y entra al portal del End.', type: 'Java', version: '1.9.0' },
    { id: 'liberando_end', name: 'Liberando al End', desc: 'Mata al Dragón del End.', type: 'Java/Bedrock', version: '1.0.0' },
    { id: 'bedrock_kill_ghast', name: 'Devolver al remitente', desc: 'Destruye un Ghast con su propia bola de fuego.', type: 'Bedrock', version: '1.0.0' },
    { id: 'full_beacon', name: 'La Baliza Final', desc: 'Construye y activa una baliza con todos los niveles.', type: 'Java/Bedrock', version: '1.4.0' },
    { id: 'invisible_mob', name: 'Arrojando la poción', desc: 'Haz invisible a un enemigo.', type: 'Bedrock', version: '1.0.0' },
    { id: 'how_did_we_get_here', name: '¿Cómo hemos llegado aquí?', desc: 'Ten todos los efectos de estado a la vez.', type: 'Java', version: '1.12.0' },
    { id: 'fishing', name: 'Un pescado en el anzuelo', desc: 'Pesca un pez.', type: 'Java/Bedrock', version: '1.0.0' }
];

// Asigna el array a una variable global para acceso
window.logrosMinecraft = logrosBase;

/**
 * Renderiza la lista de logros en el contenedor principal.
 * @param {string | null} typeFilter - Filtra por 'Java' o 'Bedrock'.
 */
function renderLogros(typeFilter = null) {
    const container = document.getElementById('logros-container');
    if (!container) return;

    container.innerHTML = ''; // Limpia el contenido anterior

    const filtered = typeFilter
        ? window.logrosMinecraft.filter(l => l.type.includes(typeFilter))
        : window.logrosMinecraft;

    if (filtered.length === 0) {
        container.innerHTML = '<p>No se encontraron logros para este tipo.</p>';
        return;
    }

    filtered.forEach(logro => {
        const card = document.createElement('div');
        card.className = 'logro-card';
        card.innerHTML = `
            <h3>${logro.name}</h3>
            <p>${logro.desc}</p>
            <small>ID: ${logro.id} | Edición: <strong>${logro.type}</strong> | Versión: ${logro.version}</small>
        `;
        container.appendChild(card);
    });
}

// Exponer la función de renderizado globalmente para los botones de index.html
window.renderLogros = renderLogros;

// Asegura que los logros se carguen inicialmente al cargar la página.
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar todos los logros por defecto al iniciar.
    renderLogros();
});