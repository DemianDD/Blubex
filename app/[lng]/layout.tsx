import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { UserProvider } from '@/contexts/user_context'
import { CurrencyProvider } from '@/contexts/currency_context'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

export const metadata: Metadata = {
  title: 'Blubex',
  description: 'Сайт мрії у декілька кліків',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

function RootLayout({ Component, pageProps}: AppProps & { params: {lng: any} }) {
  const { lng } = pageProps.params; 
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <CurrencyProvider>
          <UserProvider>
            <Navbar />
            <main>
              <Component {...pageProps} />
            </main>
          </UserProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);





