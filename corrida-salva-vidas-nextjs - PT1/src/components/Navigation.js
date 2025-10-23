'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsMenuOpen(true)
      } else {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="navegacao">
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'block',
            background: '#00A859',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '5px',
            margin: '10px auto',
          }}
        >
          ☰ Menu
        </button>
      )}
      <ul
        className="navegacao"
        style={{
          display: isMenuOpen ? 'flex' : 'none',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <li>
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </li>
        <li>
          <Link href="/start">Como começar</Link>
        </li>
        <li>
          <Link href="/dicas">Dicas de treino</Link>
        </li>
        <li>
          <Link href="/planilhas">Planilhas de treino</Link>
        </li>
        <li>
          <Link href="/nutricao">Nutrição</Link>
        </li>
        <li>
          <Link href="/equipamentos">Equipamentos</Link>
        </li>
      </ul>
    </nav>
  )
}
