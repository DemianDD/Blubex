import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { UserProvider } from '@/contexts/user_context'

export const metadata: Metadata = {
  title: 'Blubex',
  description: 'Сайт мрії у декілька кліків',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Navbar/>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
