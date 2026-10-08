(function () {
  var S = window.SITE;
  var CHILI = '<svg class="chili" viewBox="0 0 24 24" aria-label="Picante"><path fill="#2f8a1f" d="M15 2c1 .2 1.6 1 1.5 2l-.1.8c1 .3 1.7 1 2 2l-1.6.4c-.2-.6-.7-1-1.3-1.1L13 6.6c.5-1.4 1.4-2.6 2-4.6z"/><path fill="#d7141a" d="M17.6 7.6c1.4 3-.1 8.5-5 11.6-3.3 2.2-7.4 2.9-10.2 2.5.1-.6.6-1 1.3-1.2 3.9-1.1 7.3-4.3 8.8-8.4.3-.9.6-1.8 1.2-2.6.9-1.2 2.4-2.1 3.9-1.9z"/></svg>';
  var NUEVO = '<span class="nuevo">NUEVO</span>';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  function brush(titulo) {
    return '<h2 class="brush"><span>' + esc(titulo) + "</span></h2>";
  }

  function platos(lista, columnas) {
    var cab = columnas ? '<div class="cols-head"><span>' + columnas.join("</span><span>") + "</span></div>" : "";
    return cab + '<ul class="items">' + lista.map(function (p) {
      return '<li class="item"><div class="item-name"><span class="num">' + p.n + "-</span><b>" + esc(p.nombre) + "</b>" +
        (p.chili ? CHILI : "") + (p.nuevo ? NUEVO : "") + "</div>" +
        '<div class="item-price">' + p.precio.concat(columnas ? Array(Math.max(0, columnas.length - p.precio.length)).fill("") : []).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>" +
        (p.desc ? '<div class="item-desc">' + esc(p.desc) + "</div>" : "") + "</li>";
    }).join("") + "</ul>";
  }

  function salsas() {
    return '<div class="salsas">' + S.salsas.map(function (p) {
      return '<div class="salsa"><div><span class="num">' + p.n + "-</span><b>" + esc(p.nombre) + "</b>" +
        (p.nuevo ? NUEVO : "") + (p.desc ? "<small>" + esc(p.desc) + "</small>" : "") +
        '</div><span class="salsa-price">' + p.precio + "</span></div>";
    }).join("") + "</div>";
  }

  function render(sec) {
    var h = '<section class="carta carta-' + (sec.estilo || "std") + '">' + brush(sec.titulo);
    if (sec.leyendaPicante) h += '<div class="leyenda-wrap"><span class="leyenda">' + CHILI + "Picante</span></div>";
    if (sec.fotos) {
      h += sec.fotos.length
        ? '<div class="galeria">' + sec.fotos.map(function (f) { return '<img src="' + f.src + '" alt="' + esc(f.alt) + '" loading="lazy">'; }).join("") + "</div>"
        : '<p class="vacio">Próximamente</p>';
    } else {
      h += platos(sec.platos, sec.columnas);
    }
    if (sec.nota) h += '<p class="nota">' + sec.nota.map(esc).join("<br>") + "</p>";
    if (sec.foto) h += '<figure class="foto"><img src="' + sec.foto + '" alt="Foto ' + esc(sec.menu) + '"></figure>';
    if (sec.extra) h += brush(sec.extra.titulo) + platos(sec.extra.platos);
    if (sec.pie === "pizza") {
      h += '<div class="pizza-pie"><div><span class="azul">Todas las pizzas llevan tomate y queso.</span>' +
        '<span class="leyenda">' + CHILI + "Picante</span></div>" +
        '<span class="amarillo">Ingr. extra normal 1€ MED. y 2€ FAM.<br>Ingr. extra especial: gambas, anchoas, carne mechada y picada, jamón serrano 2€ MED. y 4€ FAM.</span></div>';
    }
    if (sec.pie === "salsas") h += salsas();
    return h + "</section>";
  }

  // Navegación
  var nav = document.querySelector(".menu-nav");
  nav.innerHTML = S.secciones.map(function (s) {
    return '<a href="#' + s.id + '" data-id="' + s.id + '">' + (s.noFlecha ? "" : '<span class="arrow">»</span>') + esc(s.menu) + "</a>";
  }).join("");

  var cont = document.getElementById("contenido");
  function show() {
    var id = location.hash.slice(1);
    var sec = S.secciones.filter(function (s) { return s.id === id; })[0] || S.secciones[0];
    cont.innerHTML = render(sec);
    nav.querySelectorAll("a").forEach(function (a) { a.classList.toggle("active", a.dataset.id === sec.id); });
    document.title = sec.menu + " · Pizzería La Campesina";
  }
  window.addEventListener("hashchange", function () {
    show();
    nav.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  show();

  // Servicio a domicilio
  document.querySelector(".domicilio-nota").innerHTML =
    "<p>" + esc(S.domicilio.nota[0]) + "</p><p><i>" + esc(S.domicilio.nota[1]) + "</i></p>";
  document.querySelector(".domicilio-zonas").innerHTML = S.domicilio.zonas.map(function (z) {
    return "<p><b>" + z[0] + "</b> - " + esc(z[1]) + "</p>";
  }).join("");

  // Contacto
  var tel = document.querySelector(".tel");
  var t = S.telefono.split(" ");
  tel.innerHTML = '<span class="r">' + t[0] + "</span> " + t.slice(1).join(" ");
  tel.href = "tel:+34" + S.telefono.replace(/\D/g, "");
  document.querySelector(".dir").innerHTML = S.direccion.map(esc).join("<br>");
  document.querySelector(".horario b").textContent = S.horario;
  var w = S.web.toUpperCase().split(".");
  document.querySelector(".web").innerHTML = '<span class="r">' + w[0] + ".</span>" + w[1] + '<span class="r">.' + w[2] + "</span>";
  document.querySelector(".js-social").textContent = S.social;
  document.querySelector(".js-fb").href = S.facebook;
  document.querySelector(".js-ig").href = S.instagram;

  // Compartir
  var url = encodeURIComponent(location.href.split("#")[0]);
  var txt = encodeURIComponent("Menú de Pizzería La Campesina");
  var links = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=" + url,
    twitter: "https://twitter.com/intent/tweet?url=" + url + "&text=" + txt,
    linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=" + url,
    pinterest: "https://pinterest.com/pin/create/button/?url=" + url + "&description=" + txt,
    whatsapp: "https://wa.me/?text=" + txt + "%20" + url
  };
  document.querySelectorAll("[data-share]").forEach(function (a) {
    a.href = links[a.dataset.share];
    a.target = "_blank";
    a.rel = "noopener";
  });
})();
