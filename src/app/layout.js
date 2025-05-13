"use client";

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/custom/theme-provider";
import { NavigationWrapper } from "../components/custom/navigation-wrapper";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NavigationWrapper>{children}</NavigationWrapper>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
