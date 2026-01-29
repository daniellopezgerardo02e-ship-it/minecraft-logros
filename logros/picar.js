window.logroData = window.logroData || {};
window.logroData.picar = {
    id: "picar",
    name: "¡A Picar!",
    description: "Construye un pico básico de cualquier material (madera, piedra, etc.).",
    requirements: {
        java: "Craftear cualquier pico.",
        bedrock: "Fabricar un pico usando una mesa de crafteo."
    },
    editionSpecific: {
        java: {
            parent: "Obtener Madera",
            xp: 10
        },
        bedrock: {
            gamerscore: 10
        }
    },
    tip: "El pico se craftea con 2 palos y 3 materiales horizontales en la parte superior de la mesa."
};