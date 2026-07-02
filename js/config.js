/* ============================================================
   CONFIGURACIÓN GENERAL DE LA TIENDA
   ============================================================
   Aquí cambias el número de WhatsApp y los nombres de las
   categorías que aparecen en los botones de filtro.
============================================================ */

const CONFIG = {
  // Número de WhatsApp SIN el "+" y SIN espacios (código de país + número)
  whatsapp: "51997699339",

  nombreTienda: "EILE store",

  // Mensaje que se arma automáticamente al hacer clic en "Lo quiero"
  // {producto} y {precio} se reemplazan solos, no los borres.
  mensajeWhatsapp: "Hola! 👋 Vi en EILE store el producto: *{producto}* (S/ {precio}) y quiero cotizarlo 💕",

  // Categorías que se muestran como filtros. El "valor" debe coincidir
  // exactamente con la "categoria" que pusiste en products.js
  categorias: [
    { valor: "labiales", etiqueta: "Labiales" },
    { valor: "bases", etiqueta: "Bases" },
    { valor: "skincare", etiqueta: "Skincare" },
    { valor: "perfumes", etiqueta: "Perfumes" },
    { valor: "serums", etiqueta: "Serums" },
    { valor: "cuidado-corporal", etiqueta: "Cuidado corporal" }
  ]
};
