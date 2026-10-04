---
name: Quesos El Consuelo
description: Queso manchego artesano de ganadería propia, pedido por WhatsApp desde una tienda de ultramarinos.
colors:
  verde: "#1F3B2D"
  verde-hondo: "#142A20"
  oro: "#C9A24A"
  oro-tinta: "#7D5F1C"
  cordel: "#B8452E"
  marmol: "#F3F2EE"
  azulejo: "#E5EAE3"
  estraza: "#D8C3A0"
  tinta: "#22302A"
  gris: "#56625A"
  junta: "#C9CFC6"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2.6rem, 8.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
  quote:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
  label-sm:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.12em"
  cifra:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.2
    fontFeature: "tnum"
rounded:
  none: "0px"
  nudo: "9999px"
spacing:
  gutter-sm: "16px"
  gutter: "24px"
  section: "80px"
  section-lg: "112px"
  container: "72rem"
  container-fachada: "80rem"
components:
  button-pedido:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.marmol}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-pedido-hover:
    backgroundColor: "{colors.verde-hondo}"
  enlace-cordel:
    textColor: "{colors.verde}"
    typography: "{typography.label}"
  enlace-cordel-hover:
    textColor: "{colors.cordel}"
  opcion-esmaltada:
    backgroundColor: "{colors.marmol}"
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  opcion-esmaltada-checked:
    backgroundColor: "{colors.verde}"
    textColor: "{colors.marmol}"
  etiqueta-esmaltada:
    backgroundColor: "{colors.marmol}"
    textColor: "{colors.verde}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  nota-pedido:
    backgroundColor: "{colors.estraza}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "20px 28px 24px"
  rotulo:
    backgroundColor: "{colors.verde-hondo}"
    textColor: "{colors.oro}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "24px 16px"
  hoja-mostrador:
    backgroundColor: "{colors.marmol}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "40px"
---

# Design System: Quesos El Consuelo

## Overview

**Creative North Star: "El Mostrador de Ultramarinos"**

La web se comporta como la tienda de la quesería: una fachada de madera pintada en verde botella, un rótulo en pan de oro, una pared alicatada donde están las baldas con el género y un mostrador de mármol donde se apunta el pedido en una nota de papel de estraza. Cada pieza visual nombra un objeto de esa tienda (rótulo, escaparate, balda, etiqueta esmaltada, libreta, cordel, placa) y se dibuja con los medios de ese objeto: filetes dobles, molduras en relieve, líneas de puntos de libreta, un hilo rojo discontinuo.

La densidad es de comercio de barrio, no de catálogo: secciones anchas con mucho aire vertical, una idea por panel, cifras en columnas tabulares como en una libreta de pedidos. La profundidad es física y suave (el papel proyecta sombra sobre el mármol, la balda sobre la pared), nunca tarjetas flotantes genéricas. Las esquinas son rectas en todo el sistema; lo único redondo es el nudo del cordel.

El sistema rechaza explícitamente el «hero con foto, titular, botón y fila de tarjetas» en tonos crema. Las fotos son reales y siempre van enmarcadas por el mundo (cristal de escaparate, balda), nunca como fondo con texto encima.

**Key Characteristics:**
- Fachada verde con rótulo dorado como cabecera de cada superficie principal.
- La nota de pedido de estraza es el componente central y la acción de conversión.
- Esquinas a 0 px; filetes dobles (3–5 px) como borde de etiqueta y rótulo.
- Tres voces tipográficas con reparto fijo: Bodoni rotula, Barlow etiqueta y cuenta, Franklin explica.
- El cordel rojo marca estado activo, enlaces y el recorrido de la procedencia.

## Colors

Paleta de tienda antigua: madera verde botella, pan de oro, mármol frío, azulejo verdoso, papel de estraza y un único rojo de hilo.

### Primary
- **Verde Fachada** (verde): madera pintada de la fachada. Fondo de las regiones grandes (cabecera, panel de historia), botón de pedido, texto de titulares sobre mármol y azulejo, estado seleccionado de las opciones.
- **Verde Hondo** (verde-hondo): la sombra de la fachada. Fondo del rótulo, marco del escaparate, la balda bajo cada foto, pie de foto a sangre, pie de página y hover del botón verde.

### Secondary
- **Pan de Oro** (oro): exclusivamente rótulos y cifras destacadas sobre verde o verde hondo (el nombre de la casa, «1938», el sello de una línea, el borde del botón flotante de WhatsApp). También el color de la selección de texto.
- **Oro de Tinta** (oro-tinta): la versión legible del oro (≥4.5:1) para cuando un acento dorado tiene que vivir sobre mármol o azulejo.

### Tertiary
- **Cordel Rojo** (cordel): el hilo. Subrayado de los enlaces de acción, su color en hover, el trazado discontinuo de la procedencia, el cordel que ata la nota al enviarla, el texto del rótulo pequeño en las etiquetas esmaltadas y el anillo de foco global (2 px, desplazamiento 3 px).

### Neutral
- **Mármol** (marmol): el mostrador. Fondo base del sitio, de las hojas de contacto y libro de visitas, y de las etiquetas esmaltadas; texto sobre verde.
- **Azulejo** (azulejo): la pared alicatada. Fondo alterno de secciones; en la sección de quesos lleva una retícula de juntas de 56 px en verde al 7 %.
- **Estraza** (estraza): papel de envolver. Reservado a la nota de pedido.
- **Tinta** (tinta): texto corrido.
- **Gris Mostrador** (gris): texto secundario y claves de las listas (≥4.5:1 sobre mármol).
- **Junta** (junta): bordes y campos de los componentes base (shadcn).

### Named Rules
**The Pan de Oro Rule.** El oro (#C9A24A) solo se pinta sobre verde o verde hondo. Sobre mármol, azulejo o estraza, el acento dorado es oro-tinta o no existe.

**The Un Solo Hilo Rule.** El cordel es el único color cálido saturado del sistema y siempre significa hilo: enlace, foco, estado activo o recorrido. No se usa como fondo de superficie ni como decoración suelta.

**The Estraza Es Para Pedir Rule.** El papel de estraza identifica la nota de pedido. Ninguna otra superficie lo usa, para que el ojo encuentre siempre dónde se pide.

## Typography

**Display Font:** Bodoni Moda (con Georgia, serif), cargada en normal e itálica.
**Body Font:** Libre Franklin (con system-ui, sans-serif).
**Label/Mono Font:** Barlow Condensed (400–700).

**Character:** Un Bodoni de alto contraste hace de rótulo pintado; Barlow Condensed en versalitas espaciadas hace de etiqueta esmaltada y de cifra de libreta; Libre Franklin, sobria y abierta, lleva toda la explicación.

### Hierarchy
- **Display** (600, clamp(2.6rem, 8.2vw, 6rem), 0.95): el rótulo de la casa y el nombre de cada línea en su cabecera, en oro sobre verde hondo con una sombra de grabado. Una por página. El panel de historia usa una variante mayor en peso 400 (hasta 5.5rem, interlineado 1) para su único dato.
- **Headline** (400, clamp(2.2rem, 4.5vw, 3.6rem), 1.05): titular de sección en verde, con `text-wrap: balance` y medida corta (≈14–18ch).
- **Title** (400, 2rem, 1): nombre de una línea en su etiqueta esmaltada y el dato de cada paso de la procedencia.
- **Quote** (400 itálica, clamp(1.25rem, 2.2vw, 1.6rem), 1.375): entradas del libro de visitas; la itálica también titula la nota de pedido (1.7rem) y la placa «Plata».
- **Body** (400, 1–1.1rem, 1.625): texto corrido en tinta (o mármol al 85 % sobre verde), medida 46–62ch.
- **Label** (600, 1.05rem, 0.1em, mayúsculas): enlaces de acción, botones, nombres en listas. El subtítulo del rótulo va en 500 con 0.28em.
- **Label pequeña** (600, 0.8rem, 0.12em, mayúsculas): leyendas de los campos de la nota.
- **Cifra** (600, 1.4rem, cifras tabulares): teléfonos, cantidades, años y formatos en las listas de libreta.

### Named Rules
**The Tres Voces Rule.** Bodoni rotula, Barlow etiqueta y cuenta, Franklin explica. Un texto que explica nunca va en Barlow; una etiqueta o una cifra nunca va en Franklin.

**The Cifra De Libreta Rule.** Todo número que se lee en columna o se compara (cantidades, formatos, teléfonos, años) lleva cifras tabulares.

## Layout

Columna central de 72rem (80rem en la fachada de cabecera) con márgenes laterales de 16 px que pasan a 24 px desde 640 px. Las secciones alternan fondo a sangre (verde, mármol, azulejo) y llevan 80 px de aire vertical, 112 px desde 1024 px.

La cabecera es una retícula de dos columnas en escritorio (1.35fr escaparate / 1fr nota) donde la nota ocupa las dos filas de la izquierda; en móvil el orden del DOM manda: rótulo, escaparate, nota, texto. Las baldas de quesos usan una columna fija de 17rem para la etiqueta y el resto para descripción y lista. La procedencia es una fila de cuatro pasos en escritorio y una columna con el cordel vertical en móvil. El panel de historia son tres planos a sangre, cada uno con un solo dato.

Las listas de libreta alinean clave y valor con una línea de puntos de 2 px que rellena el hueco.

## Elevation & Depth

Profundidad física y cálida: las sombras siempre están tintadas de verde hondo y caen hacia abajo, como objetos sobre un mostrador. No hay capas de cristal ni desenfoques salvo la cabecera fija. El relieve de la fachada se construye con sombras interiores (moldura) y el rótulo con una sombra de texto grabada.

### Shadow Vocabulary
- **Nota sobre el mostrador** (`box-shadow: 0 18px 40px -12px rgba(20,42,32,0.55)`): solo la nota de pedido.
- **Hoja de mostrador** (`box-shadow: 0 14px 30px -14px rgba(20,42,32,0.45)`): hojas de mármol sobre azulejo (contacto, libro de visitas).
- **Balda** (`box-shadow: 0 10px 18px -8px rgba(20,42,32,0.6)`): la tabla de 12 px bajo cada foto de quesos.
- **Botón flotante** (`box-shadow: 0 8px 22px -6px rgba(20,42,32,0.6)`): el acceso fijo a WhatsApp.
- **Moldura** (`box-shadow: inset 0 0 0 1px rgba(201,162,74,0.35), inset 0 0 0 7px var(--color-verde), inset 0 0 0 8px rgba(0,0,0,0.28)`): marco de la fachada de cabecera.
- **Grabado del rótulo** (`text-shadow: 0 1px 0 #6b5216, 0 3px 10px rgba(0,0,0,0.45)`): solo el texto display en oro.

### Named Rules
**The Objeto Apoyado Rule.** Una sombra solo existe si el objeto del mundo estaría apoyado o colgado (papel, hoja, balda, etiqueta). Siempre verde hondo, siempre hacia abajo, nunca desplazada en diagonal.

## Shapes

Esquinas rectas en todo el sistema (0 px): rótulos, etiquetas, botones, opciones, hojas y fotos. Los bordes son de oficio: filete doble de 3 px en verde para las etiquetas esmaltadas y placas, filete doble de 5 px en oro al 80 % para el rótulo, borde superior de 10 px en verde para la hoja de contacto. La nota de pedido abre con un borde troquelado (máscara de semicírculos de 12 px) como un taco de notas. Las fotos van dentro de un marco de verde hondo de 8–10 px y, en el escaparate, con dos junquillos verticales y un reflejo diagonal de cristal. Lo único circular es el nudo del cordel (24 px, borde de 3 px).

## Components

### Buttons
Pocos, rectos y del color de la fachada.
- **Shape:** esquinas rectas (0 px).
- **Pedido (primario):** fondo verde, texto mármol, Barlow 600 en mayúsculas con 0.08em, 14 px × 20 px, icono de WhatsApp en SVG a 19 px. Ocupa el ancho completo dentro de la nota.
- **Hover / Focus:** el fondo pasa a verde hondo; foco con el anillo cordel global. Al pulsar, todo botón escala a 0.97.
- **Flotante de WhatsApp:** el mismo botón con borde de 2 px en oro y sombra de botón flotante; aparece con un deslizamiento de 16 px al pasar el 90 % de la primera pantalla.
- **Enlace de acción:** Barlow 600 en mayúsculas, verde, subrayado cordel de 2 px desplazado 6 px, flecha que avanza 4 px en hover; el texto pasa a cordel. Sobre verde, la variante va en oro con subrayado de oro al 40 %.

### Chips
- **Style:** las opciones de la nota son radios nativos con aspecto de etiqueta esmaltada: Barlow 500, borde de 1 px en verde al 25 %, fondo mármol al 70 %, 6 × 12 px.
- **State:** hover endurece el borde a verde; seleccionada, fondo verde y texto mármol; foco con contorno cordel.

### Cards / Containers
- **Corner Style:** rectas (0 px).
- **Background:** mármol sobre azulejo (hojas), mármol o azulejo dentro de filete doble (etiquetas, placas).
- **Shadow Strategy:** ver Elevation & Depth; las etiquetas no llevan sombra salvo la que cuelga del escaparate.
- **Border:** filete doble verde de 3 px en etiquetas; las hojas no llevan borde salvo el cabezal verde de la de contacto.
- **Internal Padding:** etiquetas 16 × 20 px; hojas 32–40 px.

### Inputs / Fields
- **Style:** campo de libreta: sin caja, fondo transparente, solo una línea inferior de 1 px en tinta al 40 %.
- **Focus:** la línea pasa a verde.
- **Contador:** caja de borde verde al 25 % con botones menos/más y la cifra tabular en el centro; el botón «menos» se atenúa al 35 % cuando no puede bajar.

### Navigation
- **Style:** cabecera fija de 64 px; transparente sobre la fachada en la portada y mármol al 96 % con desenfoque de 8 px y un filete inferior dorado al 20 % al hacer scroll o en el resto de páginas. Enlaces en Libre Franklin a 14 px; desplegable de quesos en mármol con los nombres en Bodoni. En móvil, panel lateral en mármol con los enlaces en Bodoni a 24 px.

### Nota de pedido (componente firma)
Hoja de estraza con cabezal troquelado en verde hondo, título en Bodoni itálica sobre una regla de 2 px en tinta, grupos de opciones (queso, variedad, formato), contador, lista de lo apuntado en cifras tabulares, nombre opcional y el botón de pedido. Entra con un giro de 0.6° y un deslizamiento de 24 px. Al enviar, un cordel rojo discontinuo (2.5 px, 6/4) se dibuja sobre el botón en 0.6 s: la nota queda atada. Si la lista está vacía se envía lo seleccionado, así que pedir nunca exige dos pasos. La misma nota aparece en la cabecera de cada línea de queso, ya puesta en esa línea.

### Etiqueta esmaltada
Placa de mármol con filete doble verde: el nombre en Bodoni y, debajo, un rótulo corto en Barlow mayúsculas cordel. Nombra cada balda de quesos y la medalla («Plata / WCA · 2016»).

### Cordel de procedencia
Trazo SVG discontinuo en cordel (2.5 px, 7/5) que une los pasos con nudos circulares; se dibuja una vez al entrar en vista (1.6 s). En móvil se vuelve una línea vertical discontinua.

### Movimiento
Una sola curva para todo: `cubic-bezier(0.23, 1, 0.32, 1)`. Entradas de 0.3–0.7 s por opacidad y desplazamiento corto; el rótulo se «enciende» de brillo 0.55 a 1 en 1.1 s. Con `prefers-reduced-motion` las duraciones caen a 0.01 ms.

## Do's and Don'ts

### Do:
- **Do** abrir cada superficie principal con la fachada verde y un rótulo en oro sobre verde hondo dentro de un filete doble de 5 px.
- **Do** poner la nota de pedido de estraza a la vista en la primera pantalla de toda página que venda un queso.
- **Do** enmarcar las fotos reales en verde hondo (escaparate o balda), nunca como fondo bajo texto.
- **Do** escribir listas de variedades, formatos y teléfonos como libreta: clave, línea de puntos, valor en cifras tabulares.
- **Do** marcar enlaces de acción con el subrayado cordel de 2 px y usar el cordel para el foco.
- **Do** usar sombras tintadas de verde hondo que caen hacia abajo, solo bajo objetos apoyados o colgados.

### Don't:
- **Don't** montar el «hero con foto, titular, botón y fila de tarjetas» en crema.
- **Don't** pintar oro (#C9A24A) sobre mármol, azulejo o estraza; ahí va oro-tinta.
- **Don't** redondear esquinas; el único círculo es el nudo del cordel.
- **Don't** usar estraza fuera de la nota de pedido ni cordel como fondo de superficie.
- **Don't** rayar con renglones el fondo de un formulario o de una lista de alturas variables (la nota, el libro de visitas): no se alinean. La línea de puntos de libreta sí vale entre clave y valor.
- **Don't** usar Franklin para etiquetas o cifras, ni Barlow para texto que explica.
