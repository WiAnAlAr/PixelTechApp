"use client";

import { useAuth } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Users, ShoppingCart, BarChart3 } from "lucide-react";
import Link from "next/link";

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
    {
      title: "Pedidos",
      description: "Revisar y gestionar pedidos",
      icon: ShoppingCart,
      href: "/admin/orders",
      color: "bg-orange-500",
    },
    {
      title: "Reportes",
      description: "Ver estadísticas y reportes",
      icon: BarChart3,
      href: "/admin/reports",
      color: "bg-red-500",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <Card
              key={card.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={card.href}>
                  <Button className="w-full">Acceder</Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Estadísticas rápidas */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Estadísticas Rápidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Productos</CardDescription>
              <CardTitle className="text-3xl">247</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Usuarios Registrados</CardDescription>
              <CardTitle className="text-3xl">1,234</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pedidos Pendientes</CardDescription>
              <CardTitle className="text-3xl">18</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Ventas del Mes</CardDescription>
              <CardTitle className="text-3xl">$47,329</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
