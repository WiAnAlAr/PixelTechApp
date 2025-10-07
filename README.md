# Manual de Usuario - PixelTechApp

## Índice

1. [Introducción](#introducción)
2. [Instalación y Ejecución](#instalación-y-ejecución)
3. [Navegación General](#navegación-general)
4. [Funciones de Usuario](#funciones-de-usuario)
5. [Funciones de Administrador](#funciones-de-administrador)
6. [Configuración y Personalización](#configuración-y-personalización)

---

## Introducción

**PixelTech** es una plataforma e-commerce especializada en componentes de PC y tecnología gaming. Permite a los usuarios explorar, comprar y vender componentes de computadoras con una interfaz moderna y funcional.

### Características principales:

- Catálogo completo de componentes PC
- Sistema de autenticación de usuarios
- Panel administrativo para gestión de productos
- Búsqueda avanzada y filtros
- Diseño responsive y moderno

---

## Instalación y Ejecución

### Prerrequisitos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **pnpm** (gestor de paquetes recomendado)
- **Git** para clonar el repositorio

### Pasos para la instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/WiAnAlAr/PixelTechApp.git
   cd PixelTechApp
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   pnpm dev
   ```

4. **Abrir en el navegador**

   La aplicación estará disponible en: [http://localhost:3000](http://localhost:3000)

### Comandos disponibles

- `pnpm dev` - Ejecuta la aplicación en modo desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Ejecuta la aplicación en modo producción
- `pnpm lint` - Ejecuta el linter para verificar el código

### Usuarios de prueba

Para probar las funcionalidades de la aplicación, utiliza las siguientes credenciales:

**Usuario Normal:**

- Email: `usuario@pixeltech.com`
- Contraseña: `usuario123`

**Administrador:**

- Email: `admin@pixeltech.com`
- Contraseña: `admin123`

### Estructura de desarrollo

```
PixelTechApp/
├── app/                    # Páginas y rutas de Next.js
├── components/             # Componentes reutilizables
├── lib/                    # Utilidades y configuraciones
├── public/                 # Archivos estáticos
├── styles/                 # Estilos globales
├── package.json            # Dependencias y scripts
└── README.md              # Este archivo
```

### Tecnologías utilizadas

- **Next.js 15.2.4** - Framework React para aplicaciones web
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Radix UI** - Componentes UI accesibles y personalizables
- **Lucide React** - Biblioteca de iconos
- **React Hook Form** - Manejo de formularios

---

## Navegación General

### 1. **Acceso a la Página Principal**

- **Ubicación**: Página de inicio (`/`)
- **Descripción**: Muestra productos destacados y ofertas especiales
- **Funcionalidad**: Carrusel de productos en oferta, acceso rápido a categorías

**Fragmento de código:**

```tsx
// app/page.tsx - Hero Section
<section className="container mx-auto px-4 py-16 md:py-24">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        <span className="text-cyan-500">El lugar donde</span>{" "}
        <span className="text-gray-900">tu PC</span>
        <br />
        <span className="text-gray-900">cobra</span>{" "}
        <span className="text-cyan-500">vida</span>
      </h1>
      <p className="text-gray-600 text-lg">
        PixelTech: conecta, actualiza, evoluciona, compra y vende tus
        componentes de PC al instante
      </p>
      <div className="flex gap-4">
        <Link href="/explorar">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
            Buscar
          </Button>
        </Link>
        <VenderButton />
      </div>
    </div>
  </div>
</section>
```

### 2. **Búsqueda de Productos**

- **Ubicación**: Barra de búsqueda en el header
- **Instrucciones**:
  1. Escribir el término de búsqueda en la barra superior
  2. Presionar Enter o hacer click en el ícono de búsqueda
  3. Se redirige automáticamente a la página de exploración con resultados

**Fragmento de código:**

```tsx
// components/header.tsx - Search Bar
const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    router.push(`/explorar?q=${encodeURIComponent(searchQuery.trim())}`);
  } else {
    router.push("/explorar");
  }
};

<div className="flex-1 max-w-md">
  <form onSubmit={handleSearch} className="relative">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    <Input
      type="search"
      placeholder="Buscar productos..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyPress={handleKeyPress}
      className="pl-10 bg-gray-50 border-gray-200"
    />
  </form>
</div>;
```

### 3. **Navegación por el Header**

- **Elementos disponibles**:
  - Logo (redirige al inicio)
  - Barra de búsqueda
  - Enlaces de navegación: Explorar, Ofertas, Vender, Contacto
  - Área de autenticación/perfil de usuario

**Fragmento de código:**

```tsx
// components/header.tsx - Navigation
<nav className="hidden md:flex items-center gap-6">
  <Link
    href="/explorar"
    className="text-cyan-500 font-medium hover:text-cyan-600"
  >
    Explorar
  </Link>
  <Link href="/ofertas" className="text-gray-600 hover:text-gray-900">
    Ofertas
  </Link>
  <Link href="/vender" className="text-gray-600 hover:text-gray-900">
    Vender
  </Link>
  <Link href="/contacto" className="text-gray-600 hover:text-gray-900">
    Contacto
  </Link>
</nav>
```

### 4. **Visualización de Productos Destacados**

- **Ubicación**: Página principal
- **Funcionalidades**:
  - Carrusel navegable con flechas izquierda/derecha
  - Información básica: nombre, precio, descripción
  - Enlaces directos a páginas de producto

**Fragmento de código:**

```tsx
// app/page.tsx - Carrusel de productos
const nextSlide = () => {
  setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
};

const visibleProducts = offerProducts.slice(
  currentSlide,
  currentSlide + itemsToShow
);

// Renderizado del carrusel
<div className="relative">
  <Button
    variant="outline"
    size="icon"
    onClick={prevSlide}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
  >
    <ChevronLeft className="w-4 h-4" />
  </Button>
  <Button
    variant="outline"
    size="icon"
    onClick={nextSlide}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
  >
    <ChevronRight className="w-4 h-4" />
  </Button>
</div>;
```

### 5. **Footer Informativo**

- **Contenido**: Enlaces adicionales, información de contacto y políticas
- **Ubicación**: Parte inferior de todas las páginas

**Fragmento de código:**

```tsx
// components/footer.tsx
<Footer />
```

---

## Funciones de Usuario

### 6. **Registro e Inicio de Sesión**

- **Ubicación**: `/auth`
- **Usuarios de prueba disponibles**:
  - Usuario normal: `usuario@pixeltech.com` / `usuario123`
  - Administrador: `admin@pixeltech.com` / `admin123`
- **Proceso**:
  1. Navegar a la página de autenticación
  2. Ingresar credenciales válidas
  3. El sistema autentica y redirige según el rol

**Fragmento de código:**

```tsx
// app/auth/page.tsx - Login Handler
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setIsSubmitting(true);

  try {
    const success = await login(loginData.email, loginData.password);
    if (success) {
      router.push("/");
    } else {
      setError(
        "Credenciales incorrectas. Usuarios de prueba: usuario@pixeltech.com / admin@pixeltech.com"
      );
    }
  } catch (err) {
    setError("Error al iniciar sesión");
  } finally {
    setIsSubmitting(false);
  }
};

// lib/auth.tsx - Login Function
const login = async (email: string, password: string): Promise<boolean> => {
  setIsLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validPassword = dummyCredentials[email];
  if (validPassword && validPassword === password) {
    const user = dummyUsers.find((u) => u.email === email);
    if (user) {
      setUser(user);
      localStorage.setItem("pixeltech_user", JSON.stringify(user));
      setIsLoading(false);
      return true;
    }
  }
  setIsLoading(false);
  return false;
};
```

### 7. **Exploración de Productos**

- **Ubicación**: `/explorar`
- **Funcionalidades**:
  - Vista de grid de todos los productos disponibles
  - Filtros por categoría, precio y búsqueda
  - Ordenamiento por relevancia, precio, etc.
  - Búsqueda en tiempo real

**Fragmento de código:**

```tsx
// app/explorar/page.tsx - Product Filtering
const filteredProducts = useMemo(() => {
  let filtered = productData;

  // Filtro por búsqueda
  if (searchQuery) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filtro por categoría
  if (selectedCategories.length > 0) {
    filtered = filtered.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  // Filtro por precio
  if (priceRange.min) {
    filtered = filtered.filter(
      (product) => product.price >= parseInt(priceRange.min)
    );
  }

  return filtered;
}, [searchQuery, selectedCategories, priceRange]);
```

### 8. **Filtrado por Categorías**

- **Categorías disponibles**:
  - Procesadores
  - Refrigeración
  - Laptops
  - Audio
  - Tarjetas Gráficas
- **Instrucciones**:
  1. En la página de exploración, seleccionar categorías del sidebar
  2. Los productos se filtran automáticamente
  3. Se pueden seleccionar múltiples categorías

**Fragmento de código:**

```tsx
// app/explorar/page.tsx - Category Filter
{
  categories.map((category, index) => {
    const count = productData.filter((p) => p.category === category).length;
    return (
      <div key={category} className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={category}
            checked={selectedCategories.includes(category)}
            onCheckedChange={(checked) =>
              handleCategoryChange(category, checked as boolean)
            }
          />
          <label
            htmlFor={category}
            className="text-sm text-gray-700 cursor-pointer"
          >
            {category}
          </label>
        </div>
        <span className="text-xs text-gray-500">({count})</span>
      </div>
    );
  });
}

const handleCategoryChange = (category: string, checked: boolean) => {
  if (checked) {
    setSelectedCategories([...selectedCategories, category]);
  } else {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  }
};
```

### 9. **Filtrado por Rango de Precios**

- **Ubicación**: Sidebar en página de exploración
- **Proceso**:
  1. Ingresar precio mínimo y/o máximo
  2. Los productos se filtran en tiempo real
  3. Precios en formato numérico (miles de pesos colombianos)

**Fragmento de código:**

```tsx
// app/explorar/page.tsx - Price Range Filter
<div>
  <h3 className="font-medium text-gray-900 mb-3">Rango de Precio</h3>
  <div className="space-y-2">
    <Input
      type="number"
      placeholder="Precio mínimo"
      value={priceRange.min}
      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
      className="h-10"
    />
    <Input
      type="number"
      placeholder="Precio máximo"
      value={priceRange.max}
      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
      className="h-10"
    />
  </div>
</div>
```

### 10. **Visualización Detallada de Productos**

- **Ubicación**: `/products/[id]`
- **Información mostrada**:
  - Galería de imágenes del producto
  - Especificaciones técnicas detalladas
  - Precio actual y precio original (si aplica)
  - Descripción completa
  - Características de entrega, garantía y pago

**Fragmento de código:**

```tsx
// lib/product-data.ts - Product Data Structure
export const productData = [
  {
    id: "1",
    name: "AMD Ryzen 7 7800X3D",
    price: 1399,
    originalPrice: 1549,
    category: "Procesadores",
    images: [
      "/AMD-Ryzen-7-7800X3D.jpg",
      "/AMD-Ryzen-7-7800X3D.jpg",
      "/AMD-Ryzen-7-7800X3D.jpg",
    ],
    description:
      "Experiencia de juego de primera línea con la tecnología de memoria...",
    specs: {
      model: "Ryzen 7 7800X3D",
      series: "Ryzen 7000 Series",
      generation: "Computadoras de escritorio, Procesadores de alta",
      segment: "Enthusiast Desktop",
      productSupport: "No",
      productId: "NM-100000XXMHX",
      productIdentification: "YD7800X3XXAFLH",
    },
    features: {
      delivery: { icon: "🚚", text: "Envío Gratis", detail: "En más de" },
      warranty: { icon: "📅", text: "1 año", detail: "Garantía" },
      payment: { icon: "💳", text: "Hasta", detail: "12 cuotas" },
    },
  },
];
```

### 11. **Gestión de Favoritos**

- **Funcionalidad**: Marcar productos como favoritos
- **Ubicación**: Ícono de corazón en las tarjetas de producto
- **Estado**: Visual feedback cuando un producto está marcado como favorito

**Fragmento de código:**

```tsx
// Componente de producto con favoritos
<Card className="group relative overflow-hidden hover:shadow-lg transition-all">
  <CardContent className="p-0">
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
      >
        <Heart className="w-4 h-4" />
      </Button>
    </div>
  </CardContent>
</Card>
```

### 12. **Búsqueda Avanzada**

- **Ubicación**: Página de exploración
- **Capacidades**:
  - Búsqueda por nombre de producto
  - Búsqueda por categoría
  - Búsqueda por descripción
  - Combinación de filtros múltiples

**Fragmento de código:**

```tsx
// app/explorar/page.tsx - Advanced Search
const searchParams = useSearchParams();
const initialQuery = searchParams.get("q") || "";
const [searchQuery, setSearchQuery] = useState(initialQuery);

// Búsqueda en múltiples campos
const filteredProducts = useMemo(() => {
  let filtered = productData;

  if (searchQuery) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return filtered;
}, [searchQuery]);
```

### 13. **Ordenamiento de Resultados**

- **Opciones disponibles**:
  - Por relevancia
  - Por precio (menor a mayor)
  - Por precio (mayor a menor)
  - Por popularidad
  - Por novedades

**Fragmento de código:**

```tsx
// app/explorar/page.tsx - Sorting
const [sortBy, setSortBy] = useState("relevancia");

const sortedProducts = useMemo(() => {
  let sorted = [...filteredProducts];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}, [filteredProducts, sortBy]);

<Select value={sortBy} onValueChange={setSortBy}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Ordenar por" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="relevancia">Relevancia</SelectItem>
    <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
    <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
    <SelectItem value="name">Nombre A-Z</SelectItem>
  </SelectContent>
</Select>;
```

### 14. **Visualización Responsive**

- **Funcionalidad**: Adaptación automática a diferentes tamaños de pantalla
- **Dispositivos soportados**: Desktop, tablet, móvil
- **Características**: Navigation menu adaptativo, grid responsive

**Fragmento de código:**

```tsx
// Responsive Grid Layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {sortedProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

// Responsive Navigation
<nav className="hidden md:flex items-center gap-6">
  {/* Desktop navigation */}
</nav>
```

### 15. **Cierre de Sesión**

- **Ubicación**: Menú desplegable del perfil de usuario
- **Proceso**:
  1. Click en el avatar/nombre de usuario
  2. Seleccionar "Cerrar Sesión"
  3. Confirmación automática y redirección

**Fragmento de código:**

```tsx
// components/header.tsx - Logout
{
  user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <Image
            src="/placeholder-user.jpg"
            alt={user.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden md:block">{user.name}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={logout}>
          <LogOut className="w-4 h-4 mr-2" />
          Cerrar Sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    // Login button for non-authenticated users
    <Link href="/auth">
      <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
        Iniciar Sesión
      </Button>
    </Link>
  );
}
```

---

## Funciones de Administrador

### 16. **Acceso al Panel de Administración**

- **Ubicación**: `/admin`
- **Requisitos**: Rol de administrador
- **Funcionalidades**: Dashboard con acceso a todas las herramientas administrativas

**Fragmento de código:**

```tsx
// app/admin/page.tsx - Admin Dashboard
export default function AdminDashboard() {
  const { user } = useAuth();

  const adminCards = [
    {
      title: "Crear Producto",
      description: "Agregar nuevos productos al catálogo",
      icon: Package,
      href: "/admin/create-product",
      color: "bg-blue-500",
    },
    {
      title: "Gestionar Productos",
      description: "Editar y administrar productos existentes",
      icon: Package,
      href: "/admin/products",
      color: "bg-green-500",
    },
    {
      title: "Usuarios",
      description: "Administrar usuarios del sistema",
      icon: Users,
      href: "/admin/users",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Panel de Administración
        </h1>
        <p className="text-gray-600 mt-2">
          Bienvenido, {user?.name}. Gestiona tu tienda desde aquí.
        </p>
      </div>
    </div>
  );
}
```

### 17. **Creación de Nuevos Productos**

- **Ubicación**: `/admin/create-product`
- **Proceso**:
  1. Subir imagen del producto
  2. Completar información básica (nombre, descripción, tipo)
  3. Establecer cantidad disponible
  4. Agregar propiedades personalizadas
  5. Configurar nivel y estado del producto
  6. Guardar producto

**Fragmento de código:**

```tsx
// app/admin/create-product/page.tsx - Product Creation
const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    setFormData({ ...formData, image: file });

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Producto creado",
      description: "El producto se ha creado exitosamente.",
    });

    // Resetear formulario
    setFormData({
      image: null,
      name: "",
      description: "",
      type: "",
      quantity: "",
      available: true,
    });
    setProperties([]);
    setImagePreview(null);
  } catch (error) {
    toast({
      title: "Error",
      description: "Hubo un error al crear el producto.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

// Formulario de creación
<form onSubmit={handleSubmit} className="space-y-6">
  <div className="space-y-2">
    <Label htmlFor="name" className="text-sm font-medium">
      Nombre *
    </Label>
    <Input
      id="name"
      type="text"
      placeholder="AORUS GeForce RTX™ 5090 MASTER 32G"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      required
    />
  </div>
</form>;
```

### 18. **Gestión de Productos Existentes**

- **Ubicación**: Panel de administración
- **Funcionalidades**:
  - Editar productos existentes
  - Actualizar precios e inventario
  - Activar/desactivar productos
  - Eliminar productos del catálogo

**Fragmento de código:**

```tsx
// Componente de gestión de productos
const ProductManagement = () => {
  const [products, setProducts] = useState(productData);

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...updates } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => updateProduct(product.id, {})}>
                  Editar
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => deleteProduct(product.id)}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
```

### 19. **Administración de Usuarios**

- **Funcionalidad**: Gestión completa de cuentas de usuario
- **Capacidades**:
  - Ver lista de usuarios registrados
  - Modificar roles de usuario
  - Activar/desactivar cuentas
  - Gestionar permisos

**Fragmento de código:**

```tsx
// lib/auth.tsx - User Management
const dummyUsers: User[] = [
  {
    id: "1",
    name: "Usuario Normal",
    email: "usuario@pixeltech.com",
    role: "user",
  },
  {
    id: "2",
    name: "Administrador",
    email: "admin@pixeltech.com",
    role: "admin",
  },
];

// Componente de administración de usuarios
const UserManagement = () => {
  const [users, setUsers] = useState(dummyUsers);

  const updateUserRole = (userId: string, newRole: UserRole) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <Select
                value={user.role}
                onValueChange={(role: UserRole) =>
                  updateUserRole(user.id, role)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">Usuario</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
```

### 20. **Gestión de Pedidos**

- **Ubicación**: Sección de pedidos en admin
- **Funcionalidades**:
  - Visualizar todos los pedidos
  - Actualizar estados de pedidos
  - Gestionar procesos de envío
  - Generar facturas

**Fragmento de código:**

```tsx
// Gestión de pedidos
interface Order {
  id: string;
  userId: string;
  products: Product[];
  status: "pending" | "processing" | "shipped" | "delivered";
  total: number;
  createdAt: Date;
}

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Pedido #{order.id}</h3>
                <p className="text-gray-600">Total: ${order.total}</p>
              </div>
              <Select
                value={order.status}
                onValueChange={(status) => updateOrderStatus(order.id, status)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pendiente</SelectItem>
                  <SelectItem value="processing">Procesando</SelectItem>
                  <SelectItem value="shipped">Enviado</SelectItem>
                  <SelectItem value="delivered">Entregado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
```

### 21. **Sistema de Reportes**

- **Funcionalidades**:
  - Estadísticas de ventas
  - Reportes de inventario
  - Análisis de usuario
  - Métricas de rendimiento

**Fragmento de código:**

```tsx
// Dashboard de estadísticas
const ReportsSystem = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    revenue: 0,
  });

  useEffect(() => {
    // Simular carga de estadísticas
    setStats({
      totalProducts: productData.length,
      totalUsers: dummyUsers.length,
      totalOrders: 45,
      revenue: 15420000,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Productos</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalProducts}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Usuarios</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalUsers}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
```

### 22. **Subida de Imágenes de Productos**

- **Ubicación**: Formulario de creación de productos
- **Formatos soportados**: JPG, PNG, WebP
- **Proceso**:
  1. Click en área de subida
  2. Seleccionar archivo desde dispositivo
  3. Vista previa automática
  4. Validación de formato y tamaño

**Fragmento de código:**

```tsx
// app/admin/create-product/page.tsx - Image Upload
const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    setFormData({ ...formData, image: file });

    // Crear preview de la imagen
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }
};

// UI de subida de imagen
<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
  {imagePreview ? (
    <div className="relative w-full h-64">
      <Image src={imagePreview} alt="Preview" fill className="object-contain" />
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="absolute top-2 right-2"
        onClick={() => {
          setImagePreview(null);
          setFormData({ ...formData, image: null });
        }}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  ) : (
    <div className="space-y-4">
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div>
        <Label htmlFor="image-upload" className="cursor-pointer">
          <span className="text-blue-600 hover:text-blue-500">Subir</span>
          <span className="text-gray-500 ml-2">o Eliminar</span>
        </Label>
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  )}
</div>;
```

### 23. **Gestión de Propiedades de Productos**

- **Funcionalidad**: Agregar características técnicas personalizadas
- **Proceso**:
  1. Click en "Agregar Propiedad"
  2. Definir nombre de la propiedad
  3. Asignar valor correspondiente
  4. Posibilidad de agregar múltiples propiedades
  5. Eliminar propiedades individuales

**Fragmento de código:**

```tsx
// app/admin/create-product/page.tsx - Property Management
interface ProductProperty {
  id: string;
  name: string;
  value: string;
}

const addProperty = () => {
  const newProperty: ProductProperty = {
    id: Date.now().toString(),
    name: "",
    value: "",
  };
  setProperties([...properties, newProperty]);
};

const updateProperty = (id: string, field: "name" | "value", value: string) => {
  setProperties(
    properties.map((prop) =>
      prop.id === id ? { ...prop, [field]: value } : prop
    )
  );
};

const removeProperty = (id: string) => {
  setProperties(properties.filter((prop) => prop.id !== id));
};

// UI de propiedades
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label className="text-sm font-medium">Propiedades</Label>
    <Button type="button" variant="outline" onClick={addProperty}>
      <Plus className="h-4 w-4 mr-2" />
      Agregar Propiedad
    </Button>
  </div>

  {properties.map((property) => (
    <div key={property.id} className="flex gap-2">
      <Input
        placeholder="Nombre de la propiedad"
        value={property.name}
        onChange={(e) => updateProperty(property.id, "name", e.target.value)}
      />
      <Input
        placeholder="Valor"
        value={property.value}
        onChange={(e) => updateProperty(property.id, "value", e.target.value)}
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => removeProperty(property.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  ))}
</div>;
```

### 24. **Control de Inventario**

- **Funcionalidades**:
  - Establecer cantidades disponibles
  - Toggle de disponibilidad (disponible/no disponible)
  - Alertas de stock bajo
  - Historial de movimientos de inventario

**Fragmento de código:**

```tsx
// Control de inventario
const InventoryControl = () => {
  const [inventory, setInventory] = useState({
    quantity: "",
    available: true,
    lowStockAlert: 5,
  });

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="quantity" className="text-sm font-medium">
          Cantidad disponible *
        </Label>
        <Input
          id="quantity"
          type="number"
          placeholder="100"
          value={inventory.quantity}
          onChange={(e) =>
            setInventory({ ...inventory, quantity: e.target.value })
          }
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="available"
          checked={inventory.available}
          onCheckedChange={(checked) =>
            setInventory({ ...inventory, available: checked })
          }
        />
        <Label htmlFor="available" className="text-sm font-medium">
          Disponible para la venta
        </Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lowStock" className="text-sm font-medium">
          Alerta de stock bajo
        </Label>
        <Input
          id="lowStock"
          type="number"
          placeholder="5"
          value={inventory.lowStockAlert}
          onChange={(e) =>
            setInventory({
              ...inventory,
              lowStockAlert: parseInt(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
};
```

### 25. **Dashboard de Estadísticas**

- **Ubicación**: Panel principal de administración
- **Métricas mostradas**:
  - Resumen de productos totales
  - Estadísticas de usuarios activos
  - Ventas del período
  - Gráficos de rendimiento

**Fragmento de código:**

```tsx
// app/admin/page.tsx - Statistics Dashboard
const StatsDashboard = () => {
  const [dashboardStats, setDashboardStats] = useState({
    totalProducts: productData.length,
    totalUsers: dummyUsers.length,
    pendingOrders: 12,
    totalRevenue: 25480000,
  });

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Estadísticas Rápidas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Productos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {dashboardStats.totalProducts}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Usuarios</p>
                <p className="text-2xl font-bold text-gray-900">
                  {dashboardStats.totalUsers}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Pedidos Pendientes
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {dashboardStats.pendingOrders}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Ingresos</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${dashboardStats.totalRevenue.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
```

---

## Configuración y Personalización

### Configuración del Sistema

#### Autenticación

- Sistema de autenticación basado en Context API de React
- Gestión de roles (usuario/administrador)
- Persistencia de sesión en localStorage
- Protección de rutas según roles

#### Gestión de Estado

- Context API para autenticación global
- Estado local para formularios y UI
- Hooks personalizados para funcionalidades específicas

#### Temas y Estilos

- Soporte para temas claro/oscuro (implementación base con ThemeProvider)
- Componentes UI consistentes basados en Radix UI
- Estilos responsivos con Tailwind CSS
- Iconografía con Lucide React

#### Base de Datos y Contenido

- Datos mock almacenados en `product-data.ts`
- Categorías de productos predefinidas
- Sistema de imágenes estáticas en carpeta `public`

### Consideraciones Técnicas

- **Framework**: Next.js 15.2.4 con App Router
- **Estilos**: Tailwind CSS + Radix UI
- **Iconos**: Lucide React
- **Tipografía**: Geist Sans/Mono
- **Responsive**: Diseño mobile-first

### Estructura de Archivos Clave

```
app/
├── layout.tsx          # Layout principal con providers
├── page.tsx           # Página de inicio con productos destacados
├── admin/             # Rutas administrativas protegidas
├── auth/              # Sistema de autenticación
├── explorar/          # Catálogo y búsqueda de productos
└── products/[id]/     # Páginas detalladas de productos

components/
├── header.tsx         # Navegación principal y búsqueda
├── footer.tsx         # Footer informativo
├── vender-button.tsx  # Componente de acción "Vender"
└── ui/               # Componentes de interfaz reutilizables

lib/
├── auth.tsx          # Context y hooks de autenticación
├── product-data.ts   # Datos de productos y categorías
└── utils.ts          # Utilidades generales
```

---
