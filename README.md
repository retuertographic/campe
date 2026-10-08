# Pizzería La Campesina — Valle San Lorenzo

Web estática (HTML + CSS + JS, sin dependencias) con el menú de Pizzería La Campesina.

Publicada en GitHub Pages: https://retuertographic.github.io/campe/

## Editar el contenido

Todo está en **`data.js`**: platos, precios, notas, zonas de reparto, teléfono, dirección y redes.

- `chili: true` muestra el icono de picante; `nuevo: true` muestra la etiqueta NUEVO.
- Galerías de fotos: copia las imágenes en `assets/fotos/` y añádelas al array `fotos` de cada sección «Fotos …».

Cada sección tiene su propia URL: `#pizzas`, `#entrantes`, `#hamburguesas`, `#papas`, `#bebidas`, `#helados`, `#fotos-pizzas`…

## Ver en local

```bash
python3 -m http.server 8000
```

## Despliegue

El workflow `.github/workflows/deploy.yml` publica la web en GitHub Pages en cada push.
