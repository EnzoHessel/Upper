import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/theme-provider';
import TopMenu from '@/components/top-menu';
import MainMenu from '@/components/main-menu';
import { Faq } from '@/components/faq';
import Footer from '@/components/footer';
import CookieBanner from '@/components/cookie-banner';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string | any };
}>): Promise<Metadata> {
  const messages = await getMessages(locale);

  const title =
    typeof messages['metadataTitle'] === 'string'
      ? messages['metadataTitle']
      : 'Default Title';
  const description =
    typeof messages['metadataDescription'] === 'string'
      ? messages['metadataDescription']
      : 'Default Description';

  return {
    title,
    description,
  };
}

export default async function RootLayout({
  children,
  params,
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
            </header>
            <div className="layoutWrapper">
              <nav className="sticky top-0 z-50">
                <MainMenu />
              </nav>
              <main className={'containerPrincipal'}>
                <section className={'contentPrincipal'}>
                  {children}
                    <section className="fixed bottom-8 right-8 md:right-16 lg:right-24 z-50">
                      <CookieBanner />
                    </section>
                  <Faq/>
                </section>
              </main>
              {/* por algumo motivo que nao sei explicar o footer so fuciona se ele estiver nessa div nas outras ele joga o header para fora */}
              <footer className={'footerContainer'}>
                <Footer />
              </footer>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
