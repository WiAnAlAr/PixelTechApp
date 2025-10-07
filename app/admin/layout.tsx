"use client";

import { useAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    redirect("/auth");
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="bg-gray-50 min-h-[calc(100vh-200px)]">{children}</main>
      <Footer />
    </div>
  );
}
