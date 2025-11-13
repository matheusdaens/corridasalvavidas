'use client'

import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Dicas() {
  const [dicas, setDicas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Consumo de API usando fetch
    fetch('/api/dicas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar dicas')
        }
        return response.json()
      })
      .then(data => {
        setDicas(data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header />
      <Navigation />
      <section>
        <h1>Dicas de Treino</h1>
        
        {loading && (
          <article style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '18px', color: '#00A859' }}>Carregando dicas...</p>
          </article>
        )}

        {error && (
          <article style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ color: 'red' }}>Erro: {error}</p>
          </article>
        )}

        {!loading && !error && (
          <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
            {dicas.map(dica => (
              <article 
                key={dica.id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,168,89,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                  <h2 style={{ color: '#00A859', margin: 0 }}>{dica.titulo}</h2>
                  <span style={{
                    background: '#00A859',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {dica.categoria}
                  </span>
                </div>
                
                <p style={{ color: '#666', marginBottom: '15px' }}>{dica.descricao}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', color: '#888' }}>
                    ⏱️ {dica.duracao}
                  </span>
                  <Link 
                    href={`/dicas/${dica.id}`}
                    style={{
                      background: '#00A859',
                      color: 'white',
                      padding: '8px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    Ver detalhes →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && !error && dicas.length === 0 && (
          <article style={{ textAlign: 'center', padding: '40px' }}>
            <p>Nenhuma dica disponível no momento.</p>
          </article>
        )}
      </section>
    </>
  )
}
