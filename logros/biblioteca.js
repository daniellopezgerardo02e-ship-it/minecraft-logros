// Esta es tu base de datos central de logros.
// Asegúrate de que este archivo esté en la carpeta 'logros/'
// Los iconos disponibles son de Lucide (ej: sword, pickaxe, flame, flask-conical, eye, trophy, etc.)

window.bibliotecaLogros = [
    {
        name: "¡A Picar!",
        icono: "pickaxe",
        categoria: "Overworld",
        dificultad: "Facil",
        inventoryNed: ["Pico de madera", "3x Adoquín"],
        objetosOpcionales: ["Antorchas", "Horno"],
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
        inventoryNed: ["10x Obsidiana", "Mechero", "Armadura de Oro"],
        objetosOpcionales: ["Piedra labrada", "Cubo de agua"],
        tutorial: [
            "Construye un marco de obsidiana y enciéndelo con el mechero.",
            "Entra al portal para acceder a la dimensión del Nether."
        ],
        proTip: "Lleva siempre una pieza de oro puesta para que los Piglins no te ataquen."
    },
    {
        name: "Cómo llegamos aquí",
        icono: "flask-conical",
        categoria: "End",
        dificultad: "Extrema",
        inventoryNed: ["Pez globo", "Efecto Shulker", "Todas las pociones"],
        objetosOpcionales: ["Armadura de Netherite", "Tótem"],
        tutorial: [
            "Recibe todos los efectos de estado simultáneamente.",
            "Requiere una preparación compleja con dispensadores y mobs específicos."
        ],
        proTip: "Usa un reloj de redstone para activar todos los dispensadores al mismo tiempo."
    },
    {
        name: "Cazador de Monstruos",
        icono: "sword",
        categoria: "Overworld",
        dificultad: "Facil",
        inventoryNed: ["Espada de hierro", "Escudo"],
        objetosOpcionales: ["Arco", "Flechas"],
        tutorial: [
            "Espera a la noche y derrota a un mob hostil.",
            "El escudo te protegerá de las flechas de los esqueletos."
        ],
        proTip: "Atacar saltando (crítico) hace mucho más daño a los enemigos."
    },
    {
        name: "Liberar el End",
        icono: "trophy",
        categoria: "End",
        dificultad: "Dificil",
        inventoryNed: ["Arco", "Camas", "Perlas de Ender"],
        objetosOpcionales: ["Pociones de caída lenta", "Cristales del End"],
        tutorial: [
            "Viaja al End y derrota a la Dragona.",
            "Destruye los cristales de las torres antes de atacar directamente."
        ],
        proTip: "Las camas explotan en el End; úsalas debajo de la dragona para ganar rápido."
    }
];
