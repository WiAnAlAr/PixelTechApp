# PixelTech App

Una aplicación de comercio electrónico moderna y elegante especializada en la compra y venta de componentes para PC. Construida con Next.js 15 y tecnologías web modernas.

## 🖥️ Acerca del Proyecto

PixelTech es una plataforma de e-commerce que se enfoca específicamente en componentes de computadora, ofreciendo una experiencia de usuario intuitiva y moderna para entusiastas de la tecnología y constructores de PC.

### Características Implementadas

- **Página de Inicio Atractiva**:

  - Hero section con mensaje principal "El lugar donde tu PC cobra vida"
  - Sección de ofertas con productos destacados
  - Diseño responsive y moderno con colores cyan y grises

- **Catálogo de Productos**:

  - Procesadores AMD (Ryzen 7 7800X3D, Ryzen 5 5500X3D, Ryzen 9 9950X3D)
  - Tarjetas gráficas (AMD RX 9070 XT)
  - Sistemas de refrigeración líquida (Masterliquid 240L Core ARGB)
  - Laptops gaming (Acer Nitro)
  - Periféricos gaming (Astro A50 X)
  - Procesadores Intel (Core Ultra series)

- **Exploración de Productos** (`/explorar`):

  - Barra de búsqueda funcional con filtros en tiempo real
  - Filtros por categoría, rango de precios
  - Ordenamiento por relevancia, precio, etc.
  - Vista de grid responsiva de productos

- **Páginas Detalladas de Productos** (`/products/[id]`):

  - Imágenes de productos de alta calidad
  - Especificaciones técnicas detalladas
  - Sistema de reseñas de usuarios con calificaciones
  - Información de vendedor y garantía
  - Precios actualizados con descuentos

- **Sistema de Autenticación**:

  - Registro e inicio de sesión con formularios validados
  - Usuarios de prueba predefinidos
  - Gestión de estado de autenticación
  - Protección de rutas y personalización de experiencia

- **Interfaz Moderna**:
  - Diseño responsive optimizado para desktop, tablet y móvil
  - Componentes UI consistentes basados en shadcn/ui
  - Header con navegación y búsqueda integrada
  - Footer informativo

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 15.2.4 con App Router
- **UI Library**: React 18
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **TypeScript**: Para un desarrollo type-safe
- **Authentication**: Sistema de autenticación personalizado con React Context
- **State Management**: React Context API
- **Carousel**: Embla Carousel
- **Package Manager**: pnpm

## 📁 Estructura del Proyecto

```
PixelTechApp/
├── app/                    # App Router de Next.js
│   ├── page.tsx           # Página de inicio con hero y ofertas
│   ├── layout.tsx         # Layout principal con metadata
│   ├── loading.tsx        # Componente de loading
│   ├── globals.css        # Estilos globales
│   ├── auth/              # Sistema de autenticación
│   │   └── page.tsx       # Página de login/registro con tabs
│   ├── explorar/          # Exploración de productos
│   │   └── page.tsx       # Página con filtros y búsqueda
│   └── products/          # Páginas de productos
│       └── [id]/          # Página dinámica de producto individual
│           └── page.tsx   # Detalles, specs y reseñas
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   ├── header.tsx        # Header con navegación y búsqueda
│   ├── footer.tsx        # Footer informativo
│   ├── theme-provider.tsx # Proveedor de temas
│   └── vender-button.tsx # Botón de vender productos
├── lib/                  # Utilidades y configuraciones
│   ├── auth.tsx         # Context y lógica de autenticación
│   ├── product-data.ts  # Datos mock de productos y categorías
│   └── utils.ts         # Utilidades generales
├── hooks/               # Custom React hooks
│   ├── use-mobile.ts    # Hook para detección móvil
│   └── use-toast.ts     # Hook para notificaciones
├── public/              # Recursos estáticos
│   ├── PixelTech-Logo.png
│   ├── amd-rx-9070-xt-graphics-card.jpg
│   ├── masterliquid-240l-rgb-liquid-cooler.jpg
│   ├── acer-nitro-gaming-laptop.png
│   ├── astro-a50-x-gaming-headset.webp
│   └── [otros productos...]
└── styles/             # Archivos de estilos adicionales
```

## 🏠 Página de Inicio

La página principal (`app/page.tsx`) incluye:

### Hero Section

- **Mensaje Principal**: "El lugar donde tu PC cobra vida"
- **Descripción**: "PixelTech: conecta, actualiza, evoluciona, compra y vende tus componentes de PC al instante"
- **Call-to-Action**: Botones para "Buscar" (redirige a `/explorar`) y "Vender"
- **Producto Destacado**: Tarjeta con AMD RX 9070 XT como producto principal
- **Diseño Atractivo**: Layout responsive con elementos visuales en cyan y decoraciones geométricas

### Sección de Ofertas

- **Título**: "Ofertas %" destacado en cyan
- **Productos Destacados**:
  - Masterliquid 240L Core ARGB ($425,000)
  - Portátil Gamer Acer Nitro ($4,430,000)
  - Astro A50 X Gaming Headset ($1,599,000)
- **Navegación**: Controles de carrusel y botón "Ver más"
- **Cards Interactivas**: Hover effects y enlaces directos a productos

### Funcionalidades

- **Navegación Fluida**: Enlaces a páginas de productos individuales
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Header Integrado**: Búsqueda y navegación consistente
- **Footer Informativo**: Enlaces y información adicional

## � Página de Exploración

La página de exploración (`app/explorar/page.tsx`) ofrece:

### Funcionalidades de Búsqueda

- **Barra de Búsqueda**: Búsqueda en tiempo real por nombre, categoría y descripción
- **Parámetros URL**: Soporte para búsquedas desde la URL con parámetro `q`
- **Filtros Avanzados**:
  - Filtro por categorías (Procesadores, Tarjetas Gráficas, etc.)
  - Filtro por rango de precios (mínimo y máximo)
  - Ordenamiento por relevancia, precio, etc.

### Categorías Disponibles

- **Procesadores**: AMD Ryzen series e Intel Core Ultra
- **Tarjetas Gráficas**: AMD RX series
- **Refrigeración**: Sistemas de refrigeración líquida
- **Laptops**: Laptops gaming
- **Periféricos**: Auriculares gaming y accesorios

### Interfaz de Usuario

- **Grid Responsivo**: Vista adaptable para diferentes dispositivos
- **Cards de Producto**: Información completa con imágenes, precios y descripciones
- **Estados Interactivos**: Hover effects y navegación fluida
- **Sidebar de Filtros**: Panel lateral con todas las opciones de filtrado

## 📱 Páginas de Productos

Las páginas individuales de productos (`app/products/[id]/page.tsx`) incluyen:

### Información Detallada

- **Galería de Imágenes**: Múltiples vistas del producto
- **Especificaciones Técnicas**: Detalles completos del hardware
- **Información de Precio**: Precio actual y descuentos
- **Descripción Completa**: Características y beneficios del producto

### Sistema de Reseñas

- **Calificaciones por Estrellas**: Sistema de 1-5 estrellas
- **Reseñas Detalladas**: Comentarios de usuarios verificados
- **Fechas de Reseñas**: Información temporal de las opiniones
- **Imágenes de Usuarios**: Fotos subidas por compradores
- **Usuarios Reales**: Nombres y avatars de reviewers

### Productos Disponibles

1. **AMD Ryzen 7 7800X3D** - Procesador gaming de alta gama
2. **Masterliquid 240L Core ARGB** - Sistema de refrigeración líquida
3. **Acer Nitro Gaming Laptop** - Laptop gaming con RTX 3050
4. **Astro A50 X** - Auriculares gaming inalámbricos

## 🔐 Sistema de Autenticación

La página de autenticación (`app/auth/page.tsx`) ofrece:

### Características de Seguridad

- **Registro de Usuarios**: Formulario completo con validación en tiempo real
- **Inicio de Sesión**: Autenticación segura con usuarios de prueba
- **Gestión de Estado**: Context API para manejo global de autenticación
- **Validación de Formularios**: Verificación de campos obligatorios
- **Manejo de Errores**: Mensajes claros y específicos

### Usuarios de Prueba

- `usuario@pixeltech.com` - Usuario estándar
- `admin@pixeltech.com` - Usuario administrador
- Contraseña: cualquier contraseña válida

### Formularios Disponibles

1. **Registro** (`signup`):

   - Nombre y apellido
   - Correo electrónico
   - Contraseña
   - Validación de campos obligatorios

2. **Inicio de Sesión** (`login`):
   - Correo electrónico
   - Contraseña
   - Mensajes de error informativos

### Experiencia de Usuario

- **Interfaz con Tabs**: Cambio fluido entre registro e inicio de sesión
- **Estados de Carga**: Indicadores visuales durante el proceso
- **Redirección Automática**: Navegación a home después del login exitoso
- **Integración con Header**: Estado de autenticación visible en toda la app

## 🛠️ Instalación y Configuración

### Prerequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**:

```bash
git clone <repository-url>
cd PixelTechApp
```

2. **Instalar dependencias**:

```bash
pnpm install
```

3. **Ejecutar en modo desarrollo**:

```bash
pnpm dev
```

4. **Abrir en el navegador**:

```
http://localhost:3000
```

## 📝 Scripts Disponibles

- `pnpm dev` - Ejecuta la aplicación en modo desarrollo (puerto 3000)
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Ejecuta la aplicación en modo producción
- `pnpm lint` - Ejecuta el linter para revisar el código

## 🎨 Componentes UI

La aplicación utiliza una biblioteca completa de componentes UI basada en shadcn/ui:

### Componentes Implementados

- **Forms**: Input, Label, Button, Checkbox, Tabs
- **Navigation**: Header con búsqueda, Footer, Links
- **Feedback**: Toast notifications, Loading states
- **Layout**: Card, Separator, Grid layouts
- **Data Display**: Badge, Avatar, Product cards
- **Interactive**: Dropdown menus, Search bars, Filters

### Componentes Personalizados

- **Header**: Navegación principal con búsqueda integrada y menú de usuario
- **Footer**: Enlaces informativos y branding
- **VenderButton**: Botón especializado para vender productos
- **ProductCard**: Componente reutilizable para mostrar productos

## 🖼️ Recursos Multimedia

### Imágenes de Productos

- **AMD Ryzen Series**: Procesadores de diferentes gamas
- **Intel Core Ultra**: Nueva generación de procesadores Intel
- **Tarjetas Gráficas**: AMD RX 9070 XT y otras GPUs
- **Periféricos**: Auriculares, sistemas de refrigeración
- **Laptops**: Equipos gaming completos

### Assets de Marca

- **PixelTech Logo**: Logotipo principal de la marca
- **Placeholders**: Imágenes por defecto para productos y usuarios

## 🔧 Configuración

### Tailwind CSS

Configurado con PostCSS para un desarrollo de estilos eficiente.

### TypeScript

Configuración estricta para garantizar calidad del código.

### Next.js

Utilizando App Router para una navegación moderna y optimizada.

## 🚦 Funcionalidades Implementadas vs. Próximas

### ✅ Características Actuales

- [x] Página de inicio con hero section y ofertas
- [x] Catálogo de productos con búsqueda y filtros
- [x] Páginas detalladas de productos con especificaciones
- [x] Sistema de reseñas y calificaciones
- [x] Autenticación de usuarios (registro/login)
- [x] Navegación responsive y moderna
- [x] Datos de productos con imágenes reales
- [x] Header con búsqueda integrada
- [x] Footer informativo
- [x] Sistema de filtrado por categorías y precios

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para preguntas o soporte, contacta al equipo de desarrollo.

---

**PixelTech App** - Donde tu PC cobra vida 🖥️✨
