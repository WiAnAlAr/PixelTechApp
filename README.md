# PixelTech App

Una aplicación de comercio electrónico moderna y elegante especializada en la compra y venta de componentes para PC. Construida con Next.js 15 y tecnologías web modernas.

## 🖥️ Acerca del Proyecto

PixelTech es una plataforma de e-commerce que se enfoca específicamente en componentes de computadora, ofreciendo una experiencia de usuario intuitiva y moderna para entusiastas de la tecnología y constructores de PC.

### Características Principales

- **Catálogo Completo**: Amplia selección de componentes para PC incluyendo:

  - Procesadores (CPUs)
  - Tarjetas gráficas (GPUs)
  - Memorias RAM
  - Discos duros y SSDs
  - Tarjetas madre
  - Fuentes de poder
  - Gabinetes
  - Sistemas de refrigeración
  - Periféricos gaming

- **Interfaz Moderna**: Diseño responsive y atractivo con una experiencia de usuario optimizada
- **Sistema de Autenticación**: Registro e inicio de sesión seguro para usuarios
- **Búsqueda Avanzada**: Filtros inteligentes para encontrar componentes específicos
- **Carrito de Compras**: Gestión completa del proceso de compra

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 15.2.4
- **UI Library**: React 18
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **TypeScript**: Para un desarrollo type-safe
- **Authentication**: Sistema de autenticación personalizado

## 📁 Estructura del Proyecto

```
PixelTechApp/
├── app/                    # App Router de Next.js
│   ├── page.tsx           # Página de inicio
│   ├── auth/              # Sistema de autenticación
│   │   └── page.tsx       # Página de login/registro
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   ├── header.tsx        # Componente del header
│   └── theme-provider.tsx # Proveedor de temas
├── lib/                  # Utilidades y configuraciones
│   ├── auth.tsx         # Lógica de autenticación
│   └── utils.ts         # Utilidades generales
├── hooks/               # Custom React hooks
├── public/              # Recursos estáticos
└── styles/             # Archivos de estilos
```

## 🏠 Página de Inicio

La página principal (`app/page.tsx`) incluye:

### Hero Section

- **Mensaje Principal**: "El lugar donde tu PC cobra vida"
- **Call-to-Action**: Botones para explorar productos y ofertas especiales
- **Diseño Atractivo**: Layout responsive con elementos visuales modernos

### Secciones Destacadas

- **Productos Destacados**: Showcase de componentes populares
- **Categorías**: Navegación rápida por tipos de componentes
- **Ofertas Especiales**: Promociones y descuentos actuales
- **Testimonios**: Reseñas de clientes satisfechos

### Funcionalidades

- **Búsqueda Inteligente**: Barra de búsqueda prominente
- **Navegación Intuitiva**: Menú organizado por categorías
- **Responsive Design**: Optimizado para desktop, tablet y móvil

## 🔐 Sistema de Autenticación

La página de autenticación (`app/auth/page.tsx`) ofrece:

### Características de Seguridad

- **Registro de Usuarios**: Formulario completo con validación
- **Inicio de Sesión**: Autenticación segura
- **Validación en Tiempo Real**: Feedback inmediato al usuario
- **Manejo de Errores**: Mensajes claros de error

### Formularios Disponibles

1. **Registro** (`signup`):

   - Nombre
   - Apellido
   - Correo electrónico
   - Contraseña
   - Validación de campos obligatorios

2. **Inicio de Sesión** (`login`):
   - Correo electrónico
   - Contraseña
   - Opción "Recordar sesión"

### Experiencia de Usuario

- **Interfaz Tabbed**: Fácil cambio entre registro e inicio de sesión
- **Estados de Carga**: Indicadores visuales durante el proceso
- **Redirección Automática**: Navegación fluida post-autenticación

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

- `pnpm dev` - Ejecuta la aplicación en modo desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Ejecuta la aplicación en modo producción
- `pnpm lint` - Ejecuta el linter para revisar el código

## 🎨 Componentes UI

La aplicación utiliza una biblioteca completa de componentes UI basada en shadcn/ui:

- **Formularios**: Input, Label, Button, Checkbox, etc.
- **Navegación**: Tabs, Dropdown Menu, Navigation Menu
- **Feedback**: Toast, Alert, Dialog
- **Layout**: Card, Separator, Accordion
- **Data Display**: Table, Badge, Avatar

## 🔧 Configuración

### Tailwind CSS

Configurado con PostCSS para un desarrollo de estilos eficiente.

### TypeScript

Configuración estricta para garantizar calidad del código.

### Next.js

Utilizando App Router para una navegación moderna y optimizada.

## 🚦 Próximas Funcionalidades

- [ ] Carrito de compras completo
- [ ] Sistema de pagos integrado
- [ ] Panel de administración
- [ ] Reviews y ratings de productos
- [ ] Wishlist de usuarios
- [ ] Sistema de notificaciones
- [ ] Chat de soporte en vivo

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
