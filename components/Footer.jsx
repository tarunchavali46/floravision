'use client'

import { useState } from 'react'
import Link from 'next/link'

const quickLinks = [
  ['Home', '/'],
  ['Shop', '/shop'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function submit(e) {
    e.preventDefault()

    if (!email) return

    setDone(true)
    setEmail('')
  }

  return (
    <footer
      className='relative overflow-hidden pt-14 pb-10'
      style={{
        background:
          'linear-gradient(to bottom, #091509 0%, #050b05 100%)',
      }}
    >
      {/* glow */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-green-500/10 blur-[140px]' />
      </div>

      <div className='relative z-10 max-w-[480px] mx-auto px-5'>

        <div
          className='rounded-[38px] p-8'
          style={{
            background:
              'linear-gradient(135deg, rgba(34,52,34,0.55), rgba(14,22,14,0.88))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(24px)',
          }}
        >
          {/* logo */}
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-10 h-10 rounded-2xl bg-green-500/20 flex items-center justify-center'>
              <div className='w-5 h-5 rounded-full bg-green-400' />
            </div>

            <div>
              <h2 className='text-white text-lg font-semibold tracking-wide'>
                FloraVision
              </h2>

              <p className='text-white/40 text-[10px]'>
                Modern indoor plant store
              </p>
            </div>
          </div>

          {/* description */}
          <p className='text-white/45 text-[11px] leading-5 mb-8'>
            Bring lush indoor greens to vibrant outdoor spaces. Our plants are
            carefully selected to elevate your environment naturally.
          </p>

          {/* quick links */}
          <div className='grid grid-cols-2 gap-4 mb-8'>
            {quickLinks.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className='text-white/65 text-sm hover:text-white transition'
              >
                {name}
              </Link>
            ))}
          </div>

          {/* newsletter */}
          <div
            className='rounded-[24px] p-4'
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <p className='text-white text-sm mb-2'>
              Subscribe Newsletter
            </p>

            <p className='text-white/40 text-[11px] mb-4'>
              Get updates about new plants and offers.
            </p>

            {done ? (
              <p className='text-green-400 text-sm'>
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={submit} className='flex gap-2'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                  className='flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none'
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                />

                <button
                  type='submit'
                  className='px-5 rounded-xl text-white text-sm'
                  style={{
                    background:
                      'linear-gradient(135deg, #3d8b40 0%, #2d6f31 100%)',
                  }}
                >
                  Send
                </button>
              </form>
            )}
          </div>

          {/* footer bottom */}
          <div className='mt-8 pt-5 border-t border-white/5 text-center'>
            <p className='text-white/25 text-[11px]'>
              FloraVision © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}