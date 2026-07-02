# EILE store — Catálogo virtual

Sitio web tipo catálogo para mostrar productos de belleza. Cada producto tiene
un botón **"Lo quiero"** que abre WhatsApp con un mensaje ya armado, directo
al número configurado.

📌 **Sobre los 30 productos de muestra:** son nombres y precios reales,
tomados de las webs de Natura y ésika, organizados en 6 categorías (5 por
cada una: labiales, bases, skincare, perfumes, serums, cuidado corporal).
Son solo una plantilla para que veas el formato — reemplázalos por los
productos que tu mami realmente tiene en stock, y ajusta los precios según
lo que ella cobra (pueden diferir de las promociones vigentes en las webs
oficiales).

No es una tienda con carrito de compras ni pagos en línea: es un catálogo
para que la gente vea los productos y coordine su pedido por WhatsApp.

---

## 📁 ¿Qué archivo edito para cada cosa?

| Quiero...                                   | Edito este archivo         |
|----------------------------------------------|-----------------------------|
| Agregar / quitar / cambiar productos          | `js/products.js`            |
| Cambiar el número de WhatsApp                 | `js/config.js`               |
| Cambiar el mensaje que se manda por WhatsApp  | `js/config.js`               |
| Cambiar/agregar categorías                    | `js/config.js`               |
| Subir fotos reales de productos               | carpeta `images/productos/` |

**Nunca necesitas tocar** `index.html`, `css/style.css` ni `js/app.js` para
el uso diario (agregar productos, subir fotos, etc).

---

## ➕ Cómo agregar un producto nuevo

1. Abre el archivo `js/products.js` con cualquier editor de texto (hasta el
   Bloc de notas sirve, aunque recomiendo el programa gratuito
   [Visual Studio Code](https://code.visualstudio.com/)).
2. Copia uno de los bloques que empieza con `{` y termina con `},` — por
   ejemplo este:

   ```js
   {
     id: "labial-rojo-pasion",
     nombre: "Labial Mate Rojo Pasión",
     categoria: "labiales",
     precio: 28.00,
     precioAntes: null,
     oferta: false,
     nuevo: true,
     imagen: "images/productos/labial-rojo-pasion.svg"
   },
   ```

3. Pégalo justo **antes** del corchete final `];` del archivo.
4. Cambia los datos:
   - `id`: un texto único sin espacios ni tildes (ej: `"base-tono-natural"`)
   - `nombre`: el nombre que se va a mostrar
   - `categoria`: una de estas → `labiales`, `bases`, `skincare`, `perfumes`,
     `serums`, `cuidado-corporal`
   - `precio`: el precio final, con punto decimal (ej: `45.00`)
   - `precioAntes`: si está en oferta, pon el precio anterior (ej: `55.00`).
     Si no está en oferta, deja `null`
   - `oferta`: `true` si quieres que salga la etiqueta de OFERTA, si no `false`
   - `nuevo`: `true` si quieres que salga la etiqueta de NUEVO, si no `false`
   - `imagen`: la ruta a la foto (ver siguiente sección)
5. Guarda el archivo. Listo, ya aparece en la web.

⚠️ Cuidado con no borrar comas `,` ni llaves `{ }` — si algo se ve raro en
la web después de editar, probablemente falta o sobra una coma.

---

## 🖼️ Cómo subir una foto real de un producto

1. Guarda la foto del producto (formato .jpg o .png) dentro de la carpeta
   `images/productos/`
2. Ponle un nombre simple, sin espacios ni tildes ni ñ. Ejemplo:
   `base-liquida-matte.jpg`
3. En `js/products.js`, en el campo `imagen` de ese producto, escribe:
   `"images/productos/base-liquida-matte.jpg"`

Todas las imágenes actuales son ilustraciones temporales (dice "foto
próximamente"). Puedes reemplazarlas de a poco, no hace falta hacerlo todo
de una vez — mientras no cambies el `id` del producto, solo reemplaza el
archivo de imagen o actualiza la ruta.

**Tip:** para que la web cargue rápido, que las fotos no pesen más de
~300-500 KB cada una. Si son muy pesadas, puedes comprimirlas gratis en
[squoosh.app](https://squoosh.app) antes de subirlas.

---

## 📱 Cómo cambiar el número de WhatsApp o el mensaje

Abre `js/config.js`:

```js
whatsapp: "51997699339",
mensajeWhatsapp: "Hola! 👋 Vi en EILE store el producto: *{producto}* (S/ {precio}) y quiero cotizarlo 💕",
```

- `whatsapp`: código de país + número, sin `+` ni espacios.
- `mensajeWhatsapp`: no borres `{producto}` ni `{precio}` — se rellenan solos
  con el nombre y precio del producto que la persona vio.

---

## 🌐 Cómo publicar el sitio en internet (GitHub Pages, gratis)

1. Entra a [github.com](https://github.com) e inicia sesión con tu cuenta.
2. Crea un repositorio nuevo (botón verde **"New"**). Ponle de nombre, por
   ejemplo, `eile-store`. Puede ser público.
3. Sube todos los archivos de esta carpeta al repositorio:
   - Opción fácil: en la página del repositorio, haz clic en
     **"uploading an existing file"**, arrastra todos los archivos y
     carpetas (`index.html`, `css/`, `js/`, `images/`) y luego
     **"Commit changes"**.
4. Ve a **Settings → Pages** (en el menú de la izquierda del repositorio).
5. En "Source", elige la rama `main` y la carpeta `/ (root)`. Guarda.
6. Espera 1-2 minutos y GitHub te va a dar un link tipo:
   `https://tu-usuario.github.io/eile-store/`
7. Ese es el link que compartes con tus clientas 🎉

**Para actualizar el sitio después** (agregar productos, cambiar fotos):
sube de nuevo los archivos modificados al mismo repositorio (mismo botón de
subir archivos, o edítalos directo desde GitHub haciendo clic en el
archivo → ícono de lápiz ✏️ → editar → "Commit changes"). El sitio se
actualiza solo, en 1-2 minutos.

---

## 🗂️ Cuando ya tengas los ~200 productos

El sistema ya está preparado para eso: cada producto es solo un bloque de
texto en `js/products.js`, así que agregar 200 es lo mismo que agregar 12,
solo que repetido más veces. Si en algún momento se vuelve pesado editar
el archivo a mano (por ejemplo, si varias personas van a cargar productos
a la vez, o si prefieres cargarlos desde una hoja de Excel/Google Sheets),
podemos avisar y armar una versión donde los productos se administren desde
una planilla en vez de este archivo — es un paso natural para cuando el
catálogo crezca.

---

## Estructura del proyecto

```
eile-store/
├── index.html              ← página principal (no tocar en el día a día)
├── css/
│   └── style.css           ← estilos visuales (no tocar en el día a día)
├── js/
│   ├── products.js         ← 🟢 EDITAR AQUÍ para agregar productos
│   ├── config.js           ← 🟢 EDITAR AQUÍ para WhatsApp/categorías
│   └── app.js               ← lógica del catálogo (no tocar en el día a día)
├── images/
│   └── productos/          ← 🟢 SUBIR AQUÍ las fotos de productos
└── README.md                ← este archivo
```
