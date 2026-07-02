# Nebula Lab Creators — Sitio web (v2) 2026

Versión más reciente del sitio, en una sola página (`index.html`), lista para
GitHub Pages. Ya trae tus imágenes reales cargadas en `assets/img/` — revisé
el código y **todas las rutas de imagen apuntan correctamente a un archivo
que sí existe**, con `object-fit:cover` para que no se vean estiradas.

Si al abrirlo en tu navegador alguna imagen no aparece, revisa esto primero:

1. **Que descomprimiste el zip completo**, no solo el `index.html` suelto.
   `index.html` y la carpeta `assets/` tienen que quedar como hermanos, en el
   mismo nivel.
2. Ábrelo con doble clic o arrástralo a Chrome — no debería necesitar
   servidor local para verse bien.
3. Si sigue sin verse alguna imagen puntual, dime cuál (nombre de sección o
   captura de pantalla) y lo reviso directo.

---

## Cómo publicarlo en GitHub Pages

1. Crea un repo nuevo en GitHub (público).
2. Sube **todo el contenido de esta carpeta** (no la carpeta en sí) a la raíz
   del repo:
   ```bash
   cd nebula-site-v2
   git init
   git add .
   git commit -m "Deploy Nebula Lab Creators v2"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/nebula-lab.git
   git push -u origin main
   ```
3. **Settings → Pages → Source → Deploy from a branch → main / (root)**.
4. Tu sitio queda en `https://TU-USUARIO.github.io/nebula-lab/`.

---

## Estructura

```
nebula-site-v2/
├── index.html
├── .nojekyll
├── README.md
└── assets/
    └── img/
        ├── nebula-logo-white.png   (nav / footer, sobre fondo oscuro)
        ├── nebula-logo-navy.png    (logo alterno, sin usar todavía)
        ├── hero-texture.jpg        (fondo del Hero y de Contacto)
        ├── braza-full.jpg          (case Braza — modal)
        ├── thumb-braza.jpg         (case Braza — tarjeta portafolio)
        ├── joyaice-logo.jpg        (hero visual grid)
        ├── joyaice-banner.jpg / -hola.jpg / -contacto.jpg  (case JoyaIce — modal)
        ├── thumb-joyaice.jpg       (tarjeta portafolio)
        ├── coronafest-main.jpg / -wide.jpg / -lineup.jpg / -softmamma.jpg (case Corona Fest)
        ├── thumb-corona.jpg        (tarjeta portafolio)
        ├── jw-luminance.jpg / -halloween-1.jpg / -halloween-2.jpg (case Johnnie Walker)
        ├── thumb-jw.jpg            (tarjeta portafolio)
        ├── mistica.jpg             (case Fiesta Mística)
        └── thumb-mistica.jpg       (tarjeta portafolio)
```

## Notas

- WhatsApp de contacto: `+51 997 699 339` — para cambiarlo, busca
  `51997699339` en `index.html` (aparece varias veces).
- Instagram de contacto general apunta a `brazaperu` — si quieres una cuenta
  propia de Nebula, cámbiala en la sección de Contacto.
- Corregí "Luis Hidalgo" → **Fabio Hidalgo** en el panel de "Nosotros" para
  que coincida con el director creativo real de la agencia.
- `nebula-logo-navy.png` está en la carpeta pero no se usa todavía en el
  código — queda listo por si luego agregas una sección con fondo claro que
  lo necesite.
