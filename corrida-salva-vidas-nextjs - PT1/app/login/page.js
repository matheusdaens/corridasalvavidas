'use client'

import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    usuario: '',
    senha: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.usuario.trim() || !formData.senha.trim()) {
      alert('Preencha todos os campos!')
      return
    }
    
    alert('Enviado com sucesso!')
    setFormData({ usuario: '', senha: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <Navigation />
      <section>
        <h1>Login</h1>
        <article style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              maxWidth: '400px',
              width: '100%'
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <input
                  type="text"
                  name="usuario"
                  placeholder="Usuário ou Email"
                  value={formData.usuario}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#00A859',
                  color: 'white',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Entrar
              </button>
              
              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
                Não tem conta?{' '}
                <Link href="/" style={{ color: '#313131' }}>
                  Cadastre-se (MERAMENTE ILUSTRATIVO)
                </Link>
              </p>
            </form>
          </div>
        </article>
      </section>
    </>
  )
}
