'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className="home">
        <ul className="home">
          <li className="lista">Corrida Salva Vidas</li>
          <li>
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <button>Contato</button>
            </Link>
          </li>
          <li>
            <Link href="/colaborador">
              <button>Torne-se um colaborador</button>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <button>Log-in</button>
            </Link>
          </li>
        </ul>
      </nav>
      <h2>Descubra os benefícios da corrida para o <br />corpo e mente.</h2>
    </header>
  )
}
