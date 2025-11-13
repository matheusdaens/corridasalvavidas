'use client'

import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function DicaDetalhes() {
  const params = useParams()
  const [dica, setDica] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Consumo de API dinâmica usando o ID da URL
    fetch(`/api/dicas/${params.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Dica não encontrada')
        }
        return response.json()
      })
      .then(data => {
        setDica(data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [params.id])

  return (
    <>
      <Header />
      <Navigation />
      <section>
        <div style={{ marginBottom: '20px' }}>
          <Link 
            href="/dicas"
            style={{
              color: '#00A859',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            ← Voltar para dicas
          </Link>
        </div>

        {loading && (
          <article style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '18px', color: '#00A859' }}>Carregando...</p>
          </article>
        )}

        {error && (
          <article style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ color: 'red', marginBottom: '20px' }}>Erro: {error}</p>
            <Link 
              href="/dicas"
              style={{
                background: '#00A859',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none'
              }}
            >
              Ver todas as dicas
            </Link>
          </article>
        )}

        {!loading && !error && dica && (
          <article style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '30px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                background: '#00A859',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '12px',
                fontSize: '14px'
              }}>
                {dica.categoria}
              </span>
              <span style={{ color: '#888', fontSize: '14px' }}>
                ⏱️ {dica.duracao}
              </span>
            </div>

            <h1 style={{ 
              color: '#00A859', 
              marginBottom: '15px',
              fontSize: '32px'
            }}>
              {dica.titulo}
            </h1>
            
            <p style={{ 
              color: '#666', 
              fontSize: '18px',
              marginBottom: '25px',
              fontStyle: 'italic'
            }}>
              {dica.descricao}
            </p>
            
            <div style={{ 
              padding: '20px',
              background: '#f9f9f9',
              borderRadius: '8px',
              lineHeight: '1.8'
            }}>
              <p style={{ fontSize: '16px', color: '#333' }}>
                {dica.conteudo}
              </p>
            </div>

            <div style={{ 
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: '1px solid #ddd',
              textAlign: 'center'
            }}>
              <Link 
                href="/dicas"
                style={{
                  background: '#00A859',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Ver todas as dicas
              </Link>
            </div>
          </article>
        )}
      </section>
    </>
  )
}
