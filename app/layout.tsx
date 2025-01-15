import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from '@/components/Theme-context/theme-context'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      
    <ThemeProvider>
      <ClerkProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ClerkProvider>
    </ThemeProvider>
   
  )
}
