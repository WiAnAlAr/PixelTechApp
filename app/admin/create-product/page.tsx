"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Trash2, Plus, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

interface ProductProperty {
  id: string;
  name: string;
  value: string;
}

export default function CreateProductPage() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    image: null as File | null,
    name: "",
    description: "",
    type: "",
    quantity: "",
    available: true,
  });

  const [properties, setProperties] = useState<ProductProperty[]>([]);
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");

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

  const addProperty = () => {
    const newProperty: ProductProperty = {
      id: Date.now().toString(),
      name: "",
      value: "",
    };
    setProperties([...properties, newProperty]);
  };

  const updateProperty = (
    id: string,
    field: "name" | "value",
    value: string
  ) => {
    setProperties(
      properties.map((prop) =>
        prop.id === id ? { ...prop, [field]: value } : prop
      )
    );
  };

  const removeProperty = (id: string) => {
    setProperties(properties.filter((prop) => prop.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica para enviar el producto al backend
      // Por ahora solo simulamos el envío
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
      setLevel("");
      setStatus("");
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Crear Producto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Subir imagen */}
            <div className="space-y-2">
              <Label htmlFor="image" className="text-sm font-medium">
                Subir imagen *
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {imagePreview ? (
                  <div className="relative w-full h-64">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
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
                        <span className="text-blue-600 hover:text-blue-500">
                          Subir
                        </span>
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
              </div>
            </div>

            {/* Nombre */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nombre *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="AORUS GeForce RTX™ 5090 MASTER 32G"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            {/* Descripción */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Descripción
              </Label>
              <Textarea
                id="description"
                placeholder="Descripción del producto..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="min-h-[100px]"
              />
            </div>

            {/* Tipo */}
            <div className="space-y-2">
              <Label htmlFor="type" className="text-sm font-medium">
                Tipo
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData({ ...formData, type: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="CPU" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cpu">CPU</SelectItem>
                  <SelectItem value="gpu">GPU</SelectItem>
                  <SelectItem value="motherboard">Motherboard</SelectItem>
                  <SelectItem value="ram">RAM</SelectItem>
                  <SelectItem value="storage">Almacenamiento</SelectItem>
                  <SelectItem value="cooling">Refrigeración</SelectItem>
                  <SelectItem value="psu">Fuente de Poder</SelectItem>
                  <SelectItem value="case">Case</SelectItem>
                  <SelectItem value="peripherals">Periféricos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Propiedades */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Propiedades</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addProperty}
                  className="text-cyan-600 border-cyan-600 hover:bg-cyan-50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>

              {properties.map((property) => (
                <div key={property.id} className="flex items-center space-x-2">
                  <Input
                    placeholder="Nombre de la propiedad"
                    value={property.name}
                    onChange={(e) =>
                      updateProperty(property.id, "name", e.target.value)
                    }
                    className="flex-1"
                  />
                  <Input
                    placeholder="Valor"
                    value={property.value}
                    onChange={(e) =>
                      updateProperty(property.id, "value", e.target.value)
                    }
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeProperty(property.id)}
                    className="text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Nivel */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Nivel</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-cyan-600 border-cyan-600 hover:bg-cyan-50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              <Input
                placeholder="Nivel del producto"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              />
            </div>

            {/* Estado */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Estado</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-cyan-600 border-cyan-600 hover:bg-cyan-50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              <Input
                placeholder="Estado del producto"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>

            {/* Disponible */}
            <div className="flex items-center space-x-2">
              <Switch
                id="available"
                checked={formData.available}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, available: checked })
                }
              />
              <Label htmlFor="available" className="text-sm font-medium">
                Disponible
              </Label>
            </div>

            {/* Cantidad */}
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-sm font-medium">
                Cantidad
              </Label>
              <Input
                id="quantity"
                type="number"
                placeholder="0"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
              />
            </div>

            {/* Botón Create */}
            <Button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creando..." : "Create"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
