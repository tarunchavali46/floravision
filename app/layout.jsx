import './globals.css'

export const metadata = {
  title: 'FloraVision — Premium Indoor Plants',
  description: 'Discover premium indoor plants for your home and workspace. Fresh, healthy plants delivered to your door.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
