// Esta es tu base de datos central de logros.
// Ahora incluye la propiedad 'bedrock' para filtrar por plataforma.

window.bibliotecaLogros = [
    {
        name: "¡A Picar!",
        icono: "pickaxe",
        categoria: "Overworld",
        dificultad: "Facil",
        bedrock: true, // Disponible en ambas plataformas
        inventoryNed: ["Pico de madera", "3x Adoquín"],
        tutorial: [
            "Baja a la capa de piedra y extrae adoquín.",
            "Mejora tu equipo a herramientas de piedra para picar más rápido."
        ],
        proTip: "La piedra es mucho más eficiente que la madera, ¡mejora cuanto antes!"
    },
    {
        name: "Caminante de Lava",
        icono: "flame",
        categoria: "Nether",
        dificultad: "Media",
        bedrock: true,
        inventoryNed: ["10x Obsidiana", "Mechero", "Armadura de Oro"],
        tutorial: [
            "Construye un marco de obsidiana y enciéndelo con el mechero.",
            "Entra al portal para acceder a la dimensión del Nether."
        ],
        proTip: "Lleva siempre una pieza de oro puesta para que los Piglins no te ataquen."
    },
    {
        name: "Exclusivo de Bedrock",
        icono: "smartphone",
        categoria: "Overworld",
        dificultad: "Facil",
        bedrock: true, // Solo aparecerá si eliges Bedrock
        java: false,
        inventoryNed: ["Pantalla táctil", "Controlador"],
        tutorial: [
            "Este logro solo se ve en la versión de Bedrock.",
            "¡Prueba las funciones exclusivas de esta versión!"
        ],
        proTip: "En Bedrock puedes colocar bloques frente a ti mientras corres."
    },
    {
        name: "Cómo llegamos aquí",
        icono: "flask-conical",
        categoria: "End",
        dificultad: "Extrema",
        bedrock: false, // Logro exclusivo de Java Edition
        inventoryNed: ["Pez globo", "Efecto Shulker", "Todas las pociones"],
        tutorial: [
            "Recibe todos los efectos de estado simultáneamente.",
            "Requiere una preparación compleja con dispensadores y mobs específicos."
        ],
        proTip: "Usa un reloj de redstone para activar todos los dispensadores al mismo tiempo."
    },
    {
        name: "Liberar el End",
        icono: "trophy",
        categoria: "End",
        dificultad: "Dificil",
        bedrock: true,
        inventoryNed: ["Arco", "Camas", "Perlas de Ender"],
        tutorial: [
            "Viaja al End y derrota a la Dragona.",
            "Destruye los cristales de las torres antes de atacar directamente."
        ],
        proTip: "Las camas explotan en el End; úsalas debajo de la dragona para ganar rápido."
    }
];
