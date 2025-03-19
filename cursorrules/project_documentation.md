# Documentación del Proyecto "El Despertar del Avatar"

## Resumen del Proyecto

"El Despertar del Avatar" es una landing page para promocionar un evento de inmersión en hielo diseñado para ayudar a los participantes a superar el miedo, desarrollar resiliencia y conectar con su fuerza interior. La página está optimizada para conversiones y está diseñada para comunicar claramente el valor del evento.

## Tecnologías Utilizadas

- **Frontend**: Next.js 14 con App Router
- **Estilos**: Tailwind CSS con configuración personalizada
- **Formularios**: React Hook Form con validación Zod
- **Animaciones**: Framer Motion
- **Temporizador**: React Countdown
- **Iconos**: React Icons
- **SEO**: Next SEO

## Estructura del Proyecto

```
munayki-landing/
├── app/
│   ├── components/
│   │   ├── ui/ (componentes reutilizables)
│   │   ├── sections/ (secciones específicas de la página)
│   │   └── layout/ (componentes de layout)
│   ├── lib/ (funciones utilidad)
│   ├── hooks/ (custom hooks)
│   ├── types/ (definiciones de TypeScript)
│   ├── page.tsx (página principal)
│   └── layout.tsx (layout principal)
├── public/ (assets estáticos)
└── cursorrules/ (documentación)
```

## Componentes Principales

### Componentes UI

- **Button**: Botón personalizable con diferentes variantes y tamaños.

### Componentes de Sección

- **Hero**: Sección principal con video, contador regresivo y llamado a la acción.
- **TargetAudience**: Sección "¿Para Quién Es Esta Experiencia?"
- **Benefits**: Sección "¿Qué Vas a Vivir en Esta Experiencia?"
- **Environment**: Sección "El Entorno: Donde Sucede la Transformación"
- **Pricing**: Sección "Precio y Disponibilidad"
- **Testimonials**: Sección "Testimonios Reales"
- **FAQ**: Sección de preguntas frecuentes
- **Registration**: Formulario de registro y reserva

### Componentes de Layout

- **Header**: Barra de navegación superior
- **Footer**: Pie de página con información de contacto

## Guía de Estilos

### Colores

- **Colores Primarios**:
  - Deep Blue (#003366): Representa calma, resiliencia y claridad.
  - Ice White (#F5F9FF): Evoca la pureza y frescura del hielo.
  - Warm Orange (#FF6F3C): Agrega energía, urgencia y calidez emocional.

- **Colores Secundarios**:
  - Forest Green (#2E8B57): Refleja el entorno natural y el crecimiento.
  - Light Gray (#E5E5E5): Tono neutral para fondos y texto.

- **Colores de Acento**:
  - Gold (#FFD700): Simboliza transformación y valor.
  - Crimson (#DC143C): Agrega intensidad emocional y urgencia.

### Tipografía

- **Fuente principal**: Inter (importada de Google Fonts)
- **Títulos**: Tamaños variables según jerarquía, generalmente en colores Deep Blue o blanco
- **Texto**: Tamaño base, generalmente en Dark Grey o blanco dependiendo del fondo

## Formulario de Registro

El formulario de registro recolecta:
- Nombre completo
- Número de teléfono
- Correo electrónico
- Razón para participar en el evento

## SEO

La optimización SEO incluye:
- Metadatos para título y descripción 
- Etiquetas Open Graph para compartir en redes sociales
- Configuración para Twitter Cards
- Palabras clave relevantes
- Estructura semántica HTML5

## Pendientes y Trabajo Futuro

### Fase 1 (Actual)
- Implementación con instrucciones de pago manual

### Fase 2
- Integración de pasarela de pago para:
  - Nequi
  - Bancolombia
  - Daviplata
  - Pagos con tarjeta

## Guía de Mantenimiento

### Cómo actualizar el contenido

1. **Textos**: Modificar directamente en los componentes de sección correspondientes
2. **Imágenes**: Reemplazar en la carpeta `/public` manteniendo los mismos nombres de archivo
3. **Fecha del evento**: Actualizar la variable `eventDate` en el componente Hero

### Cómo añadir testimonios

Modificar el archivo que contiene los testimonios (por crear) siguiendo el formato establecido.

### Cómo actualizar preguntas frecuentes

Modificar el archivo que contiene las preguntas frecuentes (por crear) siguiendo el formato establecido. 