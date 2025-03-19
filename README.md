# El Despertar del Avatar - Landing Page

Una landing page moderna y convertidora para el evento "El Despertar del Avatar", una experiencia transformadora de inmersión en hielo.

## Descripción del Proyecto

Esta landing page está diseñada para comunicar efectivamente el valor del evento "El Despertar del Avatar", abordar objeciones potenciales y maximizar las conversiones. 

El sitio incluye:
- Hero section con video y contador regresivo
- Secciones de público objetivo
- Descripción de la experiencia
- Entorno donde se realiza
- Precio y disponibilidad
- Testimonios
- Preguntas frecuentes
- Formulario de registro

## Tecnologías Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form con Zod para validación
- Framer Motion para animaciones
- React Countdown para el contador regresivo
- Optimizaciones SEO con Next SEO

## Configuración del Entorno de Desarrollo

### Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn

### Instalación

1. Clonar el repositorio
```bash
git clone [repo-url]
cd munayki-landing
```

2. Instalar dependencias
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo
```bash
npm run dev
# o
yarn dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## Estructura del Proyecto

```
/app
  /components
    /ui - Componentes de UI reutilizables
    /sections - Secciones específicas de la página
    /layout - Componentes de layout (header, footer)
  /lib - Funciones de utilidad
  /hooks - Custom React hooks
  /types - Definiciones de tipos TypeScript
  /public - Activos estáticos
  /app
    /page.tsx - Página principal
    /layout.tsx - Layout raíz
```

## Personalización

### Colores

Los colores de marca se definen en `tailwind.config.js`:

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

### Contenido

El contenido principal se puede modificar en los componentes de sección ubicados en `/app/components/sections/`.

## Mantenimiento

- **Actualizaciones de dependencias**: Ejecutar `npm outdated` para verificar dependencias desactualizadas, y `npm update` para actualizarlas.
- **Análisis de rendimiento**: Usar herramientas como Lighthouse para monitorear y mejorar el rendimiento.

## Licencia

Todos los derechos reservados © 2024
