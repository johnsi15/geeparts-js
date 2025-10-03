# 🎉 Geeparts Newsletter Widget

Modal de suscripción a newsletter empaquetado y listo para usar con jsDelivr CDN.

## 📦 Instalación

### Opción 1: Desde CDN (Recomendado)

```html
<!-- Cargar desde jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/geeparts-js@latest/dist/geeparts-newsletter.min.js"></script>
```

### Opción 2: Instalación con npm

```bash
npm install geeparts-js
```

## 🚀 Uso Básico

### Auto-inicialización

La forma más simple es definir la configuración global antes de cargar el script:

```html
<!-- Configuración -->
<script>
  window.geepartsNewsletterConfig = {
    demoMode: true,
    couponCode: 'WELCOME15',
    autoOpen: true,
    autoOpenDelay: 3000
  };
</script>

<!-- Cargar widget (se inicializa automáticamente) -->
<script src="https://cdn.jsdelivr.net/npm/geeparts-js@latest/dist/geeparts-newsletter.min.js"></script>
```

### Inicialización manual

Para más control, puedes crear una instancia manualmente:

```html
<script src="https://cdn.jsdelivr.net/npm/geeparts-js@latest/dist/geeparts-newsletter.min.js"></script>

<script>
  // Crear instancia
  const newsletter = new GeepartsNewsletter({
    demoMode: false,
    apiEndpoint: '/api/subscribe',
    couponCode: 'WELCOME15',
    autoOpen: false
  });
  
  // Abrir programáticamente
  document.getElementById('miBoton').addEventListener('click', () => {
    newsletter.open();
  });
</script>
```

## ⚙️ Opciones de Configuración

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `apiKey` | string | `''` | API key de Brevo (si usas integración directa) |
| `listId` | number | `2` | ID de lista de Brevo |
| `apiUrl` | string | `'https://api.brevo.com/v3/contacts'` | URL de API de Brevo |
| `apiEndpoint` | string | `null` | Endpoint de tu backend para procesar suscripciones |
| `couponCode` | string | `'WELCOME15'` | Código de cupón a mostrar |
| `autoOpen` | boolean | `false` | Abrir automáticamente el modal |
| `autoOpenDelay` | number | `3000` | Delay antes de auto-abrir (ms) |
| `demoMode` | boolean | `true` | Modo demo (no hace peticiones reales) |
| `title` | string | `'15% de descuento para la primera compra'` | Título del modal |
| `description` | string | `'Suscríbete a nuestro newsletter...'` | Descripción del modal |
| `successTitle` | string | `'¡Gracias por unirte!'` | Título de éxito |
| `successDescription` | string | `'Ya puedes usar el cupón...'` | Descripción de éxito |
| `buttonText` | string | `'15% de descuento'` | Texto del botón |

## 📝 Ejemplos

### Ejemplo 1: Modal con botón personalizado

```html
<button id="openNewsletterBtn">Suscríbete y ahorra</button>

<script src="https://cdn.jsdelivr.net/npm/geeparts-js@latest/dist/geeparts-newsletter.min.js"></script>
<script>
  const newsletter = new GeepartsNewsletter({
    demoMode: true,
    couponCode: 'SAVE15'
  });
  
  document.getElementById('openNewsletterBtn').addEventListener('click', () => {
    newsletter.open();
  });
</script>
```

### Ejemplo 2: Auto-abrir después de 5 segundos

```html
<script>
  window.geepartsNewsletterConfig = {
    autoOpen: true,
    autoOpenDelay: 5000,
    couponCode: 'WELCOME15'
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/geeparts-js@latest/dist/geeparts-newsletter.min.js"></script>
```

### Ejemplo 3: Integración con backend

```html
<script>
  const newsletter = new GeepartsNewsletter({
    demoMode: false,
    apiEndpoint: '/api/newsletter/subscribe',
    couponCode: 'FIRSTBUY15',
    title: 'Únete a nuestra comunidad',
    description: 'Recibe ofertas exclusivas y novedades'
  });
</script>
```

## 🔧 API del Backend

Si usas `demoMode: false` y defines un `apiEndpoint`, el widget enviará una petición POST con el siguiente formato:

**Request:**
```json
POST /api/subscribe
Content-Type: application/json

{
  "email": "usuario@ejemplo.com",
  "listId": 2
}
```

**Response (éxito):**
```json
{
  "id": "contact-id-123",
  "message": "Suscripción exitosa"
}
```

**Response (error):**
```json
{
  "message": "Error al procesar la suscripción"
}
```

## 🎨 Personalización de Estilos

Todos los estilos usan el prefijo `geeparts-` para evitar conflictos. Puedes sobrescribir los estilos con CSS personalizado:

```html
<style>
  .geeparts-modal {
    border-radius: 24px !important;
  }
  
  .geeparts-submit-btn {
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%) !important;
  }
</style>
```

## 📱 Responsive

El widget es completamente responsive y se adapta a dispositivos móviles automáticamente.

## 🔒 Seguridad

⚠️ **Importante:** Nunca expongas tu API key de Brevo en el frontend. Usa siempre un backend intermedio para procesar las suscripciones.

## 🛠️ Desarrollo

### Build local

```bash
# Instalar dependencias
npm install

# Build del widget
npm run build

# El archivo generado estará en: dist/geeparts-newsletter.min.js
```

### Testing local

Abre el archivo `newsletter/demo.html` en tu navegador para probar el widget localmente.

## 📄 Licencia

MIT License - John Serrano

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o PR en GitHub.

## 📧 Soporte

Para reportar bugs o solicitar features: https://github.com/johnsi15/geeparts-js/issues
