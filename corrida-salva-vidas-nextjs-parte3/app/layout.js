import './globals.css'

export const metadata = {
  title: 'Corrida Salva Vidas Brasil',
  description: 'Descubra os benefícios da corrida para o corpo e mente.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
