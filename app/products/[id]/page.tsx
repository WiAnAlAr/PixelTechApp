"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Datos mock de productos (en un caso real vendría de la API)
const productData = [
  {
    id: "1",
    name: "AMD Ryzen 7 7800X3D",
    price: 1399,
    originalPrice: 1549,
    category: "Procesadores",
    images: [
      "/amd-rx-9070-xt-graphics-card.jpg",
      "/amd-rx-9070-xt-graphics-card.jpg",
      "/amd-rx-9070-xt-graphics-card.jpg",
    ],
    description:
      "Experiencia de juego de primera línea con la tecnología de memoria de los procesadores de alta calidad de ASUS Dual que potencian las mejores del mercado. Obtén aún más rendimiento con este procesador de vanguardia que acelera cada proyecto desde...",
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
  {
    id: "2",
    name: "Masterliquid 240L Core ARGB",
    price: 425,
    originalPrice: 500,
    category: "Refrigeración",
    images: [
      "/masterliquid-240l-rgb-liquid-cooler.jpg",
      "/masterliquid-240l-rgb-liquid-cooler.jpg",
      "/masterliquid-240l-rgb-liquid-cooler.jpg",
    ],
    description:
      "Sistema de refrigeración líquida de alto rendimiento con iluminación RGB personalizable. Ideal para mantener temperaturas óptimas en procesadores de alta gama durante sesiones intensas de gaming y trabajo profesional.",
    specs: {
      model: "240L Core ARGB",
      series: "MasterLiquid",
      generation: "Refrigeración líquida, Coolers de alta gama",
      segment: "Gaming Desktop",
      productSupport: "Sí",
      productId: "ML-240L-ARGB",
      productIdentification: "CL240ARGB001",
    },
    features: {
      delivery: { icon: "🚚", text: "Envío Gratis", detail: "En más de" },
      warranty: { icon: "📅", text: "2 años", detail: "Garantía" },
      payment: { icon: "💳", text: "Hasta", detail: "12 cuotas" },
    },
  },
  {
    id: "3",
    name: "Portátil Gamer Acer Nitro",
    price: 4430,
    originalPrice: 4800,
    category: "Laptops",
    images: [
      "/acer-nitro-gaming-laptop.png",
      "/acer-nitro-gaming-laptop.png",
      "/acer-nitro-gaming-laptop.png",
    ],
    description:
      "Laptop gaming de alto rendimiento con Intel Core i7 y RTX 3050. Perfecta para gaming y trabajo profesional con pantalla de 16 pulgadas y almacenamiento M.2 ultra rápido.",
    specs: {
      model: "Nitro Lite 16",
      series: "Acer Nitro",
      generation: "Laptops gaming, Portátiles de alta gama",
      segment: "Gaming Mobile",
      productSupport: "Sí",
      productId: "AC-NITRO-16-I7",
      productIdentification: "ACNITRO16RTX3050",
    },
    features: {
      delivery: { icon: "🚚", text: "Envío Gratis", detail: "En más de" },
      warranty: { icon: "📅", text: "1 año", detail: "Garantía" },
      payment: { icon: "💳", text: "Hasta", detail: "18 cuotas" },
    },
  },
  {
    id: "4",
    name: "Astro A50 X Gaming Headset",
    price: 1599,
    originalPrice: 1800,
    category: "Audio",
    images: [
      "/astro-a50-x-gaming-headset.webp",
      "/astro-a50-x-gaming-headset.webp",
      "/astro-a50-x-gaming-headset.webp",
    ],
    description:
      "Diadema gaming inalámbrica premium con audio espacial y cancelación de ruido. Compatible con PC, PlayStation y Xbox para una experiencia de audio inmersiva.",
    specs: {
      model: "A50 X",
      series: "Astro Gaming",
      generation: "Audio gaming, Headsets inalámbricos",
      segment: "Premium Audio",
      productSupport: "Sí",
      productId: "AST-A50X-WL",
      productIdentification: "ASTROA50XGAMING",
    },
    features: {
      delivery: { icon: "🚚", text: "Envío Gratis", detail: "En más de" },
      warranty: { icon: "📅", text: "1 año", detail: "Garantía" },
      payment: { icon: "💳", text: "Hasta", detail: "12 cuotas" },
    },
  },
];

const reviews = [
  {
    id: 1,
    user: "Grace Carey",
    rating: 5,
    date: "9 hours ago",
    text: "Nuestra Ryzen 7 7800X3D está funcionando muy bien hasta ahora y es muy silenciosa en juegos gaming. Su tecnología de 3D V-Cache ha sido lo que más me convence si no estás limitado por el presupuesto, tanto en AMD Ryzen 7 7800X3D como en otros de su línea como a diferencia de muchas de nuestras experiencias, tanto en Windows 11 como en Microsoft Flight Simulator, mientras aguardan a Ryzen 5800X3D más.",
    images: [
      "/amd-rx-9070-xt-graphics-card.jpg",
      "/amd-rx-9070-xt-graphics-card.jpg",
    ],
  },
  {
    id: 2,
    user: "Ramind Richards",
    rating: 5,
    date: "9 hours ago",
    text: "Absolutamente excelente chip gaming fácil de configurar Es producto T-PRONTO con buen performante fácil por moderno buen para ordenador. Con mejoras del entorno recientes instalé tanto en laptop de entretenimiento de la imagen copia sale diferentes.",
  },
  {
    id: 3,
    user: "Davy King",
    rating: 5,
    date: "9 hours ago",
    text: "Este AMD Ryzen 7 7800X3D realmente es lo mejor chip performance en ventajas a su calificación. Una entrega rápida de 2,5GB en lo tanto más inteligente que antes especificado en los juegos de FPS esencial, siendo mejor de Frames utilizando a una HDD3D asequible para juegos estratégicos. La temperatura está en 62 °C y el ruido con temperatura de 49. Que operación de juegos de TPS bajo optimización funcional.",
  },
];

const relatedProducts = [
  {
    id: "2",
    name: "Masterliquid 240L Core ARGB",
    price: 425,
    image: "/masterliquid-240l-rgb-liquid-cooler.jpg",
  },
  {
    id: "3",
    name: "Portátil Gamer Acer Nitro",
    price: 4430,
    image: "/acer-nitro-gaming-laptop.png",
  },
  {
    id: "4",
    name: "Astro A50 X Gaming Headset",
    price: 1599,
    image: "/astro-a50-x-gaming-headset.webp",
  },
  {
    id: "1",
    name: "AMD Ryzen 7 7800X3D",
    price: 1399,
    image: "/amd-rx-9070-xt-graphics-card.jpg",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Encontrar el producto por ID
  const product = productData.find((p) => p.id === params.id);

  // Si no se encuentra el producto, mostrar un mensaje de error
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Producto no encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              El producto que buscas no existe o ha sido eliminado.
            </p>
            <Link href="/" className="text-cyan-500 hover:text-cyan-600">
              Volver al inicio
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const averageRating = 4.8;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-cyan-500">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/explorar" className="hover:text-cyan-500">
            Explorar
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-contain p-8"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-cyan-500"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold">{averageRating}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= averageRating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({totalReviews})</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                <div className="text-sm font-medium">Envío Gratis</div>
                <div className="text-xs text-gray-600">1-2 días</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                <div className="text-sm font-medium">Garantía</div>
                <div className="text-xs text-gray-600">1 año</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                <div className="text-sm font-medium">Disponible</div>
                <div className="text-xs text-gray-600">En stock</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium h-12">
                  Lista Deseos
                </Button>
                <Button className="flex-1 bg-black hover:bg-gray-800 text-white font-medium h-12">
                  Agregar Carrito
                </Button>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Detalles</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <span className="font-medium">Modelo</span>
                  <span>{product.specs.model}</span>
                </div>
                <div className="grid grid-cols-2 p-4 bg-gray-50">
                  <span className="font-medium">Serie</span>
                  <span>{product.specs.series}</span>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <span className="font-medium">Generación</span>
                  <span>{product.specs.generation}</span>
                </div>
                <div className="grid grid-cols-2 p-4 bg-gray-50">
                  <span className="font-medium">Segmento</span>
                  <span>{product.specs.segment}</span>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <span className="font-medium">
                    Soporte AMD PRO Technologies
                  </span>
                  <span>{product.specs.productSupport}</span>
                </div>
                <div className="grid grid-cols-2 p-4 bg-gray-50">
                  <span className="font-medium">ID del producto</span>
                  <span>{product.specs.productId}</span>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <span className="font-medium">
                    Número de identificación del producto
                  </span>
                  <span>{product.specs.productIdentification}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Reseñas</h2>
            <Button variant="outline">Ver Más</Button>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= averageRating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                {totalReviews} reseñas
              </div>
            </div>

            <div className="flex-1 space-y-2">
              {[
                { stars: 5, count: 156, percentage: 80 },
                { stars: 4, count: 31, percentage: 15 },
                { stars: 3, count: 12, percentage: 3 },
                { stars: 2, count: 4, percentage: 1 },
                { stars: 1, count: 2, percentage: 1 },
              ].map((rating) => (
                <div key={rating.stars} className="flex items-center gap-2">
                  <span className="text-sm w-16">Excelente</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">
                    {rating.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{review.user}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{review.text}</p>
                    {review.images && (
                      <div className="flex gap-2">
                        {review.images.map((image, idx) => (
                          <div
                            key={idx}
                            className="w-16 h-16 bg-gray-100 rounded"
                          >
                            <Image
                              src={image}
                              alt={`Review image ${idx + 1}`}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4">
                  <Link href={`/products/${relatedProduct.id}`}>
                    <div className="aspect-square bg-gray-50 rounded-lg mb-4">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold">${relatedProduct.price}</p>
                  </Link>
                  <Button className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600">
                    Agregar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
