# Pizzería La Campesina — web

Web estática (HTML + CSS + JS, sin dependencias) para Pizzería La Campesina.

## Editar el contenido

Todo el contenido está en **`data.js`**: nombre, teléfono, email, dirección, horario, redes sociales y la carta con precios. Los valores entre `[corchetes]` son marcadores que hay que sustituir por los datos reales.

## Ver en local

Abre `index.html` en el navegador, o bien:

```bash
python3 -m http.server 8000
```

## Despliegue (GitHub Pages)

El workflow `.github/workflows/deploy.yml` publica la web en GitHub Pages en cada push.
Una sola vez: en el repositorio ve a **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.
