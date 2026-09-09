# StrixCore — Guía de estilo (Design System)

Identidad de marca rediseñada. Base: violeta / oscuro nocturno / tipografía editorial.

---

## 1. Paleta de colores

### Primarios (marca)

| Token | Hex | Uso |
|---|---|---|
| `--violet` (primary) | `#9342FF` | Acciones principales, links, iconos, palabras destacadas |
| `--violet-2` (secondary) | `#A464F6` | Gradientes, hovers, estados secundarios |
| `--violet-deep` | `#6D1FD0` | Hover de primary (oscurecido) |

### Secundarios / tintes

| Token | Hex | Uso |
|---|---|---|
| `--lavender` (light-violet) | `#E2E7FF` | Fondos suaves, bordes decorativos |
| `--lavender-soft` | `#F0ECFF` | Chips, tags, fondos de iconos |
| `--bg` | `#FBF9FF` | Fondo general (claro con leve tinte violeta) |
| `--surface` | `#FFFFFF` | Tarjetas, superficies elevadas |

### Neutros

| Token | Hex | Uso |
|---|---|---|
| `--ink` (dark) | `#201D1D` | Texto principal, títulos |
| `--muted` | `#6B6570` | Texto secundario, párrafos |
| `--muted-2` | `#A29AA8` | Texto terciario, placeholders |
| `--line` | `rgba(32,29,29,0.10)` | Bordes sobre claro |

### Secciones oscuras (bandas "nocturnas")

| Token | Hex | Uso |
|---|---|---|
| `--night` | `#16101F` | Fondo de secciones oscuras (Trabajos, Contacto) |
| `--night-2` | `#1E1729` | Superficies elevadas en oscuro (formulario) |
| footer | `#0F0A17` | Fondo del footer |
| `--line-night` | `rgba(255,255,255,0.12)` | Bordes sobre oscuro |

### Gradiente de marca

```css
--grad: linear-gradient(135deg, #9342FF 0%, #A464F6 100%);
```

### Semánticos

| Token | Hex | Uso |
|---|---|---|
| `--success` | `#28C840` | Estados "en producción", éxito |
| `--warning` | `#FEBC2E` | (reservado) |
| `--danger` | `#FF5F57` | (reservado) |

---

## 2. Tipografía

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| Display / títulos | **Cactus Classical Serif** | 400 | H1, H2, H3, logo, números destacados |
| Texto / UI | **Plus Jakarta Sans** | 300–800 | Body, botones, nav, labels |
| Código / datos | **JetBrains Mono** | 400, 500, 700 | Snippets, URLs, métricas, numeración |

Escala sugerida (desktop):

- H1 (hero): `clamp(2.9rem, 6.5vw, 5.4rem)` / line-height 1.05
- H2 (sección): `clamp(2.4rem, 5.5vw, 4.2rem)`
- H3 (tarjeta): `1.7rem`
- Body: `17px` / line-height 1.65
- Lead: `20px`
- Eyebrow/label: `12px`, uppercase, `letter-spacing 0.24em`, peso 700

> Regla: títulos en serif con `font-weight 400`; la palabra clave se resalta con el gradiente violeta (`.em`).

---

## 3. Espaciado, radios y sombras

### Radios

| Token | Valor | Uso |
|---|---|---|
| `--r-sm` | `12px` | Chips, iconos |
| `--r-md` | `16–18px` | Tarjetas tech, mini-cards |
| `--r-lg` | `22–24px` | Tarjetas de servicio, proyectos |
| `--r-full` | `999px` | Botones, badges, pills |

### Sombras

- Botón primary: `0 10px 30px -8px rgba(147,66,255,0.55)`
- Tarjeta hover: `0 30px 60px -30px rgba(147,66,255,0.35)`
- Card oscura: `0 50px 100px -40px rgba(80,20,160,0.5)`

### Espaciado

- Secciones: `120px` vertical (88px en mobile)
- Contenedor: `max-width 1200px`, gutter `24px` por lado

---

## 4. Componentes

### Botones

- **Primary**: gradiente violeta, texto blanco, pill, hover `translateY(-3px)` + glow
- **Ghost**: borde neutro, hover borde + texto violeta
- **Light** (sobre oscuro): fondo blanco, texto violeta

### Tarjetas de servicio

- Fondo blanco, borde neutro, radio 24px
- Hover: elevación + borde violeta + glow violeta suave
- Estructura: número → icono (fondo `lavender-soft`) → título serif → descripción → tags

### Proyectos (banda oscura)

- Grid 2 columnas (imagen/texto) alternando
- Imagen con overlay de categoría (blur) y zoom en hover
- Link con subrayado violeta animado

### Chips / tags

- Fondo `lavender-soft`, texto muted, pill, peso 600

---

## 5. Iconografía

- Estilo: trazo fino (`stroke-width 1.7–2`), esquinas redondeadas (lucide)
- Color: violeta sobre claro; violeta claro sobre oscuro

---

## 6. Motion

- `--ease: cubic-bezier(0.22, 1, 0.36, 1)`
- Reveal on scroll: `translateY(34px) → 0`, 0.9s, stagger 0.1s
- Hover botones: `translateY(-3px)`
- Hover tarjetas: `translateY(-6px)` + sombra
- Animaciones de loop: anillos orbitales (spin), badges (float), pulso "en producción"

---

## 7. Estructura de la página

1. **Nav** — logo + links (Servicios, Trabajos, Tecnologías, Nosotros) + CTA "Solicitar presupuesto"
2. **Hero** — eyebrow + H1 + lead + CTAs + stats + visual
3. **Marquee** — servicios en loop
4. **Servicios** — 4 tarjetas (Presencia Digital, Ecommerce, Sistemas de Gestión, Automatización)
5. **Trabajos** — banda oscura, 2 proyectos (Estudio CGA, Stock Animal)
6. **Tecnologías** — grid de 14 tech
7. **Nosotros** — about + equipo (Luca, Valentín)
8. **Contacto** — banda oscura, form + datos
9. **Footer** — oscuro, links + legal

---

## 8. Contenido de marca

- Nombre: **StrixCore**
- Tagline: "Transformamos ideas en productos digitales."
- Sub: "Creamos ecosistemas digitales de alto rendimiento que escalan tu negocio mediante código limpio y procesos automatizados."
- Email: `strixcore1@gmail.com`
- Ubicación: Argentina
- Equipo: Luca Lanfranqui, Valentín Caminos Martínez (Desarrolladores Full Stack)

### Recursos (imágenes)

- `logo.png` — logo principal
- `logo-circulo.png` — logo circular (favicon/emblema)
- `proyecto-cga.png` — screenshot Estudio CGA
- `proyecto-stock.png` — screenshot Stock Animal
- `luca.jpg`, `valen.png` — fotos del equipo
