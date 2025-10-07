"use client";

import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function VenderButton() {
  const { user } = useAuth();
  const router = useRouter();

  const handleVenderClick = () => {
    if (!user) {
      // Si no hay usuario logueado, redirigir a la página de inicio de sesión
      router.push("/auth");
    } else {
      // Si hay usuario logueado, redirigir a la página de vender (puedes crear esta página después)
      // Por ahora, solo mostramos un alert
      alert("Funcionalidad de vender en desarrollo");
      // router.push("/vender");
    }
  };

  return (
    <Button
      variant="outline"
      className="border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 bg-transparent"
      onClick={handleVenderClick}
    >
      Vender
    </Button>
  );
}
