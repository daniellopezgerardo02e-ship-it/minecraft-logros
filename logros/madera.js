window.logroData = window.logroData || {};
window.logroData.madera = {
    id: "madera",
    name: "Obtener Madera",
    description: "Golpea un árbol hasta que el bloque de madera caiga.",
    requirements: {
        java: "Recoger un tronco de árbol en el inventario.",
        bedrock: "Talar o romper un tronco por primera vez."
    },
    editionSpecific: {
        java: {
            parent: null,
            xp: 5
        },
        bedrock: {
            gamerscore: 5
        }
    },
    tip: "Mantén presionado el clic izquierdo. ¡Cualquier tipo de árbol funciona!"
};