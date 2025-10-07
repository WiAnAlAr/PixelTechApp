"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Tipos de usuario
export type UserRole = "user" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuarios dummy
const dummyUsers: User[] = [
  {
    id: "1",
    name: "Usuario Normal",
    email: "usuario@pixeltech.com",
    role: "user",
  },
  {
    id: "2",
    name: "Administrador",
    email: "admin@pixeltech.com",
    role: "admin",
  },
];

// Contraseñas dummy (en un caso real estarían hasheadas)
const dummyCredentials: Record<string, string> = {
  "usuario@pixeltech.com": "usuario123",
  "admin@pixeltech.com": "admin123",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay un usuario guardado en localStorage
    const savedUser = localStorage.getItem("pixeltech_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("pixeltech_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simular delay de API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Verificar credenciales
    const validPassword = dummyCredentials[email];
    if (validPassword && validPassword === password) {
      const user = dummyUsers.find((u) => u.email === email);
      if (user) {
        setUser(user);
        localStorage.setItem("pixeltech_user", JSON.stringify(user));
        setIsLoading(false);
        return true;
      }
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("pixeltech_user");
  };

  const value = {
    user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
