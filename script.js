(function () {
  var S = window.SITE;

  document.querySelectorAll("[data-site]").forEach(function (el) {
    el.textContent = S[el.dataset.site] || "";
  });
  document.querySelector(".year").textContent = new Date().getFullYear();

  var tel = "tel:" + S.telefono.replace(/[^\d+]/g, "");
  document.querySelectorAll(".js-tel").forEach(function (a) { a.href = tel; });
  document.querySelectorAll(".js-mail").forEach(function (a) { a.href = "mailto:" + S.email.replace(/[\[\]]/g, ""); });

  // Carta con pestañas
  var tabs = document.querySelector(".tabs");
  var list = document.querySelector(".menu-list");
  function show(i) {
    tabs.querySelectorAll("button").forEach(function (b, j) {
      b.classList.toggle("active", i === j);
      b.setAttribute("aria-selected", i === j);
    });
    list.innerHTML = S.carta[i].platos.map(function (p) {
      return '<article class="dish"><div><h3>' + p.nombre + "</h3>" +
        (p.desc ? "<p>" + p.desc + "</p>" : "") +
        '</div><span class="price">' + p.precio + "</span></article>";
    }).join("");
  }
  S.carta.forEach(function (c, i) {
    var b = document.createElement("button");
    b.textContent = c.categoria;
    b.setAttribute("role", "tab");
    b.onclick = function () { show(i); };
    tabs.appendChild(b);
  });
  show(0);

  // Horario
  document.querySelector(".hours").innerHTML = S.horario.map(function (h) {
    return "<tr><th>" + h[0] + "</th><td>" + h[1] + "</td></tr>";
  }).join("");

  // Redes
  var social = document.querySelector(".social");
  Object.keys(S.redes).forEach(function (k) {
    if (!S.redes[k]) return;
    var a = document.createElement("a");
    a.href = S.redes[k]; a.target = "_blank"; a.rel = "noopener";
    a.className = "btn btn-ghost btn-small";
    a.textContent = k.charAt(0).toUpperCase() + k.slice(1);
    social.appendChild(a);
  });

  // WhatsApp
  if (S.whatsapp) {
    var w = document.querySelector(".whatsapp");
    w.href = "https://wa.me/" + S.whatsapp;
    w.hidden = false;
  }

  // Mapa
  document.querySelector(".map iframe").src =
    "https://maps.google.com/maps?q=" + encodeURIComponent(S.mapaQuery) + "&output=embed";

  // Menú móvil
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  toggle.onclick = function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  };
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); });
  });
})();
