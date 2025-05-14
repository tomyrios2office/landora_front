"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  // STATES
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // INPUT CHANGE => Trigger This Function
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // SUBMIT => Trigger This Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");

      //* SIGN IN => USE CREDENTIALS PROVIDER
      const result = await signIn("credentials", {
        // "credentials" is the provider
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      // IF THERE IS AN ERROR => SET ERROR
      if (result?.error) {
        setError("El nombre de usuario o la contraseña son incorrectos");
        console.error("Error de credenciales:", result.error);
      } else {
        router.push("/dashboard"); // NO ERROR => REDIRECT TO DASHBOARD
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Ocurrió un error inesperado, por favor intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  //* SIGN IN => USE GOOGLE PROVIDER
  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError("");
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/dashboard", // REDIRECT AFTER SIGN IN PARAMETER
        prompt: "select_account", // PROMPT FOR GOOGLE
      });

      // IF ERROR WITH GOOGLE => SET ERROR
      if (result?.error) {
        setError("Error al iniciar sesión con Google");
        console.error("Error de inicio de sesión:", result.error);
      } else if (result?.url) {
        router.push(result.url); // NO ERROR => REDIRECT TO DASHBOARD
      }
    } catch (error) {
      console.error("Error inesperado:", error);
      setError("Ocurrió un error inesperado, por favor intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md relative bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-black/10 dark:border-slate-800/50 border-2 ">
      <CardHeader className="space-y-1">
        <div className="flex items-center md:hidden mb-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="mr-2 dark:invert"
          />
          <span className="text-xl font-bold">Landora</span>
        </div>
        <CardTitle className="text-2xl font-bold">
          Bienvenido de nuevo
        </CardTitle>
        <CardDescription>
          Ingresa tus credenciales para acceder a tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              required
              disabled={isLoading}
              className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              disabled={isLoading}
              className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white transition-colors"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Iniciando sesión...
              </span>
            ) : (
              "Iniciar sesión"
            )}
          </Button>
        </form>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200 dark:border-slate-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white/80 dark:bg-slate-950/80 px-2 text-muted-foreground">
              O continúa con
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-950/80 transition-colors"
          disabled={isLoading}
          onClick={handleGoogleSignIn}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
          ) : (
            <>
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
              Google
            </>
          )}
        </Button>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground text-center w-full">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/register"
            className="text-primary hover:text-primary/80 transition-colors hover:underline underline-offset-4"
          >
            Regístrate
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
