---
name: NUBI
description: Pedidos por WhatsApp con IA. La página es la conversación, en crema con bandas café, con los colores del logo de NUBI.
colors:
  cafe: "#2E1205"
  crema: "#FCF3E6"
  blanco: "#FFFFFF"
  naranja: "#F5633A"
  turquesa: "#54C0B4"
  turquesa-oscuro: "#1D6B63"
  amarillo: "#FBB039"
  crema-2: "#F5E6D0"
  cafe-900: "#1F0B02"
  cafe-700: "#4A2414"
  turquesa-tinte: "#DDF1EE"
  turquesa-suave: "#BDE4DE"
  naranja-hover: "#F77E59"
  naranja-texto: "#B53F18"
  tinta-2: "#6B4A39"
  sobre-cafe: "#FCF3E6"
  sobre-cafe-2: "#DCC8B2"
  linea: "#EADBC6"
  linea-fuerte: "#D8C2A5"
  linea-cafe: "rgba(252, 243, 230, 0.16)"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.55rem + 4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1.15rem + 0.7vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body-lg:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 650
    lineHeight: 1.3
  caption:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
  code:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.18em"
    fontFeature: "tnum"
rounded:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  section-y: "clamp(72px, 4.5rem + 4vw, 136px)"
  gutter: "clamp(16px, 4vw, 40px)"
  max: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.cafe}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.naranja-hover}"
    textColor: "{colors.cafe}"
  button-secondary:
    backgroundColor: "{colors.turquesa-oscuro}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.cafe}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.sobre-cafe}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "52px"
  button-small:
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  bubble-in:
    backgroundColor: "{colors.turquesa-tinte}"
    textColor: "{colors.cafe}"
    rounded: "{rounded.md}"
    padding: "9px 13px"
  bubble-out:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.cafe}"
    rounded: "{rounded.md}"
    padding: "9px 13px"
  option-chip:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.turquesa-oscuro}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "32px"
  chat-window:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.cafe}"
    rounded: "{rounded.lg}"
    width: "420px"
  chat-input:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.cafe}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "48px"
  chat-send:
    backgroundColor: "{colors.cafe}"
    textColor: "{colors.blanco}"
    rounded: "50%"
    size: "48px"
  ticket:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.cafe}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  nav:
    backgroundColor: "{colors.cafe}"
    textColor: "{colors.sobre-cafe-2}"
    height: "68px"
  footer:
    backgroundColor: "{colors.cafe-900}"
    textColor: "{colors.sobre-cafe-2}"
---

# Sistema de diseño: NUBI

## Resumen

**Idea central: "La conversación, con los colores de NUBI"**

La página es la conversación. NUBI se explica con el material de un chat de WhatsApp: burbujas, opciones, chulitos de leído y el talón con el código de entrega. La mascota (una nube crema con casco naranja de domiciliario) se asoma por encima del chat de la portada y aparece en los cierres. Los colores salen del logo: café oscuro de fondo, crema, naranja del casco y de "nubi", turquesa de "COLOMBIA" y amarillo de los destellos.

El tono es cálido, cercano y alegre, como la mascota. Las secciones respiran, los textos se leen en medidas cortas y cada botón es fácil de tocar con el pulgar. La mayoría entra desde el celular, en gamas bajas y con señal irregular.

Se rechaza a propósito la estética de "SaaS de IA": nada de degradados en titulares, cifras gigantes ni tarjetas de ícono más título más texto como estructura de la página. El único vidrio es el del menú flotante.

Todas las páginas usan `styles.css`. Las legales (`privacidad.html`, `terminos-domiciliarios.html`) cargan además `legal.css`, que solo agrega lo propio de un documento largo.

**Rasgos clave:**
- Fondo crema (#FCF3E6) con texto café. El blanco solo se usa en tarjetas sobre crema.
- Bandas café de lado a lado para el menú, la portada, el cierre y el pie (el pie en café-900).
- El chat como lenguaje visual: burbujas, opciones, chulitos y el talón del código.
- El naranja de fondo solo en el botón principal: pocos puntos por pantalla.
- Bricolage Grotesque para los titulares y la letra del celular para todo lo que se lee.
- Botones en píldora, contenedores con bordes suaves y sombras teñidas de café.

## Colores

### Paleta de marca (sale del logo)
| Token | Valor | Uso |
|---|---|---|
| `--cafe` | #2E1205 | Bandas oscuras (menú, portada, cierre), texto principal y titulares sobre claro |
| `--crema` | #FCF3E6 | Fondo general de la página y texto sobre café |
| `--blanco` | #FFFFFF | Solo tarjetas sobre crema: planes, notas, ticket, burbujas de NUBI, ventana del chat |
| `--naranja` | #F5633A | Botón principal, con texto café |
| `--turquesa` | #54C0B4 | Línea destacada del titular sobre café, viñetas, chulitos, números de pasos |
| `--turquesa-oscuro` | #1D6B63 | Botón secundario (texto blanco), enlaces y opciones del chat sobre claro |
| `--amarillo` | #FBB039 | Destellos y detalles sobre café; nunca texto sobre claro |

Proporción aproximada: 55 % crema, 30 % café, 10 % turquesa, 5 % naranja y amarillo.

### Tonos derivados (no son colores nuevos)
- `--crema-2` #F5E6D0: banda alterna (`.section-roles`) y fondo del chat.
- `--cafe-900` #1F0B02: pie de página y fondo de `html` cuando la página rebota en el celular.
- `--cafe-700` #4A2414: luz de fondo de la portada y superficies elevadas sobre café.
- `--turquesa-tinte` #DDF1EE: burbuja del cliente, fondo de los chulitos y del botón de preguntas.
- `--turquesa-suave` #BDE4DE: barras y hover del botón de preguntas.
- `--naranja-hover` #F77E59: hover del botón principal.
- `--naranja-texto` #B53F18: naranja como texto sobre crema o blanco.
- `--tinta-2` #6B4A39: texto secundario sobre claro (≥6.4:1 en crema, crema-2 y blanco).
- `--sobre-cafe-2` #DCC8B2: texto secundario sobre café (10.7:1).
- Líneas: `--linea` y `--linea-fuerte` sobre claro; `--linea-cafe` sobre café.

### Reglas de contraste (no se pueden romper)
**Regla del naranja.** Nunca texto blanco sobre naranja (3.1:1). El texto de los botones naranja va en café (5.6:1). Como texto, el naranja claro solo va sobre café (5.6:1); sobre crema da 2.8:1, así que ahí se usa `--naranja-texto`.

**Regla del turquesa.** El turquesa claro como texto solo va sobre café (7.9:1). Sobre claro se usa `--turquesa-oscuro` (5.1:1 en crema-2, 5.7:1 en crema y 6.3:1 en blanco). Sobre turquesa claro el texto va en café (7.9:1).

**Regla del amarillo.** Solo es decoración (destellos, detalles) o fondo con texto café (9.4:1). Nunca texto sobre claro.

**Regla AA.** Todo texto normal tiene un contraste de al menos 4.5:1, y el texto grande de al menos 3:1.

### Contrastes verificados
| Combinación | Contraste |
|---|---|
| café / crema · crema-2 · blanco | 15.85 · 14.20 · 17.43:1 |
| café / turquesa-tinte (burbuja del cliente) | 14.85:1 |
| tinta-2 / crema · crema-2 · blanco | 7.17 · 6.42 · 7.88:1 |
| crema / café · café-900 | 15.85 · 17.26:1 |
| sobre-cafe-2 / café · café-700 · café-900 | 10.75 · 8.33 · 11.70:1 |
| café / naranja (botón principal) | 5.58:1 |
| naranja / café (texto) | 5.58:1 |
| turquesa / café (titular, viñetas) | 7.95:1 |
| café / turquesa (números de pasos) | 7.95:1 |
| amarillo / café | 9.44:1 |
| blanco / turquesa-oscuro (botón secundario) | 6.30:1 |
| turquesa-oscuro / crema · crema-2 · blanco · tinte | 5.73 · 5.13 · 6.30 · 5.36:1 |
| naranja-texto / crema · blanco | 5.18 · 5.69:1 |

## Tipografía

**Titulares:** Bricolage Grotesque, alojada en el sitio (`assets/fonts/bricolage-grotesque-latin-v2.woff2`, subconjunto latino, wght 600–800, opsz 14–96, 62 kB). Las páginas legales ya no cargan Google Fonts.
**Texto:** la letra del sistema del celular, así que no se descarga nada para leer.

### Jerarquía (todo fluido con `clamp`)
- **Display** (800, 0.98, -0.038em): el h1 de la portada, con un máximo de 14ch en escritorio y de 2.25–3rem en el celular. Los h1 de negocios y domiciliarios van de 2.25 a 4rem con un máximo de 19ch.
- **Headline** (700, 1.04, -0.03em): h2 de sección y del cierre.
- **Title** (700): h3 de pasos y formas de pedir. Los h3 de roles y funciones van más grandes, de 1.625 a 2.375rem.
- **Body large** (1.55): subtítulos e introducciones, a 44–52ch.
- **Body** (1.6): texto corrido, a 36–62ch. En las páginas legales, 70ch.
- **Label** (650): botones, nombres en el chat y encabezados de pantalla.
- **Caption**: notas, el talón y la base del pie.
- **Code** (Bricolage 800, +0.18em, cifras tabulares): el código de entrega del talón.

**Regla del lector.** Bricolage solo va en titulares, la marca, la franja de servicios, precios y el código. Todo lo que se lee como frase va en la letra del sistema. Los números que se comparan (precios, códigos y teléfonos) usan `tabular-nums`.

## Diseño y espacio

Una columna centrada de máximo 1180px, con márgenes laterales fluidos (`clamp(16px, 4vw, 40px)`) que respetan la muesca (`env(safe-area-inset-*)`). La escala es de 4 px. Las secciones se separan con `--section-y` (de 72 a 136px). Dos secciones crema seguidas se separan con una línea fina, y la banda alterna `crema-2` marca el cambio de tema (roles, planes, requisitos).

La portada tiene dos columnas (titular y texto a la izquierda, chat a la derecha). A ≤900px se apila en el orden titular → chat → texto. Puntos de quiebre: 1020, 900, 760 (se ocultan los enlaces del menú) y 600 (los botones principales pasan a todo el ancho).

## Profundidad

Casi toda la profundidad es de tono (café contra crema, blanco contra crema). Las sombras siempre tienen desplazamiento y van teñidas de café, nunca grises ni de color brillante.
- `--shadow-1`: tarjetas en reposo (planes, notas legales, tablas).
- `--shadow-2`: pantallas de ejemplo, el POS y los planes con hover.
- `--shadow-phone`: el teléfono del chat sobre la banda café y el QR del cierre.
- El disco `café-700` detrás del chat de la portada es un círculo sólido, sin degradado. Siempre va detrás del texto.

**Regla sin brillo.** Nada de degradados de relleno, vidrio, desenfoque ni brillos de color. Los degradados solo se usan como máscara, como en las muescas del talón.

## Formas

Píldora (999px) en botones, opciones, etiquetas y el campo del chat. 24px en la ventana del chat, las pantallas, los recuadros de ejemplo y los planes. 16px en las burbujas, el talón, las notas y las tablas. 10px en las mesas del POS y 6px en la cola de las burbujas y el anillo de foco. Las burbujas cortan una esquina a 6px del lado de la cola. El talón conserva sus muescas semicirculares y la línea punteada.

Marcadores de lista: un punto turquesa (roles, planes, legal), un chulito turquesa oscuro en un círculo turquesa-tinte (`.check-list`), un círculo turquesa con chulito café (pruebas de la portada) y números en círculos turquesa (pasos, registro, listas numeradas legales).

## Componentes

### Botones
- **Principal:** naranja con texto café, 52px, en píldora, con un brillo interior sutil. Con mouse, el hover lo pasa a `naranja-hover` y le agrega sombra.
- **Secundario sobre claro (`.btn-dark`):** turquesa oscuro lleno con texto blanco; con mouse, el hover pasa a café.
- **Fantasma sobre café (`.btn-ghost`):** contorno crema al 32 % con texto blanco.
- **Contorno (`.btn-outline`):** turquesa oscuro sobre claro y crema sobre la cabecera legal.
- **Pequeño:** 44px, usado en el menú. Si el admin manda un texto largo, se corta con "…" en una línea.
- **Estados:** al presionar, `scale(0.97)` en 160ms. El foco es un anillo de 2px a 3px de distancia, café sobre claro y turquesa sobre café. Los hover que cambian el fondo solo existen con `(hover: hover) and (pointer: fine)`.

### Chat (firma)
La ventana es blanca y su cuerpo crema-2. Burbujas de NUBI en blanco y del cliente en turquesa-tinte, todo con texto café. Las opciones son píldoras blancas con texto turquesa oscuro. Los chulitos pasan de gris a tinta-2 y luego a turquesa oscuro (enviado, entregado, leído). El campo del chat es crema con letra de 16px (sin zoom en iPhone) y el botón de enviar es un círculo café.

### Marca y mascota
Las piezas están en `assets/marca/`, recortadas del logo con el fondo café quitado y el contorno rehecho, así que sirven sobre crema y sobre café.
- **Menú:** `nubi-logo.webp` (cara de NUBI + "nubi COLOMBIA"), 64px de alto en computador y 50px en celular. El texto "NUBI" queda para lectores de pantalla.
- **Portada:** `nubi-asoma.webp`, NUBI con el celular, agarrado del borde del chat.
- **Chat:** `nubi-cabeza.webp` en un círculo crema-2, como foto de perfil.
- **Cierres:** `nubi-moto-celular.webp` en la portada, `nubi-pulgar.webp` en negocios y `nubi-moto-caja.webp` en domiciliarios.
- **Pie:** `nubi-timbio.webp`, la nube con la moto, las montañas y la iglesia de Timbío.
- **Íconos:** `favicon-32.png` y `marca/favicon-192.png` (la cara sobre turquesa) y `apple-touch-icon.png` (el ícono de app turquesa). `og-cover.jpg` es NUBI en moto con el logo.
- `nubi-wordmark-crema.webp` y `nubi-app-icono-512.png` quedan listos para usar en otras piezas.
- Los logos viejos en cian (`logo-nubi-*`, `nubi-bot*`) ya no se usan en las páginas.

### Menú
Arriba es una banda café. Al bajar 24px se vuelve una cápsula flotante café al 92 % con desenfoque, borde `linea-cafe` y sombra teñida.

### Talón del código (firma)
Talón blanco sobre crema-2, con muescas laterales, línea punteada y cuatro cifras en Bricolage 800 tabulares.

### Planes
Cinco columnas blancas sobre crema-2. Crece se marca con un borde café de 2px, sin insignia. Por debajo de 1020px se deslizan de lado con scroll-snap.

### Preguntas frecuentes
`<details>` nativo con un botón circular turquesa-tinte con un más que gira a una x y se vuelve turquesa al abrirse.

### Páginas legales
Cabecera café con el título, la versión y el PDF. Cuerpo de 46rem. El número de cada capítulo va en turquesa oscuro (es la referencia legal, así que sí informa). Las tablas son blancas y se deslizan de lado en el celular, y las notas son tarjetas blancas sin franja lateral.

## Movimiento

- **Entrada de la portada (el momento de autor):** el titular sube palabra por palabra desde su línea (1000ms, 65ms entre palabras, con un desenfoque que se aclara). El chat aterriza inclinado en 3D (1100ms) y NUBI sube desde detrás del borde con un pequeño rebote. Luego la conversación se escribe sola.
- **Chat de la portada:** los mensajes entran uno a uno, con "escribiendo…" y los chulitos. Mientras escribe, NUBI se balancea. Cuando llega un mensaje del cliente se inclina hacia él, y salta cuando el código queda leído.
- **NUBI se inclina:** con mouse, se inclina hacia el puntero (con un poco de inercia, usando `rotate` y `translate` para no pisar las animaciones). En el celular se inclina hacia la conversación.
- **Fondo del titular:** luces café, naranja, turquesa y amarillo que respiran despacio (20s) y una trama de puntos crema al 9 %. Con mouse, una luz turquesa suave sigue al puntero. Es igual en negocios y domiciliarios.
- **Riel de los pasos:** la línea 1-2-3 se llena con el scroll y cada número se enciende al llegar (`animation-timeline: view()`). En navegadores sin esa función queda encendido y quieto. En el celular se oculta y vuelven los números de cada paso.
- **Aparición al hacer scroll** (`.rv`, desde `script.js`): `opacity` + `translateY(16px)` en 600ms con `--ease-out`, con 70ms de diferencia entre hermanos y una sola vez. Las burbujas de los ejemplos (`.rv-child`) entran en orden, 90ms entre cada una, y el talón se "sella" (`scale(0.94)` → 1). Solo se oculta lo que el JS va a mostrar: sin JS o sin IntersectionObserver, todo queda visible. Al imprimir, todo se muestra.
- **Preguntas:** la respuesta entra con un fundido de 260ms. La altura se anima donde existe `::details-content`.
- **`prefers-reduced-motion`:** sin desplazamientos, solo un fundido de 300ms. El chat se muestra completo y quieto, el titular aparece entero, las luces no se mueven y NUBI no se balancea ni sigue el puntero.
- **Curvas:** `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` y `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`. Se animan `transform` y `opacity`, más `filter` en la entrada del titular.

## Celular

`viewport-fit=cover` con zonas seguras en el menú, el pie, los márgenes y la insignia de vista previa. `theme-color` es #164A41. Sin destello al tocar, `touch-action: manipulation` en los controles, sin selección de texto al dejar presionado un botón y campos de al menos 16px. Nunca se desactiva el zoom.

## Sí y no

### Sí
- **Sí** usa crema de fondo, blanco solo para tarjetas y café para las bandas.
- **Sí** usa la mascota de `assets/marca/` donde haya un momento importante (portada, cierres, pie), una por pantalla.
- **Sí** reserva el naranja para el botón principal, con texto café.
- **Sí** cuenta cómo funciona el producto con burbujas, opciones, chulitos y el talón, en lugar de íconos genéricos.
- **Sí** mantiene los botones de al menos 44px (52 los principales) y a todo el ancho en ≤600px.
- **Sí** verifica el contraste de cualquier combinación nueva antes de usarla.

### No
- **No** pongas texto blanco sobre naranja, amarillo ni turquesa claro.
- **No** uses el turquesa claro ni el naranja claro como texto sobre crema o blanco: ahí van `--turquesa-oscuro` y `--naranja-texto`.
- **No** uses el amarillo como texto sobre claro.
- **No** cambies los colores de las piezas de `assets/marca/` ni las pongas sobre fondos que no sean crema o café.
- **No** uses degradados de relleno, brillos ni sombras grises; el único vidrio es el menú flotante.
- **No** escribas el cuerpo en Bricolage ni cargues otra fuente de texto.
- **No** agregues filas de cifras ni números sin verificar; la prueba se muestra con mecanismos (códigos, revisión humana).
