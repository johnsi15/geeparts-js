# Black Days: detal y mayoristas

Inicio: **27 de noviembre de 2026, 00:00 en Colombia**.
Las dos variantes comparten imagen móvil; cada una tiene su imagen desktop.
Las demos usan el mismo código y CSS que los bundles.

- Detal: `demo-black-friday-countdown.html`
- Mayoristas: `demo-black-friday-mayoristas.html`

## Generar

```sh
npm run build
```

Archivos autocontenidos (incluyen CSS):

- `dist/black-friday-detal-countdown.min.js`
- `dist/black-friday-mayoristas-countdown.min.js`

## Instalar

Subir el archivo correspondiente al hosting o publicar una nueva versión npm.
Después cargar **solo la variante del sitio**, por ejemplo:

```html
<!-- Sustituir VERSION por la versión realmente publicada. -->
<script defer src="https://cdn.jsdelivr.net/npm/geeparts-js@VERSION/dist/black-friday-detal-countdown.min.js"></script>
```

En mayoristas usar `black-friday-mayoristas-countdown.min.js`.
No se publicó ninguna versión automáticamente.

El widget oculta los hijos originales del contenedor seleccionado y monta
el banner completo con su contador. No modifica las otras diapositivas.
Si la primera diapositiva contenía un enlace, el nuevo banner no lo conserva.
Quitar el script y recargar restaura el contenido original.

### Puntos de inyección

Detal usa la primera diapositiva de los sliders de Tiendanube desktop y móvil.
Mayoristas usa los selectores de Stackable ya presentes en `build.js` para feria:
`stk-d1016b2` (desktop) y `stk-982d90e` (móvil).
**Pendiente validar en sesión autenticada**: el sitio público de mayoristas
redirige al login y no permite inspeccionar su carrusel actual.
Si no hay coincidencias, no se inyecta en otra parte de la página.

Se pueden configurar contenedores concretos antes de cargar el bundle:

```html
<script>
  window.geepartsBlackDaysConfig = {
    selectors: ['#mi-slide-desktop', '#mi-slide-mobile'],
    targetDate: '2026-11-27T00:00:00-05:00',
  }
</script>
```

Los selectores deben apuntar al área de imagen de la diapositiva, no al carrusel entero.
No cargar simultáneamente el antiguo contador de feria en esos contenedores.
