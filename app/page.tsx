"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VenderButton } from "@/components/vender-button";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista completa de productos en oferta
  const offerProducts = [
    {
      id: 2,
      name: "Masterliquid 240L Core ARGB",
      price: "$425,000",
      description: "Refrigeración Líquida Cooler Master",
      image: "/masterliquid-240l-rgb-liquid-cooler.jpg",
    },
    {
      id: 3,
      name: "Portátil Gamer Acer Nitro",
      price: "$4,430,000",
      description:
        'Portátil Gamer Acer Nitro Lite 16" Intel Core i7-13620H RTX 3050 8GB RAM 16GB M.2 512GB',
      image: "/acer-nitro-gaming-laptop.png",
    },
    {
      id: 4,
      name: "Astro A50 X",
      price: "$1,599,000",
      description: "Diadema Gamer Inalámbrica",
      image: "/astro-a50-x-gaming-headset.webp",
    },
    {
      id: 5,
      name: "AMD Ryzen 7 7800X3D",
      price: "$2,850,000",
      description: "Procesador Gaming de Alto Rendimiento con 3D V-Cache",
      image: "/AMD-Ryzen-7-7800X3D.jpg",
    },
    {
      id: 6,
      name: "AMD RX 9070 XT",
      price: "$3,200,000",
      description: "Tarjeta Gráfica de Nueva Generación para Gaming 4K",
      image: "/amd-rx-9070-xt-graphics-card.jpg",
    },
    {
      id: 7,
      name: "Intel Core Ultra 9 285",
      price: "$2,100,000",
      description: "Procesador de Alta Eficiencia para Profesionales",
      image: "/Intel-Core-Ultra-9-285.jpg",
    },
  ];

  const itemsToShow = 4;
  const maxSlide = Math.max(0, offerProducts.length - itemsToShow);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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

          {/* Right Content - Featured Product */}
          <div className="relative">
            <div className="bg-cyan-500 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute inset-0 opacity-20">
                {Array.from({ length: 80 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${(i % 10) * 10 + 5}%`,
                      top: `${Math.floor(i / 10) * 12.5 + 5}%`,
                    }}
                  />
                ))}
              </div>

              {/* Product Card */}
              <Card className="relative z-10 bg-white">
                <CardContent className="p-6">
                  <Link href="/products/1">
                    <div className="aspect-square relative mb-4">
                      <img
                        src="/amd-rx-9070-xt-graphics-card.jpg"
                        alt="RX 9070 XT"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">RX 9070 XT</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">
                      $4,000,000
                    </p>
                    <p className="text-sm text-gray-600">
                      Tarjeta De Video Amd Asus Tuf Gaming Rx 9070 16gb Oc
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-cyan-500">Ofertas %</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-cyan-500 border-cyan-500 bg-transparent"
            >
              Ver mas
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-cyan-500 hover:bg-cyan-50 transition-all duration-200 disabled:opacity-30"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-cyan-500 hover:bg-cyan-50 transition-all duration-200 disabled:opacity-30"
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Contenedor del carrusel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)`,
              width: `${(offerProducts.length * 100) / itemsToShow}%`,
            }}
          >
            {offerProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / offerProducts.length}%` }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <Link href={`/products/${product.id}`}>
                      <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg overflow-hidden group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors duration-200">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-bold text-cyan-600 mb-2">
                        {product.price}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de posición */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentSlide
                    ? "bg-cyan-500 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
