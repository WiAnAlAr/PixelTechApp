# PixelTech App

Una aplicación de comercio electrónico moderna y elegante especializada en la compra y venta de componentes para PC. Construida con Next.js 15 y tecnologías web modernas, incluyendo un completo panel de administración para la gestión de productos.

## 🖥️ Acerca del Proyecto

PixelTech es una plataforma de e-commerce que se enfoca específicamente en componentes de computadora, ofreciendo una experiencia de usuario intuitiva y moderna para entusiastas de la tecnología y constructores de PC. La aplicación incluye funcionalidades tanto para usuarios finales como para administradores.

### Características Implementadas

- **Página de Inicio Moderna**:

  - Hero section con mensaje principal "El lugar donde tu PC cobra vida"
  - **Carrusel de ofertas interactivo** con 6 productos destacados
  - Navegación fluida con botones de control y indicadores
  - Transiciones suaves y efectos visuales
  - Diseño responsive y moderno con colores cyan y grises

- **Catálogo Completo de Productos**:

  - Procesadores AMD (Ryzen 7 7800X3D, Ryzen 5 5500X3D, Ryzen 9 9950X3D)
  - Procesadores Intel (Core Ultra 9 285, Core Ultra 7, Core Ultra 5)
  - Tarjetas gráficas (AMD RX 9070 XT)
  - Sistemas de refrigeración líquida (Masterliquid 240L Core ARGB)
  - Laptops gaming (Acer Nitro con RTX 3050)
  - Periféricos gaming (Astro A50 X wireless headset)

- **Sistema de Autenticación Completo**:

  - Registro e inicio de sesión con formularios validados
  - **Roles de usuario**: Usuario estándar y Administrador
  - Usuarios de prueba predefinidos con contraseñas
  - Gestión de estado de autenticación con React Context
  - Protección de rutas según roles de usuario

- **Panel de Administración** (`/admin`):

  - **Dashboard de estadísticas** con métricas del negocio
  - **Creación de productos** con formulario completo
  - **Gestión de productos** (enlaces preparados)
  - **Administración de usuarios** (enlaces preparados)
  - **Reportes y estadísticas** (enlaces preparados)
  - Acceso restringido solo para usuarios administradores

- **Funcionalidad de Creación de Productos** (`/admin/create-product`):

  - **Subida de imágenes** con preview en tiempo real
  - **Formulario completo** con validación de campos
  - **Propiedades dinámicas** (agregar/eliminar campos personalizados)
  - **Categorización por tipo** (CPU, GPU, Motherboard, etc.)
  - **Gestión de inventario** (cantidad y disponibilidad)
  - **Estados personalizables** (nivel, estado del producto)

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

- **Interfaz Moderna y Consistente**:
  - Diseño responsive optimizado para desktop, tablet y móvil
  - Componentes UI consistentes basados en shadcn/ui
  - **Header con navegación inteligente** (diferentes opciones según rol)
  - **Footer actualizado** con logo oficial de PixelTech
  - Esquema de colores unificado en cyan para toda la aplicación
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
- **State Management**: React Context API + useState para carruseles
- **Image Handling**: Next.js Image component con optimización automática
- **File Upload**: FileReader API para preview de imágenes
- **Package Manager**: pnpm
- **Animations**: CSS Transitions para efectos suaves

## 📁 Estructura del Proyecto

```
PixelTechApp/
├── app/                    # App Router de Next.js
│   ├── page.tsx           # Página de inicio con hero y carrusel de ofertas
│   ├── layout.tsx         # Layout principal con metadata y providers
│   ├── loading.tsx        # Componente de loading
│   ├── globals.css        # Estilos globales
│   ├── auth/              # Sistema de autenticación
│   │   └── page.tsx       # Página de login/registro con tabs y usuarios demo
│   ├── admin/             # Panel de administración (solo admins)
│   │   ├── layout.tsx     # Layout con protección de rutas admin
│   │   ├── page.tsx       # Dashboard principal con estadísticas
│   │   └── create-product/ # Gestión de productos
│   │       └── page.tsx   # Formulario completo de creación
│   ├── explorar/          # Exploración de productos
│   │   └── page.tsx       # Página con filtros y búsqueda
│   └── products/          # Páginas de productos
│       └── [id]/          # Página dinámica de producto individual
│           └── page.tsx   # Detalles, specs y reseñas
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   ├── header.tsx        # Header con navegación inteligente según rol
│   ├── footer.tsx        # Footer con logo oficial de PixelTech
│   ├── theme-provider.tsx # Proveedor de temas
│   └── vender-button.tsx # Botón de vender con lógica de autenticación
├── lib/                  # Utilidades y configuraciones
│   ├── auth.tsx         # Context y lógica de autenticación con roles
│   ├── product-data.ts  # Datos mock de productos y categorías
│   └── utils.ts         # Utilidades generales
├── hooks/               # Custom React hooks
│   ├── use-mobile.ts    # Hook para detección móvil
│   └── use-toast.ts     # Hook para notificaciones (admin feedback)
├── public/              # Recursos estáticos
│   ├── PixelTech-Logo.png # Logo oficial de la marca
│   ├── amd-rx-9070-xt-graphics-card.jpg
│   ├── masterliquid-240l-rgb-liquid-cooler.jpg
│   ├── acer-nitro-gaming-laptop.png
│   ├── astro-a50-x-gaming-headset.webp
│   ├── AMD-Ryzen-7-7800X3D.jpg
│   ├── Intel-Core-Ultra-9-285.jpg
│   └── [6+ productos adicionales...]
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

### Sección de Ofertas Interactiva

- **Carrusel Avanzado**: Sistema de navegación con 6 productos en total
- **Productos Destacados**:
  - Masterliquid 240L Core ARGB ($425,000) - Refrigeración líquida
  - Portátil Gamer Acer Nitro ($4,430,000) - Gaming laptop
  - Astro A50 X Gaming Headset ($1,599,000) - Auriculares inalámbricos
  - AMD Ryzen 7 7800X3D ($2,850,000) - Procesador gaming de alta gama
  - AMD RX 9070 XT ($3,200,000) - Tarjeta gráfica para gaming 4K
  - Intel Core Ultra 9 285 ($2,100,000) - Procesador profesional
- **Navegación Fluida**:
  - Botones de control (← →) con estados disabled
  - Indicadores de posición con navegación directa
  - Muestra 4 productos simultáneamente
  - Navegación uno por uno de los productos restantes
- **Efectos Visuales**:
  - Transiciones suaves de 700ms con easing
  - Hover effects en cards con elevación y zoom
  - Escalado sutil de imágenes (110%) al hacer hover
  - Cambios de color dinámicos en títulos y precios

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

- **Usuario estándar**:

  - Email: `usuario@pixeltech.com`
  - Contraseña: `usuario123`
  - Permisos: Navegación, compras, perfil

- **Usuario administrador**:
  - Email: `admin@pixeltech.com`
  - Contraseña: `admin123`
  - Permisos: Todos los anteriores + Panel admin + Gestión de productos

## 👨‍💼 Panel de Administración

### Acceso y Seguridad

- **URL**: `/admin` (solo accesible para usuarios administradores)
- **Protección de rutas**: Middleware que verifica roles de usuario
- **Layout especializado**: Header y footer consistentes con protección integrada
- **Usuario admin de prueba**: `admin@pixeltech.com` / `admin123`

### Dashboard Principal (`/admin`)

- **Tarjetas de acceso rápido** con iconos y colores distintivos:
  - 🎯 **Crear Producto** (azul) - Acceso directo al formulario
  - 📦 **Gestionar Productos** (verde) - Administración de catálogo
  - 👥 **Usuarios** (morado) - Gestión de usuarios del sistema
  - 🛒 **Pedidos** (naranja) - Revisión de pedidos
  - 📊 **Reportes** (rojo) - Estadísticas y análisis
- **Estadísticas en tiempo real**:
  - Total de productos: 247
  - Usuarios registrados: 1,234
  - Pedidos pendientes: 18
  - Ventas del mes: $47,329

### Creación de Productos (`/admin/create-product`)

#### Características del Formulario

- **Subida de imágenes**:

  - Drag & drop interface con preview en tiempo real
  - Soporte para múltiples formatos de imagen
  - Botón de eliminación de imagen seleccionada
  - Área de preview responsiva

- **Campos principales**:
  - **Nombre** (requerido) - Título del producto
  - **Descripción** - Textarea expandible para detalles
  - **Tipo** - Dropdown con categorías predefinidas:
    - CPU, GPU, Motherboard, RAM, Almacenamiento
    - Refrigeración, Fuente de Poder, Case, Periféricos
  - **Cantidad** - Control numérico para inventario
  - **Disponibilidad** - Switch toggle para activar/desactivar

#### Propiedades Dinámicas

- **Sistema flexible** para agregar características personalizadas
- **Botones "Add"** para crear nuevos campos de propiedades
- **Campos de nombre y valor** editables individualmente
- **Eliminación** de propiedades con confirmación visual
- **Validación** en tiempo real de campos requeridos

#### Campos Adicionales

- **Nivel** - Campo personalizable para clasificación
- **Estado** - Información sobre condición del producto
- **Botón Create** - Procesamiento con estados de carga
- **Notificaciones** - Toast messages para feedback del usuario

#### Experiencia de Usuario

- **Validación en tiempo real** de campos obligatorios
- **Estados de carga** durante el procesamiento
- **Feedback visual** con notificaciones toast
- **Reset automático** del formulario tras creación exitosa
- **Colores consistentes** con la marca (cyan) en todos los botones

### Navegación Admin en Header

- **Menú desplegable específico** para administradores:
  - Indicador visual de rol (👨‍💼 Administrador)
  - Enlace directo a "Panel Admin"
  - Enlace directo a "Crear Producto"
  - Separadores visuales para organizar opciones

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

- **Forms**: Input, Label, Button, Checkbox, Tabs, Textarea, Select, Switch
- **Navigation**: Header con búsqueda, Footer con logo, Links contextuales
- **Feedback**: Toast notifications, Loading states, Progress indicators
- **Layout**: Card, Separator, Grid layouts, Responsive containers
- **Data Display**: Badge, Avatar, Product cards, Statistics cards
- **Interactive**: Dropdown menus, Search bars, Filters, Carousels
- **Admin**: Dashboard cards, Form builders, Image upload, Dynamic properties

### Componentes Personalizados

- **Header**: Navegación principal con búsqueda integrada y menús por rol
- **Footer**: Enlaces informativos con logo oficial de PixelTech
- **VenderButton**: Botón especializado con lógica de autenticación
- **ProductCard**: Componente reutilizable con efectos visuales
- **AdminLayout**: Layout protegido para rutas administrativas
- **CarouselOffers**: Carrusel con transiciones suaves y controles
- **ProductForm**: Formulario completo para creación de productos

## 🖼️ Recursos Multimedia

### Imágenes de Productos

- **AMD Ryzen Series**: Procesadores de diferentes gamas
- **Intel Core Ultra**: Nueva generación de procesadores Intel
- **Tarjetas Gráficas**: AMD RX 9070 XT y otras GPUs
- **Periféricos**: Auriculares, sistemas de refrigeración
- **Laptops**: Equipos gaming completos

### Assets de Marca

- **PixelTech Logo**: Logotipo oficial usado en header y footer
- **Placeholders**: Imágenes por defecto para productos y usuarios
- **Productos Gaming**: 6+ imágenes de alta calidad de componentes PC
- **Iconografía**: Lucide icons para navegación y acciones

## 🔧 Configuración

### Tailwind CSS

Configurado con PostCSS para un desarrollo de estilos eficiente.

### TypeScript

Configuración estricta para garantizar calidad del código.

### Next.js

Utilizando App Router para una navegación moderna y optimizada.

## 🚦 Funcionalidades Implementadas vs. Próximas

### ✅ Características Actuales

- [x] Página de inicio con hero section y carrusel de ofertas interactivo
- [x] Catálogo de productos con búsqueda y filtros avanzados
- [x] Páginas detalladas de productos con especificaciones completas
- [x] Sistema de reseñas y calificaciones de usuarios
- [x] Autenticación completa con roles (usuario/administrador)
- [x] **Panel de administración** con dashboard de estadísticas
- [x] **Creación de productos** con formulario completo y subida de imágenes
- [x] **Protección de rutas** según roles de usuario
- [x] Navegación responsive y moderna con efectos visuales
- [x] **Carrusel de ofertas** con transiciones suaves y navegación fluida
- [x] **6 productos de muestra** con imágenes reales y especificaciones
- [x] Header con búsqueda integrada y menús contextuales
- [x] Footer con logo oficial de PixelTech
- [x] Sistema de filtrado por categorías y precios
- [x] **Esquema de colores unificado** en cyan para toda la aplicación
- [x] **Estados de carga y feedback visual** en todas las interacciones

### 🔄 Próximas Funcionalidades

- [ ] Gestión completa de productos existentes (editar/eliminar)
- [ ] Sistema de carrito de compras y checkout
- [ ] Procesamiento de pagos integrado
- [ ] Gestión de pedidos y tracking
- [ ] Sistema de notificaciones en tiempo real
- [ ] Panel de reportes y analytics avanzado
- [ ] Gestión de usuarios desde el panel admin
- [ ] Sistema de cupones y descuentos
- [ ] Integración con APIs de inventario
- [ ] Optimización SEO y metadata dinámico

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
