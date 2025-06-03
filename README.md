# Pandora Experience - Landing Page

[![Deployment](https://github.com/PandoraExperience/landing/actions/workflows/ci-chakana.yml/badge.svg)](https://github.com/PandoraExperience/landing/actions/workflows/ci-chakana.yml)

Una landing page moderna y convertidora para el evento "Pandora Experience", una experiencia transformadora de inmersión en hielo.

## Descripción del Proyecto

Esta landing page está diseñada para comunicar efectivamente el valor del evento "Pandora Experience", abordar objeciones potenciales y maximizar las conversiones. 

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

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form con Zod para validación
- Framer Motion para animaciones
- React Countdown para el contador regresivo
- Optimizaciones SEO con Next SEO
- MailerLite para suscripción
- Wompi para pagos
- GitHub Actions para despliegue
- Docker para entorno de desarrollo
- CTA para WhatsApp

## Configuración del Entorno de Desarrollo

### Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn

### Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/PandoraExperience/landing.git
cd landing
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
  /variables - Variables de configuración
  /public - Activos estáticos
  /app
    /page.tsx - Página principal
    /layout.tsx - Layout raíz
```

## Personalización

### Colores

Los colores de marca se definen en `global.css` y se usan en `tailwind.config.ts`:

### Contenido

El contenido principal se puede modificar en los componentes de sección ubicados en `/app/components/sections/`.

### Variables

Las variables se definen en `variables.ts` y se usan en todo el proyecto.

## Mantenimiento

- **Actualizaciones de dependencias**: Ejecutar `npm outdated` para verificar dependencias desactualizadas, y `npm update` para actualizarlas.
- **Análisis de rendimiento**: Usar herramientas como Lighthouse para monitorear y mejorar el rendimiento.

## Licencia

Todos los derechos reservados © 2025
