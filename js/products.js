/* ============================================================
   PRODUCTOS DE EILE STORE
   ============================================================
   Estos 30 productos son de MUESTRA: nombres y precios reales
   tomados de las webs de Natura y ésika (natura.com.pe y
   esika.tiendabelcorp.com.pe) para que veas cómo luce el
   catálogo ya organizado por categoría (5 por categoría).

   ⚠️ IMPORTANTE: reemplaza estos productos por los que tu mami
   realmente tiene en stock (los precios pueden variar según
   promociones vigentes en las webs oficiales). Usa esto solo
   como plantilla/referencia de formato.

   Para AGREGAR un producto nuevo:
   1. Copia un bloque completo desde "{" hasta "}," (uno de los de abajo)
   2. Pégalo antes del corchete final "];"
   3. Cambia los datos (nombre, precio, categoría, imagen, etc.)
   4. Guarda el archivo. ¡Listo! Ya aparece en la web.

   Para AGREGAR una foto real:
   - Guarda la foto dentro de la carpeta images/productos/
   - Usa un nombre sin espacios ni tildes, ej: "labial-rojo-cereza.jpg"
   - En el campo "imagen" escribe: "images/productos/labial-rojo-cereza.jpg"

   CATEGORIAS disponibles (usa el texto exacto):
   "labiales" | "bases" | "skincare" | "perfumes" | "serums" | "cuidado-corporal"

   Si "oferta" es true, se muestra una etiqueta de OFERTA y puedes
   poner un "precioAntes" (precio tachado) además del "precio" final.

   El campo "marca" es solo informativo (Natura / ésika / etc.)
============================================================ */

const PRODUCTOS = [

  /* ---------------- LABIALES ---------------- */
  {
    id: "labial-una-matte-rouge",
    nombre: "Una Labial Matte Intransferible Rouge",
    marca: "Natura",
    categoria: "labiales",
    precio: 32.00,
    precioAntes: null,
    oferta: false,
    nuevo: true,
    imagen: "images/productos/labial-una-matte-rouge.svg"
  },
  {
    id: "labial-faces-cereza-drama",
    nombre: "Faces Labial Cremoso Multimix Cereza Drama",
    marca: "Natura",
    categoria: "labiales",
    precio: 26.00,
    precioAntes: 32.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/labial-faces-cereza-drama.svg"
  },
  {
    id: "labial-aquarela-color-hidra",
    nombre: "Aquarela Labial Color Hidra FPS 8",
    marca: "Natura",
    categoria: "labiales",
    precio: 28.00,
    precioAntes: null,
    oferta: false,
    nuevo: false,
    imagen: "images/productos/labial-aquarela-color-hidra.svg"
  },
  {
    id: "labial-esika-colorfix-barra",
    nombre: "Labial COLORFIX Barra — Pimienta Caliente",
    marca: "ésika",
    categoria: "labiales",
    precio: 39.20,
    precioAntes: 56.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/labial-esika-colorfix-barra.svg"
  },
  {
    id: "labial-esika-addiction-matte",
    nombre: "Labial Addiction Matte — Pimienta Caliente",
    marca: "ésika",
    categoria: "labiales",
    precio: 29.40,
    precioAntes: 42.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/labial-esika-addiction-matte.svg"
  },

  /* ---------------- BASES ---------------- */
  {
    id: "base-esika-natural-matte",
    nombre: "Natural Matte Base de Maquillaje FPS 15",
    marca: "ésika",
    categoria: "bases",
    precio: 64.80,
    precioAntes: 108.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/base-esika-natural-matte.svg"
  },
  {
    id: "base-esika-pro-matificante",
    nombre: "ésika PRO Base Líquida Matificante FPS 20",
    marca: "ésika",
    categoria: "bases",
    precio: 48.00,
    precioAntes: null,
    oferta: false,
    nuevo: true,
    imagen: "images/productos/base-esika-pro-matificante.svg"
  },
  {
    id: "base-una-serum-nude",
    nombre: "Una Base Sérum Nude Me 19N 30 ml",
    marca: "Natura",
    categoria: "bases",
    precio: 81.00,
    precioAntes: 108.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/base-una-serum-nude.svg"
  },
  {
    id: "primer-una-blur",
    nombre: "Una Primer Blur 30 ml",
    marca: "Natura",
    categoria: "bases",
    precio: 41.00,
    precioAntes: 82.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/primer-una-blur.svg"
  },
  {
    id: "corrector-una-cobertura-extrema",
    nombre: "Una Corrector Cobertura Extrema 19N",
    marca: "Natura",
    categoria: "bases",
    precio: 21.00,
    precioAntes: 42.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/corrector-una-cobertura-extrema.svg"
  },

  /* ---------------- SKINCARE ---------------- */
  {
    id: "crema-esika-supreme-8en1",
    nombre: "Crema Facial Antiedad Supreme 8 en 1",
    marca: "ésika",
    categoria: "skincare",
    precio: 49.00,
    precioAntes: 89.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/crema-esika-supreme-8en1.svg"
  },
  {
    id: "desmaquillador-esika-bifasico",
    nombre: "Desmaquillador Bifásico 125 ml",
    marca: "ésika",
    categoria: "skincare",
    precio: 25.00,
    precioAntes: 45.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/desmaquillador-esika-bifasico.svg"
  },
  {
    id: "bruma-una-hidratante-fijadora",
    nombre: "Una Bruma Facial Hidratante Fijadora 100 ml",
    marca: "Natura",
    categoria: "skincare",
    precio: 48.00,
    precioAntes: 96.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/bruma-una-hidratante-fijadora.svg"
  },
  {
    id: "polvo-una-luminoso",
    nombre: "Una Polvo Suelto Facial Luminoso 8 g",
    marca: "Natura",
    categoria: "skincare",
    precio: 96.00,
    precioAntes: null,
    oferta: false,
    nuevo: true,
    imagen: "images/productos/polvo-una-luminoso.svg"
  },
  {
    id: "protector-esika-fps50-triple-accion",
    nombre: "Protector Solar Facial Antiedad FPS 50+ Triple Acción Max",
    marca: "ésika",
    categoria: "skincare",
    precio: 38.00,
    precioAntes: 55.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/protector-esika-fps50-triple-accion.svg"
  },

  /* ---------------- PERFUMES ---------------- */
  {
    id: "perfume-esika-kalos-sport",
    nombre: "Kalos Sport Perfume de Hombre 100 ml",
    marca: "ésika",
    categoria: "perfumes",
    precio: 89.00,
    precioAntes: 99.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/perfume-esika-kalos-sport.svg"
  },
  {
    id: "perfume-esika-dream",
    nombre: "Dream Eau de Parfum de Mujer 45 ml",
    marca: "ésika",
    categoria: "perfumes",
    precio: 99.00,
    precioAntes: null,
    oferta: false,
    nuevo: true,
    imagen: "images/productos/perfume-esika-dream.svg"
  },
  {
    id: "perfume-esika-grazzia",
    nombre: "Grazzia Perfume de Mujer Edición Especial 50 ml",
    marca: "ésika",
    categoria: "perfumes",
    precio: 109.00,
    precioAntes: null,
    oferta: false,
    nuevo: false,
    imagen: "images/productos/perfume-esika-grazzia.svg"
  },
  {
    id: "perfume-natura-ekos-frescor-maracuya",
    nombre: "Ekos Frescor Eau de Toilette Maracuyá 150 ml",
    marca: "Natura",
    categoria: "perfumes",
    precio: 54.50,
    precioAntes: 99.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/perfume-natura-ekos-frescor-maracuya.svg"
  },
  {
    id: "perfume-natura-kaiak-aventura",
    nombre: "Kaiak Aventura Eau de Toilette Masculino 100 ml",
    marca: "Natura",
    categoria: "perfumes",
    precio: 119.00,
    precioAntes: null,
    oferta: false,
    nuevo: false,
    imagen: "images/productos/perfume-natura-kaiak-aventura.svg"
  },

  /* ---------------- SERUMS ---------------- */
  {
    id: "serum-esika-antiedad-triple-accion",
    nombre: "Suero Antiedad Triple Acción Max",
    marca: "ésika",
    categoria: "serums",
    precio: 42.00,
    precioAntes: 76.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/serum-esika-antiedad-triple-accion.svg"
  },
  {
    id: "serum-esika-hydra-max",
    nombre: "Suero Facial Hydra Max Triple Acción Max",
    marca: "ésika",
    categoria: "serums",
    precio: 39.00,
    precioAntes: 71.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/serum-esika-hydra-max.svg"
  },
  {
    id: "serum-natura-chronos-multirreparador",
    nombre: "Chronos Sérum Multirreparador Antiedad",
    marca: "Natura",
    categoria: "serums",
    precio: 135.00,
    precioAntes: null,
    oferta: false,
    nuevo: true,
    imagen: "images/productos/serum-natura-chronos-multirreparador.svg"
  },
  {
    id: "serum-natura-una-iluminador-vitc",
    nombre: "Una Sérum Facial Iluminador Vitamina C",
    marca: "Natura",
    categoria: "serums",
    precio: 58.00,
    precioAntes: null,
    oferta: false,
    nuevo: false,
    imagen: "images/productos/serum-natura-una-iluminador-vitc.svg"
  },
  {
    id: "serum-natura-ekos-castana",
    nombre: "Ekos Sérum Facial Castaña",
    marca: "Natura",
    categoria: "serums",
    precio: 62.00,
    precioAntes: null,
    oferta: false,
    nuevo: false,
    imagen: "images/productos/serum-natura-ekos-castana.svg"
  },

  /* ---------------- CUIDADO CORPORAL ---------------- */
  {
    id: "crema-ekos-castana-corporal",
    nombre: "Ekos Crema Hidratante para el Cuerpo Castaña 400 ml",
    marca: "Natura",
    categoria: "cuidado-corporal",
    precio: 38.50,
    precioAntes: 70.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/crema-ekos-castana-corporal.svg"
  },
  {
    id: "crema-ekos-manos-castana",
    nombre: "Ekos Crema Hidratante para Manos Castaña 75 g",
    marca: "Natura",
    categoria: "cuidado-corporal",
    precio: 23.00,
    precioAntes: 46.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/crema-ekos-manos-castana.svg"
  },
  {
    id: "exfoliante-ekos-castana",
    nombre: "Ekos Pulpa Exfoliante para el Cuerpo Castaña 200 g",
    marca: "Natura",
    categoria: "cuidado-corporal",
    precio: 52.50,
    precioAntes: 70.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/exfoliante-ekos-castana.svg"
  },
  {
    id: "aceite-ekos-pitanga",
    nombre: "Ekos Aceite Trifásico Corporal Pitanga 200 ml",
    marca: "Natura",
    categoria: "cuidado-corporal",
    precio: 44.40,
    precioAntes: 74.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/aceite-ekos-pitanga.svg"
  },
  {
    id: "jabon-ekos-vegetal",
    nombre: "Ekos Jabón en Barra Puro Vegetal Cremoso y Exfoliante (4 un x 100 g)",
    marca: "Natura",
    categoria: "cuidado-corporal",
    precio: 30.60,
    precioAntes: 51.00,
    oferta: true,
    nuevo: false,
    imagen: "images/productos/jabon-ekos-vegetal.svg"
  }
];
