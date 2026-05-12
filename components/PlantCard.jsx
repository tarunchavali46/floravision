'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

function Stars({ rating }) {
  return (
    <div className='flex gap-0.5'>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width='11'
          height='11'
          viewBox='0 0 20 20'
        >
          <path
            d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
            fill={i <= Math.round(rating) ? '#f59e0b' : '#374151'}
          />
        </svg>
      ))}
    </div>
  )
}

export default function PlantCard({ plant }) {
  const [added, setAdded] = useState(false)

  function handleBuy() {
    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 2000)
  }

  return (
    <div
      className='group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]'
      style={{
        backgroundColor: '#162016',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* image */}
      <div className='relative h-48 overflow-hidden'>
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-110'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />

        {/* overlay */}
        <div className='absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
      </div>

      {/* content */}
      <div className='p-4'>
        <h3 className='mb-1.5 text-sm font-medium text-white transition-colors duration-300 group-hover:text-green-300'>
          {plant.name}
        </h3>

        {plant.rating && (
          <div className='mb-2 flex items-center gap-2'>
            <Stars rating={plant.rating} />

            {plant.reviews && (
              <span className='text-xs text-white/40'>
                ({plant.reviews})
              </span>
            )}
          </div>
        )}

        {/* bottom */}
        <div className='mt-3 flex items-center justify-between'>
          <p className='text-sm font-semibold text-white'>
            Rs. {plant.price}/-
          </p>

          <button
            onClick={handleBuy}
            className='flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95'
            style={{
              backgroundColor: added ? '#388e3c' : '#4caf50',
            }}
          >
            <ShoppingCart size={12} />

            {added ? 'Added!' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  )
}