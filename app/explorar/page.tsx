"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ChevronDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { productData, categories } from "@/lib/product-data";

export default function ExplorarPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("relevancia");

  // Filtrar productos
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
    if (priceRange.max) {
      filtered = filtered.filter(
        (product) => product.price <= parseInt(priceRange.max)
      );
    }

    // Ordenamiento
    switch (sortBy) {
      case "precio-menor":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "precio-mayor":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "nombre":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // relevancia - mantener orden original
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategories, priceRange, sortBy]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Search */}
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Components Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">Componentes</h3>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                <div className="space-y-2">
                  {categories.map((category, index) => {
                    const count = productData.filter(
                      (p) => p.category === category
                    ).length;
                    return (
                      <div
                        key={category}
                        className="flex items-center justify-between"
                      >
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
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Rango de Precio
                </h3>
                <div className="space-y-2">
                  <Input
                    placeholder="Mín"
                    type="number"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, min: e.target.value })
                    }
                    className="text-sm"
                  />
                  <Input
                    placeholder="Máx"
                    type="number"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, max: e.target.value })
                    }
                    className="text-sm"
                  />
                </div>
              </div>

              {/* Accessories, PC Escritorio, etc. - Collapsed sections */}
              {[
                "Accesorios",
                "PC Escritorio",
                "Portátiles",
                "Escritorios",
                "Sillas",
              ].map((section) => (
                <div key={section}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">{section}</h3>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header with product count and sort */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {searchQuery
                    ? `Resultados para "${searchQuery}"`
                    : "Explorar"}
                </h1>
                <span className="text-gray-600">
                  Productos:{" "}
                  <span className="font-medium">{filteredProducts.length}</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Relevancia</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                  <option value="relevancia">Relevancia</option>
                  <option value="precio-menor">Precio: Menor a Mayor</option>
                  <option value="precio-mayor">Precio: Mayor a Menor</option>
                  <option value="nombre">Nombre A-Z</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow duration-200"
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      {/* Wishlist heart */}
                      <button className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                        <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>

                      {/* Product Image */}
                      <Link href={`/products/${product.id}`}>
                        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                      </Link>
                    </div>

                    <div className="space-y-2">
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-medium text-sm text-gray-900 hover:text-cyan-600 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <Button
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                        size="sm"
                      >
                        Agregar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {filteredProducts.length > 12 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button variant="outline" size="sm">
                  &lt;
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-cyan-500 hover:bg-cyan-600"
                >
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <span className="text-gray-500">...</span>
                <Button variant="outline" size="sm">
                  12
                </Button>
                <Button variant="outline" size="sm">
                  &gt;
                </Button>
              </div>
            )}

            {/* No results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  No se encontraron productos que coincidan con tu búsqueda
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setPriceRange({ min: "", max: "" });
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
