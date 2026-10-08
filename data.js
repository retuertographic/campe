// =========================================================
//  CONTENIDO DE LA WEB — Pizzería La Campesina
//  Edita aquí precios, platos y datos de contacto.
//  chili: true  -> muestra el icono de picante
//  nuevo: true  -> muestra la etiqueta NUEVO
// =========================================================
window.SITE = {
  telefono: "922 765 939",
  direccion: ["Cruz del Guanche, nº17", "Valle San Lorenzo"],
  horario: "18 - 23",
  web: "www.pizzerialacampesina.com",
  social: "@pizzerialacampesinatenerife",
  facebook: "https://www.facebook.com/pizzerialacampesinatenerife",
  instagram: "https://www.instagram.com/pizzerialacampesinatenerife",

  domicilio: {
    nota: ["Pedido mínimo fuera del Valle de San Lorenzo de 12€", "Precios en menú sujetos a cambios. Consulta nuestra web y redes sociales."],
    zonas: [
      ["3€", "Valle San Lorenzo centro,"],
      ["4€", "La Fuente, Calle La Libertad, Los Toscales, Quinta Revuelta, La Florida, Cabo Blanco, Buzanada, La Camella"],
      ["5€", "Malpaso"],
      ["5€", "La Sabinita, Túnez, Arona, El Roque"]
    ]
  },

  salsas: [
    { n: 80, nombre: "Salsa BBQ, alioli o mermelada de arándanos", precio: "1,00€" },
    { n: 81, nombre: "Kétchup y mayonesa", desc: "4 sobres pequeños de kétchup y 4 de mayonesa", precio: "1,00€" },
    { n: 82, nombre: "Guacamole", nuevo: true, precio: "1,50€" }
  ],

  secciones: [
    {
      id: "pizzas", menu: "Pizzas", titulo: "PIZZAS", estilo: "pizza",
      columnas: ["MED.", "FAM."],
      platos: [
        { n: 1, nombre: "Margarita", desc: "Tomate, Queso", precio: ["7€", "15€"] },
        { n: 2, nombre: "Salami", desc: "Tomate, Queso, Salami", precio: ["7€", "15€"] },
        { n: 3, nombre: "Pepperoni", desc: "Tomate, Queso, Pepperoni", precio: ["7€", "15€"] },
        { n: 4, nombre: "Jamón", desc: "Tomate, Queso, Jamón", precio: ["7€", "15€"] },
        { n: 5, nombre: "Espinaca", desc: "Queso Azul, Espinaca", precio: ["7€", "15€"] },
        { n: 6, nombre: "Jamón y Champiñones", desc: "Jamón, Champiñones", precio: ["7€", "15€"] },
        { n: 7, nombre: "Hawai", desc: "Jamón, Piña", precio: ["7€", "15€"] },
        { n: 8, nombre: "Atún", desc: "Atún, Cebolla", precio: ["7€", "15€"] },
        { n: 9, nombre: "Suprema", desc: "Jamón, Bacon, Maíz", precio: ["7€", "15€"] },
        { n: 10, nombre: "Pollo Mechado", desc: "Pollo Mechado, Pimiento, Maíz", precio: ["7€", "15€"] },
        { n: 11, nombre: "Rústica", desc: "Salami, Pimiento, Champiñones", precio: ["7€", "15€"] },
        { n: 12, nombre: "Cuatro Quesos", desc: "Edam, Gouda, Queso Azul, Queso Crema", precio: ["7€", "15€"] },
        { n: 13, nombre: "Pollo Barbacoa", desc: "Salsa Barbacoa, Pollo, Bacon", precio: ["7€", "15€"] },
        { n: 14, nombre: "Cuatro Estaciones", desc: "Jamón, Champiñones, Alcachofa, Aceitunas", precio: ["8€", "16€"] },
        { n: 15, nombre: "Picante", chili: true, desc: "Salami, Pimiento, Cebolla, Chili, Jalapeños", precio: ["8€", "16€"] },
        { n: 16, nombre: "Caprichosa", desc: "Atún, Jamón, Champiñones, Cebolla, Pimiento", precio: ["8€", "16€"] },
        { n: 17, nombre: "Vegetariana", desc: "Alcachofa, Pimientos, Cebolla, Champiñones, Maíz", precio: ["8€", "16€"] },
        { n: 18, nombre: "Carne Mechada", desc: "Carne Mechada, Pimiento, Cebolla", precio: ["8€", "16€"] },
        { n: 19, nombre: "Carne Barbacoa", desc: "Carne Picada de Ternera, Cerdo, Bacon, Cebolla, S. Barbacoa", precio: ["8€", "16€"] },
        { n: 20, nombre: "Tropical", desc: "Jamón, Piña, Plátano", precio: ["8€", "16€"] },
        { n: 21, nombre: "Jamón Serrano", desc: "Tomate Natural, Jamón Serrano, Ajo", precio: ["10€", "17€"] },
        { n: 22, nombre: "Bolognesa", desc: "Carne Picada de Ternera, Cerdo con Salsa Boloñesa", precio: ["10€", "17€"] },
        { n: 23, nombre: "Mexicana", chili: true, desc: "Carne Picada de Ternera y Cerdo, Maíz, Jalapeños", precio: ["10€", "17€"] },
        { n: 24, nombre: "Marinera", desc: "Atún, Gambas, Mejillones", precio: ["10€", "18€"] },
        { n: 25, nombre: "Tentación", desc: "Atún, Jamón, Piña, Maíz, Huevo", precio: ["10€", "18€"] },
        { n: 26, nombre: "Pollo Tikka", chili: true, desc: "Pollo Tikka, Cebolla, Jalapeños", precio: ["10€", "18€"] },
        { n: 27, nombre: "Atlántica", desc: "Anchoas, Alcaparras, Aceitunas", precio: ["10€", "18€"] },
        { n: 28, nombre: "Mediterránea", desc: "Jamón, Anchoas, Aceitunas", precio: ["10€", "18€"] },
        { n: 29, nombre: "Carbonara", desc: "Bacon, Huevo, Cebolla, Queso Crema", precio: ["10€", "18€"] },
        { n: 30, nombre: "Neptuno", desc: "Anchoas, Gambas, Ajo, Aceitunas", precio: ["10€", "20€"] },
        { n: 31, nombre: "La Campesina", desc: "Carne Mechada, Bacon, Chorizo, Champiñones, Huevo", precio: ["10€", "20€"] },
        { n: 32, nombre: "Nueva York", desc: "Hamburguesa, Bacon, Jamón, Huevo, Papas, Salsa Barbacoa", precio: ["12€", "22€"] }
      ],
      pie: "pizza"
    },
    {
      id: "entrantes", menu: "Entrantes", titulo: "ENTRANTES", noFlecha: true,
      platos: [
        { n: 100, nombre: "Pan con ajo y Q. amarillo", nuevo: true, desc: "Lleva orégano", precio: ["5,00€"] },
        { n: 101, nombre: "Nuggets de pollo", desc: "8 Unidades | Salsa Barbacoa 1€", precio: ["6,00€"] },
        { n: 102, nombre: "Croquetas de pollo", desc: "5 Unidades | Salsa alioli 1€", precio: ["6,00€"] },
        { n: 103, nombre: "Tequeños de queso blanco", desc: "6 Unidades | Mermelada de arándanos 1€", precio: ["7,00€"] },
        { n: 104, nombre: "Nachos", nuevo: true, desc: "Con queso Cheddar y Guacamole", precio: ["9,00€"] }
      ],
      pie: "salsas"
    },
    {
      id: "hamburguesas", menu: "Hamburguesas", titulo: "HAMBURGUESAS", leyendaPicante: true,
      platos: [
        { n: 40, nombre: "Normal", desc: "Carne, Salsa, Ensalada y Queso", precio: ["5,00€"] },
        { n: 41, nombre: "Pollo Reina", desc: "Pollo desmenuzado con Mayonesa, Salsa, Ensalada y Queso", precio: ["5,00€"] },
        { n: 42, nombre: "Americana", desc: "Carne, Salsa, Ensalada, Jamón, Bacon, Huevo y Queso", precio: ["6,00€"] },
        { n: 43, nombre: "Picante", chili: true, desc: "Carne, Salsa, Ensalada, Queso y jalapeños", precio: ["6,00€"] },
        { n: 44, nombre: "Hawai", desc: "Carne, Salsa, Ensalada, Jamón y Piña", precio: ["6,00€"] },
        { n: 45, nombre: "La Campesina", desc: "Doble Carne, Ensalada, Jamón, Bacon, Huevo, Queso, Pepinillo y S.Barbacoa", precio: ["8,00€"] }
      ],
      nota: ["Todas Nuestras Hamburguesas llevan:", "Ketchup, Mayonesa y Mostaza (salvo La Campesina)", "Nuestras ensaladas son de: Tomate y lechuga"]
    },
    {
      id: "papas", menu: "Papas", titulo: "PAPAS",
      platos: [
        { n: 90, nombre: "Papas fritas", precio: ["3,50€"] },
        { n: 91, nombre: "Papas locas", desc: "Jamón y Queso Amarillo", precio: ["6,00€"] },
        { n: 92, nombre: "Papas pollo desmechado", desc: "Pollo Desmechado y Queso Amarillo", precio: ["7,00€"] },
        { n: 93, nombre: "Papas con carne mechada", desc: "Carne Mechada y Queso Amarillo", precio: ["8,00€"] },
        { n: 94, nombre: "Papas pollo reina", desc: "Pollo Desmechado con Mayonesa y Queso Amarillo", precio: ["8,00€"] },
        { n: 95, nombre: "Papas La Campesina", desc: "Pollo Desmechado, Carne Mechada, Jamón y Queso", precio: ["10,00€"] },
        { n: 95, nombre: "Salchicha alemana", nuevo: true, desc: "Con Papas fritas y salsa Barbacoa", precio: ["10,00€"] }
      ],
      foto: "assets/fotos/papas-pollo-reina.jpg",
      pie: "salsas"
    },
    {
      id: "bebidas", menu: "Bebidas", titulo: "REFRESCOS Y AGUA",
      columnas: ["PEQ.", "GRAN."],
      platos: [
        { n: 130, nombre: "Agua sin gas", desc: "0,5cl / 1,5l", precio: ["1,50€", "2,50€"] },
        { n: 131, nombre: "Agua con gas", desc: "0,5cl / 1,5l", precio: ["2,00€"] },
        { n: 132, nombre: "Coca Cola original", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "3,50€"] },
        { n: 133, nombre: "Coca Cola zero", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "3,50€"] },
        { n: 134, nombre: "Clipper fresa", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "3,50€"] },
        { n: 135, nombre: "Fanta naranja", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "3,50€"] },
        { n: 136, nombre: "Fanta limón", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "3,50€"] },
        { n: 137, nombre: "Seven Up", desc: "Botella 1,5l", precio: ["2,00€", "3,50€"] },
        { n: 138, nombre: "Nestea mango-piña", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "4,00€"] },
        { n: 139, nombre: "Nestea melocotón", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "4,00€"] },
        { n: 140, nombre: "Aquarius naranja", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "4,00€"] },
        { n: 141, nombre: "Aquarius limón", desc: "Lata 33cl / Botella 1,5l", precio: ["2,00€", "4,00€"] },
        { n: 142, nombre: "Red Bull", desc: "Lata 33cl", precio: ["2,50€"] },
        { n: 143, nombre: "Appleteizer", desc: "Peq. 275ml", precio: ["2,00€"] },
        { n: 144, nombre: "Zumo melocotón", desc: "Peq. 275ml", precio: ["2,00€"] },
        { n: 145, nombre: "Zumo pera piña", desc: "Peq. 275ml", precio: ["2,00€"] }
      ],
      extra: {
        titulo: "CERVEZAS Y VINOS",
        platos: [
          { n: 120, nombre: "Cerveza Dorada", desc: "Lata 33cl", precio: ["2,00€"] },
          { n: 121, nombre: "Cerveza Heineken", desc: "Lata 33cl", precio: ["2,00€"] },
          { n: 122, nombre: "Vino tinto de la casa", desc: "Botella 750ml", precio: ["6,00€"] }
        ]
      }
    },
    {
      id: "helados", menu: "Helados", titulo: "HELADOS", estilo: "helado",
      platos: [
        { n: 160, nombre: "Corneto de Chocolate Vainilla", precio: ["2€"] },
        { n: 161, nombre: "Corneto de Fresa Nata", precio: ["2€"] }
      ]
    },
    // Galerías de fotos: añade imágenes en assets/fotos/ y ponlas en "fotos".
    { id: "fotos-pizzas", menu: "Fotos Pizzas", titulo: "FOTOS PIZZAS", noFlecha: true, fotos: [] },
    { id: "fotos-hamburguesas", menu: "Fotos Hamburguesas", titulo: "FOTOS HAMBURGUESAS", noFlecha: true, fotos: [] },
    { id: "fotos-papas", menu: "Fotos Papas", titulo: "FOTOS PAPAS", noFlecha: true,
      fotos: [{ src: "assets/fotos/papas-pollo-reina.jpg", alt: "Papas Pollo Reina" }] },
    { id: "fotos-entrantes", menu: "Fotos Entrantes", titulo: "FOTOS ENTRANTES", noFlecha: true, fotos: [] }
  ]
};
