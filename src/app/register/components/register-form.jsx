"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@radix-ui/react-select";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 2;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError("");
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/dashboard",
        prompt: "select_account",
      });

      if (result?.error) {
        setError("Error al iniciar sesión con Google");
        console.error("Error de inicio de sesión:", result.error);
      } else if (result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      console.error("Error inesperado:", error);
      setError("Ocurrió un error inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleNextStep}>
      <div className="relative">
        <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full mb-8">
          <div
            className="h-1 bg-primary rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="absolute -top-3 left-0 w-full flex justify-between">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              step >= 1
                ? "bg-primary text-white"
                : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
            }`}
          >
            1
          </div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              step >= 2
                ? "bg-primary text-white"
                : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
            }`}
          >
            2
          </div>
        </div>
      </div>

      {step === 1 ? (
        <div className="space-y-4 animate-in fade-in-50">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                placeholder="Juan"
                required
                className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellidos</Label>
              <Input
                id="lastName"
                placeholder="Pérez"
                required
                className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              required
              className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <div className="flex gap-2">
              <Select defaultValue="+34">
                <SelectTrigger className="w-[100px] bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
                  <SelectValue placeholder="Código" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+34">🇪🇸 +34</SelectItem>
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                placeholder="612 345 678"
                required
                className="flex-1 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in-50">
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
              className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm"
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" className="mt-1" required />
            <Label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-tight flex "
            >
              <h4>
                Acepto los{" "}
                <Link
                  href="/terms"
                  className="text-primary hover:text-primary/80 transition-colors hover:underline underline-offset-4"
                >
                  términos y condiciones{" "}
                </Link>
                y la{" "}
                <Link
                  href="/privacy"
                  className="text-primary hover:text-primary/80 transition-colors hover:underline underline-offset-4"
                >
                  política de privacidad
                </Link>
              </h4>
            </Label>
          </div>
        </div>
      )}

      <div className="flex justify-between gap-4">
        {step > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevStep}
            className="flex-1"
          >
            Anterior
          </Button>
        )}
        <div className="flex flex-col w-full gap-4 items-center">
          <Button
            type={step === totalSteps ? "submit" : "button"}
            className="flex-1 bg-primary hover:bg-primary/90 w-full"
            onClick={step < totalSteps ? handleNextStep : undefined}
          >
            {step === totalSteps ? "Crear cuenta" : "Siguiente"}
          </Button>
          {step === 1 && (
            <p className="text-sm text-muted-foreground w-full text-center">
              ¿Ya tienes una cuenta?{" "}
              <Link className="underline" href={"/login"}>
                inicia sesión
              </Link>
            </p>
          )}
        </div>
      </div>

      {step === 1 && (
        <>
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

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <Button
            type="button"
            variant="outline"
            className="w-full bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-950/80 transition-colors"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
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
                Conectando...
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
                Continuar con Google
              </>
            )}
          </Button>
        </>
      )}
    </form>
  );
}
