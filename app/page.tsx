import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";

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
              <p className="text-2xl font-bold text-gray-900 mb-2">$425,000</p>
              <p className="text-sm text-gray-600">
                Refrigeración Líquida Cooler Master
              </p>
            </CardContent>
          </Card>

          {/* Product 2 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg">
                <img
                  src="/acer-nitro-gaming-laptop.jpg"
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
                Portátil Gamer Acer Nitro Lite 16" Intel Core i7-13620H RTX 3050
                8GB RAM 16GB M.2 512GB
              </p>
            </CardContent>
          </Card>

          {/* Product 3 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg">
                <img
                  src="/astro-a50-x-gaming-headset.jpg"
                  alt="Astro A50 X"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Astro A50 X</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">
                $1,599,000
              </p>
              <p className="text-sm text-gray-600">Diadema Gamer Inalámbrica</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d7a8a] text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Logo */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-lg">Pixel</span>
                  <span className="font-bold text-lg">Tech</span>
                </div>
              </div>
            </div>

            {/* Compañía */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/nosotros"
                    className="text-white/80 hover:text-white"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos"
                    className="text-white/80 hover:text-white"
                  >
                    Términos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datos-personales"
                    className="text-white/80 hover:text-white"
                  >
                    Datos Personales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentos"
                    className="text-white/80 hover:text-white"
                  >
                    Documentos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Soporte */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-white/80 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/como-comprar"
                    className="text-white/80 hover:text-white"
                  >
                    Como Comprar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/envios"
                    className="text-white/80 hover:text-white"
                  >
                    Envíos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pagos"
                    className="text-white/80 hover:text-white"
                  >
                    Pagos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/como-vender"
                    className="text-white/80 hover:text-white"
                  >
                    Como Vender
                  </Link>
                </li>
              </ul>
            </div>

            {/* Otros */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Otros</h3>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-orange-400">
                Quieres Saber mas...
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Suscríbete para más información de nuestras ofertas
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-white shrink-0">
                  Suscribirme
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <select className="bg-transparent border border-white/20 rounded px-3 py-1 text-sm">
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>
            <p className="text-sm text-white/60">
              © 2025 Brand, Inc. · Privacy · Terms · Sitemap
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/60 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 7.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7h-2.5v6.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V16h-2.5A8.5 8.5 0 011 7.5v-3A.5.5 0 011.5 4h3a.5.5 0 01.5.5V7h2.5V4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V7H14V4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
