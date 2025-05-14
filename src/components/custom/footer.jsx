import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex justify-center bg-gray-100 dark:bg-gray-800 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-primary">Landora</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Landora es la plataforma líder de inversión inmobiliaria que te
              permite generar ingresos mensuales invirtiendo en proyectos
              seleccionados.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Sobre nosotros" />
              <FooterLink href="#" label="Equipo" />
              <FooterLink href="#" label="Trabaja con nosotros" />
              <FooterLink href="#" label="Contacto" />
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="Guías" />
              <FooterLink href="#" label="FAQ" />
              <FooterLink href="#" label="Ayuda" />
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Términos y condiciones" />
              <FooterLink href="#" label="Política de privacidad" />
              <FooterLink href="#" label="Cookies" />
              <FooterLink href="#" label="Aviso legal" />
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Landora, todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <Link
      href={href}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-muted-foreground hover:text-primary transition-colors"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
      </Link>
    </li>
  );
}
