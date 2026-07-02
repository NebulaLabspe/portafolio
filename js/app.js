/* ============================================================
   EILE store — lógica del catálogo
   No hace falta tocar este archivo para agregar productos:
   eso se hace en js/products.js
============================================================ */

const WSP_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18a7.95 7.95 0 0 1-4.06-1.11l-.29-.17-3.01.79.8-2.93-.19-.3A7.96 7.96 0 1 1 12 20zm4.4-5.9c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z"/></svg>`;

function formatearPrecio(n) {
  return n.toFixed(2);
}

function linkWhatsapp(producto) {
  const texto = CONFIG.mensajeWhatsapp
    .replace("{producto}", producto.nombre)
    .replace("{precio}", formatearPrecio(producto.precio));
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}

function etiquetaCategoria(valor) {
  const cat = CONFIG.categorias.find(c => c.valor === valor);
  return cat ? cat.etiqueta : valor;
}

function crearCard(producto) {
  const card = document.createElement("article");
  card.className = "card";

  const badge = producto.oferta
    ? `<span class="badge badge-oferta">Oferta</span>`
    : (producto.nuevo ? `<span class="badge badge-nuevo">Nuevo</span>` : "");

  const precioAntes = producto.precioAntes
    ? `<span class="card-price-old">S/ ${formatearPrecio(producto.precioAntes)}</span>`
    : "";

  const marca = producto.marca ? `<span class="card-brand">${producto.marca}</span>` : "";

  card.innerHTML = `
    <div class="card-media">
      ${badge}
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
    </div>
    <div class="card-body">
      <div class="card-meta"><span class="card-cat">${etiquetaCategoria(producto.categoria)}</span>${marca}</div>
      <h3 class="card-name">${producto.nombre}</h3>
      <div class="card-price-row">
        <span class="card-price">S/ ${formatearPrecio(producto.precio)}</span>
        ${precioAntes}
      </div>
      <a class="card-cta" href="${linkWhatsapp(producto)}" target="_blank" rel="noopener">
        ${WSP_ICON} Lo quiero
      </a>
    </div>
  `;
  return card;
}

function renderGrid(lista) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  if (lista.length === 0) {
    grid.innerHTML = `<p class="no-results">No hay productos en esta categoría todavía.</p>`;
    return;
  }
  lista.forEach(p => grid.appendChild(crearCard(p)));
}

function renderChips() {
  const row = document.getElementById("chip-row");
  CONFIG.categorias.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.dataset.cat = cat.valor;
    btn.textContent = cat.etiqueta;
    row.appendChild(btn);
  });

  row.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    row.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const cat = chip.dataset.cat;
    const filtrados = cat === "todas" ? PRODUCTOS : PRODUCTOS.filter(p => p.categoria === cat);
    renderGrid(filtrados);
  });
}

function initHeaderYWsp() {
  const genericMsg = `Hola! 👋 Quisiera ver el catálogo de ${CONFIG.nombreTienda} 💕`;
  const genericLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(genericMsg)}`;
  document.getElementById("header-wsp").href = genericLink;
  document.getElementById("wsp-float").href = genericLink;
}

document.getElementById("year").textContent = new Date().getFullYear();
renderChips();
renderGrid(PRODUCTOS);
initHeaderYWsp();
