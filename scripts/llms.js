// Genera llms.txt (https://llmstxt.org) a partir de data.js.
// Uso: node scripts/llms.js
var fs = require("fs");
var path = require("path");

var raiz = path.join(__dirname, "..");
global.window = {};
require(path.join(raiz, "data.js"));
var S = window.SITE;
var URL = "https://pizzerialacampesina.com/";

function plato(p, columnas) {
  var precio = p.precio.length > 1 && columnas
    ? p.precio.map(function (v, i) { return columnas[i].replace(".", "") + " " + v; }).join(" / ")
    : p.precio[0];
  var marcas = (p.nuevo ? " (nuevo)" : "") + (p.chili ? " (picante)" : "");
  return "- " + p.n + ". " + p.nombre + marcas + ": " + precio + (p.desc ? ". " + p.desc : "");
}

var L = [];
L.push("# Pizzería La Campesina");
L.push("");
L.push("> Pizzería en Valle San Lorenzo (Arona, Tenerife) con servicio a domicilio. " +
  "Pizzas, entrantes, hamburguesas, papas, bebidas y helados. Pedidos por teléfono al " + S.telefono +
  ". Horario: " + S.horario + " h.");
L.push("");
L.push("- Teléfono: " + S.telefono);
L.push("- Dirección: " + S.direccion.join(", ") + ", Tenerife");
L.push("- Horario: " + S.horario + " h");
L.push("- Web: " + URL);
L.push("- Instagram: " + S.instagram);
L.push("- Facebook: " + S.facebook);
L.push("- Todos los productos son susceptibles de contener alérgenos.");
L.push("");
L.push("## Web");
L.push("");
S.secciones.forEach(function (sec) {
  L.push("- [" + sec.menu + "](" + URL + "#" + sec.id + ")" + (sec.fotos ? ": galería de fotos" : ": carta"));
});
L.push("");
L.push("## Servicio a domicilio");
L.push("");
S.domicilio.zonas.forEach(function (z) { L.push("- " + z[0] + ": " + z[1].replace(/,\s*$/, "")); });
S.domicilio.nota.forEach(function (n) { L.push("- " + n); });

S.secciones.forEach(function (sec) {
  if (!sec.platos) return;
  L.push("");
  L.push("## " + sec.menu);
  L.push("");
  if (sec.columnas) L.push("Precios: " + sec.columnas.join(" / ") + " (" +
    (sec.id === "pizzas" ? "mediana / familiar" : "pequeño / grande") + ").");
  if (sec.id === "pizzas") {
    L.push("Todas las pizzas llevan tomate y queso. Ingrediente extra normal: 1€ mediana, 2€ familiar. " +
      "Ingrediente extra especial (gambas, anchoas, carne mechada y picada, jamón serrano): 2€ mediana, 4€ familiar.");
  }
  if (sec.nota) L.push(sec.nota.map(function (t) { return /[:.]$/.test(t) ? t : t + "."; }).join(" "));
  if (sec.columnas || sec.nota || sec.id === "pizzas") L.push("");
  sec.platos.forEach(function (p) { L.push(plato(p, sec.columnas)); });
  if (sec.extra) {
    L.push("");
    L.push("### " + sec.extra.titulo.charAt(0) + sec.extra.titulo.slice(1).toLowerCase());
    L.push("");
    sec.extra.platos.forEach(function (p) { L.push(plato(p)); });
  }
});
L.push("");
L.push("## Salsas");
L.push("");
S.salsas.forEach(function (p) { L.push(plato({ n: p.n, nombre: p.nombre, nuevo: p.nuevo, desc: p.desc, precio: [p.precio] })); });
L.push("");
L.push("## Optional");
L.push("");
L.push("- [Retuerto Graphic Design](https://retuertographicdesign.com/): diseño y desarrollo de la web (Ricardo Retuerto Barrera)");

fs.writeFileSync(path.join(raiz, "llms.txt"), L.join("\n") + "\n");
console.log("llms.txt generado (" + L.length + " líneas)");
