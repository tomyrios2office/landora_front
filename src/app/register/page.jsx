"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { RegisterForm } from "./components/register-form";
import { DecorativeElements } from "./components/decorative-elements";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-slate-50/50 dark:bg-slate-950 ">
      <DecorativeElements />

      <div className="absolute top-4 right-4 z-50 ">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <Link
        href="/"
        className="absolute top-4 left-4 z-50 flex items-center gap-2 group"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="dark:invert"
        />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900/80 to-slate-900 dark:from-slate-100/80 dark:to-slate-100 group-hover:to-primary transition-all duration-300">
          Landora
        </span>
      </Link>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-900/80 dark:from-white dark:to-white/80">
              Únete a más de 20.000 inversores
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Comienza tu viaje de inversión inmobiliaria con nosotros
            </p>
          </div>

          <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border-black/10 dark:border-slate-700/20 shadow-2xl shadow-black/5 p-10 border-2">
            <RegisterForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
