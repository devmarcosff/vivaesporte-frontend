import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode, Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { LoadingBar } from "@/components/loading-bar/loadgin-bar";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Viva Esporte - Transformando o Jogo em Bom Jesus do Itabapoana",
  description: "Descubra as últimas novidades, eventos e histórias inspiradoras do esporte na cidade de Bom Jesus do Itabapoana.",
};

interface LayoutProps {
  children: ReactNode;
}

async function RootLayout({ children }: LayoutProps) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang='pt-br'>
      <body className={poppins.className}>
        <Analytics />
        <Suspense fallback={null}>
          <LoadingBar />
        </Suspense>
        <Toaster duration={2000} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
