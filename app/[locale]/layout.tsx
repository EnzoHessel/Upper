import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/components/theme-provider"
import TopMenu from "@/components/top-menu";
import MainMenu from "@/components/main-menu";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params: { locale }
}: Readonly<{
  params: { locale: string | any };
}>): Promise<Metadata> {
  const messages = await getMessages(locale);

  const title = typeof messages['metadata.title'] === 'string' ? messages['metadata.title'] : 'Default Title';
  const description = typeof messages['metadata.description'] === 'string' ? messages['metadata.description'] : 'Default Description';

  return {
    title,
    description,
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string | any };
}>) {

  const messages = await getMessages(params.locale);
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <header>
              <TopMenu />
              <MainMenu />
            </header>
            <main className={"containerPrincipal"}>
              <section className={"contentPrincipal"}>
                {children}
              </section>
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}