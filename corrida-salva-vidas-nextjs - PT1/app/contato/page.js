'use client'

import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import { useState } from 'react'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      alert('Preencha todos os campos!')
      return
    }
    
    if (!formData.email.includes('@')) {
      alert('Email inválido!')
      return
    }
    
    alert('Enviado com sucesso!')
    setFormData({ nome: '', email: '', mensagem: '' })
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
        <h1>Contato</h1>
        <article>
          <p>Entre em contato conosco!</p>
          
          <form onSubmit={handleSubmit} style={{ maxWidth: '500px', marginTop: '30px' }}>
            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <textarea
                name="mensagem"
                placeholder="Mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px'
                }}
              />
            </div>
            
            <button
              type="submit"
              style={{
                background: '#00A859',
                color: 'white',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Enviar
            </button>
          </form>
        </article>
      </section>
    </>
  )
}
