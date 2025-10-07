"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { productData } from "@/lib/product-data";

const reviewsData = {
  "1": [
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
      date: "2 days ago",
      text: "Absolutamente excelente chip gaming fácil de configurar. Es producto T-PRONTO con buen rendimiento, fácil por moderno buen para ordenador. Con mejoras del entorno recientes instalé tanto en laptop de entretenimiento.",
    },
    {
      id: 3,
      user: "Davy King",
      rating: 4,
      date: "1 week ago",
      text: "Este AMD Ryzen 7 7800X3D realmente es lo mejor chip performance en ventajas a su calificación. Una entrega rápida y rendimiento excelente en juegos de FPS. La temperatura está en 62 °C y el ruido es mínimo.",
    },
  ],
  "2": [
    {
      id: 1,
      user: "Carlos Mendez",
      rating: 5,
      date: "1 day ago",
      text: "Excelente sistema de refrigeración líquida. Las temperaturas de mi CPU bajaron significativamente y la iluminación RGB se ve increíble. Fácil instalación y muy silencioso.",
      images: ["/masterliquid-240l-rgb-liquid-cooler.jpg"],
    },
    {
      id: 2,
      user: "Ana Rodriguez",
      rating: 4,
      date: "3 days ago",
      text: "Muy buen cooler, mantiene mi Ryzen 7 a temperaturas perfectas incluso en gaming intenso. La bomba es silenciosa y los RGB son personalizables.",
    },
    {
      id: 3,
      user: "Miguel Torres",
      rating: 5,
      date: "1 week ago",
      text: "Perfecto para overclocking. Mi procesador se mantiene estable a 4.8GHz sin problemas de temperatura. La calidad de construcción es excelente.",
    },
  ],
  "3": [
    {
      id: 1,
      user: "Sofia Martinez",
      rating: 5,
      date: "2 hours ago",
      text: "Esta laptop es increíble para gaming. Corre todos mis juegos favoritos en configuraciones altas sin problemas. La pantalla de 16 pulgadas es perfecta y la RTX 3050 funciona muy bien.",
      images: ["/acer-nitro-gaming-laptop.png"],
    },
    {
      id: 2,
      user: "Diego Vargas",
      rating: 4,
      date: "5 days ago",
      text: "Muy buena relación calidad-precio. El rendimiento es excelente para trabajo y gaming. La batería dura decentemente y el diseño es atractivo.",
    },
    {
      id: 3,
      user: "Laura Jimenez",
      rating: 5,
      date: "2 weeks ago",
      text: "Perfecta para estudiante de diseño gráfico. Maneja software pesado sin problemas y los juegos corren muy fluidos. Altamente recomendada.",
    },
  ],
  "4": [
    {
      id: 1,
      user: "Roberto Silva",
      rating: 5,
      date: "6 hours ago",
      text: "Los mejores auriculares gaming que he tenido. El audio espacial es impresionante y la comodidad para sesiones largas es excepcional. La calidad de construcción es premium.",
      images: ["/astro-a50-x-gaming-headset.webp"],
    },
    {
      id: 2,
      user: "Patricia Morales",
      rating: 4,
      date: "1 day ago",
      text: "Excelente calidad de audio y micrófono. La conexión inalámbrica es estable y la batería dura muchas horas. Un poco caros pero valen la pena.",
    },
    {
      id: 3,
      user: "Fernando Lopez",
      rating: 5,
      date: "4 days ago",
      text: "Increíbles para gaming competitivo. Puedo escuchar todos los detalles en FPS y la cancelación de ruido funciona perfectamente. Muy recomendados.",
    },
  ],
};

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
  params: Promise<{ id: string }>;
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Unwrap the params Promise using React.use()
  const { id } = use(params);

  // Encontrar el producto por ID
  const product = productData.find((p) => p.id === id);

  // Obtener las reseñas específicas del producto
  const reviews = reviewsData[id as keyof typeof reviewsData] || [];

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

  // Calcular rating promedio basado en las reseñas del producto
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;
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
                  <span className="text-2xl font-bold">
                    {averageRating > 0 ? averageRating.toFixed(1) : "N/A"}
                  </span>
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
          {totalReviews > 0 ? (
            <div className="flex items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">
                  {averageRating.toFixed(1)}
                </div>
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
                {[5, 4, 3, 2, 1].map((starCount) => {
                  const count = reviews.filter(
                    (r) => r.rating === starCount
                  ).length;
                  const percentage =
                    totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                  const ratingLabel =
                    starCount === 5
                      ? "Excelente"
                      : starCount === 4
                      ? "Muy bueno"
                      : starCount === 3
                      ? "Bueno"
                      : starCount === 2
                      ? "Regular"
                      : "Malo";

                  return (
                    <div key={starCount} className="flex items-center gap-2">
                      <span className="text-sm w-16">{ratingLabel}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">
                No hay reseñas disponibles
              </div>
              <div className="text-sm text-gray-400">
                Sé el primero en escribir una reseña para este producto
              </div>
            </div>
          )}

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
