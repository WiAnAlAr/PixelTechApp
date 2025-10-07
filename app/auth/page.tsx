"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/lib/auth";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const success = await login(loginData.email, loginData.password);
      if (success) {
        router.push("/");
      } else {
        setError(
          "Credenciales incorrectas. Usuarios de prueba: usuario@pixeltech.com / admin@pixeltech.com"
        );
      }
    } catch (err) {
      setError("Error al iniciar sesión");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // En una implementación real, aquí se manejaría el registro
    setError(
      "El registro aún no está implementado. Use las cuentas de prueba."
    );
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Logo */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-white">
        <Link href="/" className="flex items-center">
          <Image
            src="/PixelTech-Logo.png"
            alt="PixelTech Logo"
            width={320}
            height={144}
            className="h-24 w-auto"
          />
        </Link>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
              >
                Registrar
              </TabsTrigger>
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
              >
                Iniciar Sesion
              </TabsTrigger>
            </TabsList>

            {/* Sign Up Tab */}
            <TabsContent value="signup" className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-slate-900">
                Registro
              </h2>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 text-base bg-transparent"
                  type="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Sign up with Facebook
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-base bg-transparent"
                  type="button"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign up with Google
                </Button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-50 text-gray-500">OR</span>
                </div>
              </div>

              {/* Sign Up Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm text-gray-600"
                    >
                      Nombre
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm text-gray-600">
                      Apellido
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-gray-600">
                    Correo
                  </Label>
                  <Input id="email" type="email" className="h-12" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm text-gray-600">
                    Contraseña
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className="h-12"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-cyan-300 hover:bg-cyan-400 text-white text-base font-medium"
                >
                  Registrarme
                </Button>
              </form>
            </TabsContent>

            {/* Log In Tab */}
            <TabsContent value="login" className="space-y-6">
              <h2 className="text-2xl font-semibold text-center text-slate-900">
                Iniciar Sesión
              </h2>

              {error && activeTab === "login" && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
                  {error}
                </div>
              )}

              {/* Información de usuarios demo */}
              <div className="p-3 text-sm text-blue-600 bg-blue-50 border border-blue-200 rounded">
                <p className="font-semibold mb-1">Usuarios de prueba:</p>
                <p>Usuario: usuario@pixeltech.com / usuario123</p>
                <p>Admin: admin@pixeltech.com / admin123</p>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 text-base bg-transparent"
                  type="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Log in with Facebook
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-base bg-transparent"
                  type="button"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Log in with Google
                </Button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-50 text-gray-500">OR</span>
                </div>
              </div>

              {/* Log In Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail" className="text-sm text-gray-600">
                    Correo
                  </Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    className="h-12"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="loginPassword"
                    className="text-sm text-gray-600"
                  >
                    Contraseña
                  </Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    className="h-12"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-cyan-600 hover:text-cyan-700"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white text-base font-medium disabled:opacity-50"
                >
                  {isSubmitting || isLoading
                    ? "Iniciando sesión..."
                    : "Iniciar Sesión"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Mobile Logo */}
          <div className="lg:hidden mt-8 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                <div className="grid grid-cols-3 gap-0.5 p-1">
                  <div className="w-1 h-1 bg-cyan-500 rounded-sm"></div>
                  <div className="w-1 h-1 bg-cyan-500 rounded-sm"></div>
                  <div className="w-1 h-1 bg-transparent"></div>
                  <div className="w-1 h-1 bg-cyan-500 rounded-sm"></div>
                  <div className="w-1 h-1 bg-transparent"></div>
                  <div className="w-1 h-1 bg-cyan-500 rounded-sm"></div>
                  <div className="w-1 h-1 bg-transparent"></div>
                  <div className="w-1 h-1 bg-cyan-500 rounded-sm"></div>
                  <div className="w-1 h-1 bg-cyan-500 rounded-sm"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-slate-900">
                Pixel Tech
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
