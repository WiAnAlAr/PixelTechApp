import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
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
                <Link href="/envios" className="text-white/80 hover:text-white">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/pagos" className="text-white/80 hover:text-white">
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 7.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7h-2.5v6.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V16h-2.5A8.5 8.5 0 011 7.5v-3A.5.5 0 011.5 4h3a.5.5 0 01.5.5V7h2.5V4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V7H14V4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
