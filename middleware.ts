import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt-BR'],

  defaultLocale: 'pt-BR',
});

export const config = {
  matcher: ['/', '/(pt-BR)/:path*'],
};
