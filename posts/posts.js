// Genera los posts 1:1 de la carta a partir de data.js
(function () {
  var S = window.SITE;
  var CHILI = '<svg class="chili" viewBox="0 0 24 24" aria-label="Picante"><path fill="#2f8a1f" d="M15 2c1 .2 1.6 1 1.5 2l-.1.8c1 .3 1.7 1 2 2l-1.6.4c-.2-.6-.7-1-1.3-1.1L13 6.6c.5-1.4 1.4-2.6 2-4.6z"/><path fill="#d7141a" d="M17.6 7.6c1.4 3-.1 8.5-5 11.6-3.3 2.2-7.4 2.9-10.2 2.5.1-.6.6-1 1.3-1.2 3.9-1.1 7.3-4.3 8.8-8.4.3-.9.6-1.8 1.2-2.6.9-1.2 2.4-2.1 3.9-1.9z"/></svg>';
  var NUEVO = '<span class="nuevo">NUEVO</span>';
  var PIZZAS_POR_POST = 9;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function sec(id) { return S.secciones.filter(function (s) { return s.id === id; })[0]; }

  function platos(lista, columnas, compact) {
    var cab = columnas ? '<div class="cols-head"><span>' + columnas.join("</span><span>") + "</span></div>" : "";
    return cab + '<ul class="items">' + lista.map(function (p) {
      var precios = p.precio.concat(columnas ? Array(Math.max(0, columnas.length - p.precio.length)).fill("") : []);
      return '<li class="item"><div class="item-name"><span class="num">' + p.n + "-</span><b>" + esc(p.nombre) + "</b>" +
        (p.chili ? CHILI : "") + (p.nuevo ? NUEVO : "") + "" + "</div>" +
        '<div class="item-price">' + precios.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>" +
        (p.desc && !compact ? '<div class="item-desc">' + esc(p.desc) + "</div>" : "") + "</li>";
    }).join("") + "</ul>";
  }
  function salsas() {
    return '<div class="salsas">' + S.salsas.map(function (p) {
      return '<div class="salsa"><div><span class="num">' + p.n + "-</span><b>" + esc(p.nombre) + "</b>" +
        (p.nuevo ? NUEVO : "") + (p.desc ? "<small>" + esc(p.desc) + "</small>" : "") +
        '</div><span class="salsa-price">' + p.precio + "</span></div>";
    }).join("") + "</div>";
  }
  var PIZZA_PIE = '<div class="pizza-pie"><div><span class="azul">Todas las pizzas llevan tomate y queso.</span>' +
    '<span class="leyenda">' + CHILI + "Picante</span></div>" +
    '<span class="amarillo">Ingr. extra normal 1€ MED. y 2€ FAM.<br>Ingr. extra especial: gambas, anchoas, carne mechada y picada, jamón serrano 2€ MED. y 4€ FAM.</span></div>';

  var LOGO = '<svg viewBox="0 0 820 340" aria-label="La Campesina Valle San Lorenzo">' +
    '<path d="M0 140 Q4 92 60 82 Q420 70 805 22 L805 262 Q600 250 300 262 Q60 272 4 330 Z" fill="#fff"/>' +
    '<text x="40" y="150" font-size="62" font-weight="800">La</text>' +
    '<text x="118" y="210" font-size="124" font-weight="800" textLength="640" lengthAdjust="spacingAndGlyphs">Campesina</text>' +
    '<text x="400" y="246" font-size="34" font-weight="600" textLength="350" lengthAdjust="spacingAndGlyphs">Valle San Lorenzo</text></svg>';

  // Lista de posts: { file, titulo, clase, html, pagina }
  var posts = [];
  var pz = sec("pizzas");
  var total = Math.ceil(pz.platos.length / PIZZAS_POR_POST);
  for (var i = 0; i < total; i++) {
    var trozo = pz.platos.slice(i * PIZZAS_POR_POST, (i + 1) * PIZZAS_POR_POST);
    posts.push({ file: "01-pizzas-" + (i + 1), titulo: "PIZZAS", clase: "carta-pizza", maxw: 640, pagina: (i + 1) + "/" + total,
      html: platos(trozo, pz.columnas) + (i === total - 1 ? PIZZA_PIE : "") });
  }
  var en = sec("entrantes");
  posts.push({ file: "02-entrantes", titulo: "ENTRANTES", clase: "carta-std", html: platos(en.platos) + salsas() });
  var hb = sec("hamburguesas");
  posts.push({ file: "03-hamburguesas", titulo: "HAMBURGUESAS", clase: "carta-std",
    html: platos(hb.platos) + '<p class="nota">' + hb.nota.map(esc).join("<br>") + "</p>" });
  var pa = sec("papas");
  posts.push({ file: "04-papas", titulo: "PAPAS", clase: "carta-std", html: platos(pa.platos) + salsas() });
  var be = sec("bebidas");
  var mitad = Math.ceil((be.platos.length + be.extra.platos.length + 2) / 2);
  posts.push({ file: "05-bebidas", titulo: "BEBIDAS", clase: "carta-std compact dos-col", maxw: 1100,
    html: '<div class="col"><h3 class="sub-t">REFRESCOS Y AGUA</h3>' + platos(be.platos.slice(0, mitad), be.columnas, true) + "</div>" +
      '<div class="col"><h3 class="sub-t sub-t-hide">&nbsp;</h3>' + platos(be.platos.slice(mitad), be.columnas, true) +
      '<h3 class="sub-t">' + be.extra.titulo + "</h3>" + platos(be.extra.platos, be.columnas, true) + "</div>" +
      '<p class="envases">PEQ.: lata 33cl (agua 0,5l) · GRAN.: botella 1,5l · Appleteizer y zumos 275ml · Vino: botella 750ml</p>' });
  var he = sec("helados");
  posts.push({ file: "06-helados", titulo: "HELADOS", clase: "carta-helado", maxz: 1.6, html: platos(he.platos) });

  var cont = document.getElementById("posts");
  cont.innerHTML = posts.map(function (p) {
    return '<article class="post" data-file="' + p.file + '" data-maxw="' + (p.maxw || 520) + '" data-maxz="' + (p.maxz || 2.4) + '">' +
      '<header class="post-head"><h2 class="brush"><span>' + p.titulo + "</span></h2>" +
      (p.pagina ? '<span class="post-page">' + p.pagina + "</span>" : "") + "</header>" +
      '<div class="post-body"><div class="post-inner carta ' + p.clase + '">' + p.html + "</div></div>" +
      '<footer class="post-foot">' + LOGO + '<div class="foot-info"><div class="foot-tel">' + esc(S.telefono) +
      '</div><div class="foot-web">' + esc(S.web.toUpperCase()) + "</div></div></footer></article>";
  }).join("");

  // Ajusta el tamaño del contenido para que llene el post sin salirse
  function fit() {
    document.querySelectorAll(".post-body").forEach(function (body) {
      var inner = body.firstElementChild;
      var maxw = +body.parentNode.dataset.maxw;
      var cs = getComputedStyle(body);
      var W = body.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      var H = body.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      function fits(z) {
        inner.style.zoom = z;
        inner.style.width = Math.min(W / z, maxw) + "px";
        if (inner.getBoundingClientRect().height > H) return false;
        // Nada debe salirse a lo ancho (nombres sin partir en Bebidas)
        return [].every.call(inner.querySelectorAll(".item"), function (it) { return it.scrollWidth <= it.clientWidth + 1; });
      }
      // Búsqueda binaria del mayor tamaño que cabe en el post
      var lo = 0.3, hi = +body.parentNode.dataset.maxz;
      for (var k = 0; k < 18; k++) {
        var mid = (lo + hi) / 2;
        if (fits(mid)) lo = mid; else hi = mid;
      }
      fits(lo);
    });
    document.body.dataset.ready = "1";
  }
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(fit);
})();
