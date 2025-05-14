"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, ChevronDown, Globe, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };
  useEffect(() => {
    if (session) {
      console.log(session);
    }
  }, []);

  return (
    <header className="flex justify-around fixed z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex-container flex h-16 items-center justify-around w-full">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-primary">Landora</span>
        </Link>

        <nav className="hidden  lg:flex items-center space-x-4 gap-4">
          <NavItem href="/projects" label="Proyectos" hasDropdown />
          <NavItem href="/about" label="Nosotros" hasDropdown />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/support" label="Soporte" hasDropdown />
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <Globe className="h-5 w-5" />
            <ChevronDown className="h-4 w-4" />
          </div>
          <ThemeToggle />
          {session ? (
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar sesión
            </Button>
          ) : (
            <>
              <Link href="/login" className="cursor-pointer">
                <Button className="bg-primary text-white hover:bg-primary/90 cursor-pointer">
                  Registrarme
                </Button>
              </Link>
              <Link href="/register" className="cursor-pointer">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-gray-200 cursor-pointer"
                >
                  Acceder
                </Button>
              </Link>
            </>
          )}
        </div>

        <div className="flex lg:hidden items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden container pb-4">
          <nav className="flex flex-col space-y-4 pt-2">
            <MobileNavItem href="/projects" label="Proyectos" />
            <MobileNavItem href="/about" label="Nosotros" />
            <MobileNavItem href="/token" label="Token" />
            <MobileNavItem href="/blog" label="Blog" />
            <div className="flex items-center space-x-2 pt-2">
              <Globe className="h-5 w-5" />
              <span>ES</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex flex-col space-y-2 pt-2">
              {session ? (
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar sesión
                </Button>
              ) : (
                <>
                  <Link href="/login" className="w-full cursor-pointer">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white w-full cursor-pointer"
                    >
                      Acceder
                    </Button>
                  </Link>
                  <Link href="/register" className="w-full cursor-pointer">
                    <Button className="bg-primary text-white hover:bg-primary/90 w-full cursor-pointer">
                      Registrarme
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label, hasDropdown = false }) {
  return (
    <Link
      href={href}
      className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
    >
      {label}
      {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
    </Link>
  );
}

function MobileNavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
    >
      {label}
      <ChevronDown className="h-4 w-4" />
    </Link>
  );
}
