// =========================================================
//  CONTENIDO EDITABLE DE LA WEB
//  Cambia aquí los datos reales de la pizzería (dirección,
//  teléfono, horarios, carta y precios). Los textos entre
//  [corchetes] son marcadores que hay que sustituir.
// =========================================================
window.SITE = {
  nombre: "Pizzería La Campesina",
  eslogan: "Pizza artesana, masa de fermentación lenta y horno de verdad",
  telefono: "[000 000 000]",          // ej. "912 345 678"
  whatsapp: "",                        // ej. "34612345678" (sin + ni espacios)
  email: "[info@pizzerialacampesina.com]",
  direccion: "[Calle, número · Código postal · Ciudad]",
  mapaQuery: "Pizzería La Campesina", // texto para buscar en Google Maps
  redes: {
    instagram: "",                     // ej. "https://instagram.com/..."
    facebook: ""
  },
  horario: [
    ["Lunes", "Cerrado"],
    ["Martes – Jueves", "[13:00–16:00 · 20:00–23:30]"],
    ["Viernes – Sábado", "[13:00–16:00 · 20:00–00:30]"],
    ["Domingo", "[13:00–16:00 · 20:00–23:30]"]
  ],
  carta: [
    {
      categoria: "Pizzas clásicas",
      platos: [
        { nombre: "Margarita", desc: "Tomate, mozzarella y albahaca fresca", precio: "[0,00 €]" },
        { nombre: "Barbacoa", desc: "Salsa barbacoa, mozzarella, carne picada, bacon y cebolla", precio: "[0,00 €]" },
        { nombre: "Cuatro quesos", desc: "Mozzarella, gorgonzola, emmental y parmesano", precio: "[0,00 €]" },
        { nombre: "Prosciutto", desc: "Tomate, mozzarella y jamón cocido", precio: "[0,00 €]" },
        { nombre: "Hawaiana", desc: "Tomate, mozzarella, jamón cocido y piña", precio: "[0,00 €]" }
      ]
    },
    {
      categoria: "Pizzas de la casa",
      platos: [
        { nombre: "La Campesina", desc: "Tomate, mozzarella, pimiento, champiñón, cebolla, aceitunas y huevo", precio: "[0,00 €]" },
        { nombre: "Ibérica", desc: "Tomate, mozzarella, jamón serrano y aceite de oliva virgen extra", precio: "[0,00 €]" },
        { nombre: "Vegetal", desc: "Tomate, mozzarella, calabacín, berenjena, pimiento y cebolla", precio: "[0,00 €]" },
        { nombre: "Diávola", desc: "Tomate, mozzarella, salami picante y guindilla", precio: "[0,00 €]" }
      ]
    },
    {
      categoria: "Entrantes y ensaladas",
      platos: [
        { nombre: "Pan de ajo", desc: "Con mozzarella gratinada", precio: "[0,00 €]" },
        { nombre: "Ensalada César", desc: "Lechuga, pollo, parmesano, picatostes y salsa César", precio: "[0,00 €]" },
        { nombre: "Ensalada caprese", desc: "Tomate, mozzarella fresca y albahaca", precio: "[0,00 €]" }
      ]
    },
    {
      categoria: "Postres y bebidas",
      platos: [
        { nombre: "Tiramisú casero", desc: "", precio: "[0,00 €]" },
        { nombre: "Refrescos", desc: "", precio: "[0,00 €]" },
        { nombre: "Cerveza", desc: "", precio: "[0,00 €]" }
      ]
    }
  ]
};
