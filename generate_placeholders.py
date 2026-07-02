#!/usr/bin/env python3
"""Genera imágenes SVG de reemplazo (placeholders) elegantes para cada producto.
Estas imágenes son solo temporales: sirven para que el catálogo se vea completo
mientras se reemplazan por fotos reales de los productos."""

import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "images", "productos")
os.makedirs(OUT_DIR, exist_ok=True)

# paleta por categoría (fondo, acento, texto)
PALETTES = {
    "labiales":         ("#F1E1D8", "#C08573", "#2E2620"),
    "bases":            ("#F3E9DE", "#B08D57", "#2E2620"),
    "skincare":         ("#EFEDE6", "#8A9A80", "#2E2620"),
    "perfumes":         ("#EDE6EF", "#8873A8", "#2E2620"),
    "serums":           ("#E6EEEF", "#5E8A94", "#2E2620"),
    "cuidado-corporal": ("#F6ECE3", "#C79A63", "#2E2620"),
}

ICONS = {
    "labiales": '<path d="M0,10 C10,-8 30,-8 40,10 L40,10 C36,26 4,26 0,10 Z" transform="translate(80,70)" fill="{accent}" opacity="0.85"/>',
    "bases": '<rect x="90" y="70" width="40" height="55" rx="10" fill="{accent}" opacity="0.85"/><rect x="98" y="58" width="24" height="16" rx="4" fill="{accent}"/>',
    "skincare": '<rect x="85" y="75" width="50" height="45" rx="14" fill="{accent}" opacity="0.85"/><ellipse cx="110" cy="72" rx="20" ry="8" fill="{accent}"/>',
    "perfumes": '<rect x="95" y="80" width="30" height="45" rx="4" fill="{accent}" opacity="0.85"/><rect x="103" y="60" width="14" height="20" rx="3" fill="{accent}"/>',
    "serums": '<rect x="92" y="65" width="36" height="60" rx="8" fill="{accent}" opacity="0.85"/><path d="M100,65 L120,65 L116,50 L104,50 Z" fill="{accent}"/>',
    "cuidado-corporal": '<rect x="88" y="65" width="44" height="60" rx="16" fill="{accent}" opacity="0.85"/><rect x="100" y="52" width="20" height="16" rx="6" fill="{accent}"/>',
}

def make_svg(slug, categoria, nombre):
    bg, accent, ink = PALETTES.get(categoria, ("#F1E1D8", "#C08573", "#2E2620"))
    icon = ICONS.get(categoria, "").format(accent=accent)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
  <rect width="220" height="220" fill="{bg}"/>
  <circle cx="110" cy="95" r="70" fill="{ink}" opacity="0.04"/>
  {icon}
  <text x="110" y="185" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="{ink}" opacity="0.55">EILE store</text>
  <text x="110" y="200" text-anchor="middle" font-family="Georgia, serif" font-size="9" fill="{ink}" opacity="0.4">foto próximamente</text>
</svg>'''
    path = os.path.join(OUT_DIR, f"{slug}.svg")
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    return path

PRODUCTS = [
    # labiales
    ("labial-una-matte-rouge", "labiales", "Una Labial Matte Rouge"),
    ("labial-faces-cereza-drama", "labiales", "Faces Labial Cereza Drama"),
    ("labial-aquarela-color-hidra", "labiales", "Aquarela Labial Color Hidra"),
    ("labial-esika-colorfix-barra", "labiales", "ésika Labial COLORFIX"),
    ("labial-esika-addiction-matte", "labiales", "ésika Labial Addiction Matte"),
    # bases
    ("base-esika-natural-matte", "bases", "ésika Natural Matte"),
    ("base-esika-pro-matificante", "bases", "ésika PRO Matificante"),
    ("base-una-serum-nude", "bases", "Una Base Sérum Nude"),
    ("primer-una-blur", "bases", "Una Primer Blur"),
    ("corrector-una-cobertura-extrema", "bases", "Una Corrector Extremo"),
    # skincare
    ("crema-esika-supreme-8en1", "skincare", "ésika Crema Supreme 8en1"),
    ("desmaquillador-esika-bifasico", "skincare", "ésika Desmaquillador Bifásico"),
    ("bruma-una-hidratante-fijadora", "skincare", "Una Bruma Hidratante"),
    ("polvo-una-luminoso", "skincare", "Una Polvo Luminoso"),
    ("protector-esika-fps50-triple-accion", "skincare", "ésika Protector FPS50+"),
    # perfumes
    ("perfume-esika-kalos-sport", "perfumes", "ésika Kalos Sport"),
    ("perfume-esika-dream", "perfumes", "ésika Dream EDP"),
    ("perfume-esika-grazzia", "perfumes", "ésika Grazzia"),
    ("perfume-natura-ekos-frescor-maracuya", "perfumes", "Ekos Frescor Maracuyá"),
    ("perfume-natura-kaiak-aventura", "perfumes", "Kaiak Aventura"),
    # serums
    ("serum-esika-antiedad-triple-accion", "serums", "ésika Suero Antiedad"),
    ("serum-esika-hydra-max", "serums", "ésika Suero Hydra Max"),
    ("serum-natura-chronos-multirreparador", "serums", "Chronos Multirreparador"),
    ("serum-natura-una-iluminador-vitc", "serums", "Una Sérum Vitamina C"),
    ("serum-natura-ekos-castana", "serums", "Ekos Sérum Castaña"),
    # cuidado-corporal
    ("crema-ekos-castana-corporal", "cuidado-corporal", "Ekos Crema Castaña"),
    ("crema-ekos-manos-castana", "cuidado-corporal", "Ekos Crema Manos"),
    ("exfoliante-ekos-castana", "cuidado-corporal", "Ekos Pulpa Exfoliante"),
    ("aceite-ekos-pitanga", "cuidado-corporal", "Ekos Aceite Pitanga"),
    ("jabon-ekos-vegetal", "cuidado-corporal", "Ekos Jabón Vegetal"),
]

for slug, cat, nombre in PRODUCTS:
    make_svg(slug, cat, nombre)

print(f"Generadas {len(PRODUCTS)} imágenes en {OUT_DIR}")
