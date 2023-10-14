
import { ToastContainer } from 'react-toastify'
import { siteConfig } from '@/config/site';
import { ThemeProvider } from "@/components/theme-provider"
import './assets/style/globals.css'
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'MYCONTEST',
  description: 'Easy with us - MYCONTEST.',
}

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="icon" href={`${siteConfig.apiURL}/avatar/favicon.png`} sizes="any" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,500&display=swap" rel="stylesheet" />

    </head>
    <body >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange suppressHydrationWarning={true}>
        {children}
        <ToastContainer />
      </ThemeProvider>
    </body>
  </html >
}
