import { AuthBackground } from "./auth-background";
import { AuthSideContent } from "./auth-side-content";
import { LoginForm } from "./login-form";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex relative">
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
      <AuthSideContent />

      <div className="relative w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <LoginForm />
      </div>
    </div>
  );
}
