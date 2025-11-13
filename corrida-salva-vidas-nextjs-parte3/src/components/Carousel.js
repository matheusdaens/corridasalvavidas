'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/images/foto1.jpg', '/images/foto2.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="fotoshomepage">
      {images.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt={`Foto ${index + 1}`}
          fill
          style={{
            display: currentImage === index ? 'block' : 'none',
            objectFit: 'cover',
          }}
          priority={index === 0}
        />
      ))}
    </section>
  )
}
