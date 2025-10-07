import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomePage() {
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
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
                Buscar
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 bg-transparent"
              >
                Vender
              </Button>
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
            <Button variant="ghost" size="icon" className="text-gray-400">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Link href="/products/2">
                <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg">
                  <img
                    src="/masterliquid-240l-rgb-liquid-cooler.jpg"
                    alt="Masterliquid 240L Core ARGB"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Masterliquid 240L Core ARGB
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  $425,000
                </p>
                <p className="text-sm text-gray-600">
                  Refrigeración Líquida Cooler Master
                </p>
              </Link>
            </CardContent>
          </Card>

          {/* Product 2 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Link href="/products/3">
                <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg">
                  <img
                    src="/acer-nitro-gaming-laptop.png"
                    alt="Portátil Gamer Acer Nitro"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Portátil Gamer Acer Nitro
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  $4,430,000
                </p>
                <p className="text-sm text-gray-600">
                  Portátil Gamer Acer Nitro Lite 16" Intel Core i7-13620H RTX
                  3050 8GB RAM 16GB M.2 512GB
                </p>
              </Link>
            </CardContent>
          </Card>

          {/* Product 3 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Link href="/products/4">
                <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg">
                  <img
                    src="/astro-a50-x-gaming-headset.webp"
                    alt="Astro A50 X"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Astro A50 X</h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  $1,599,000
                </p>
                <p className="text-sm text-gray-600">
                  Diadema Gamer Inalámbrica
                </p>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
