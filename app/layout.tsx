import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      
    
      <ClerkProvider>
        <html lang="en">
          <body>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    
   
  )
}
