'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10' : ''
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(15,26,15,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-12'>
        <div className='flex items-center justify-between h-16 md:h-20'>

          {/* logo */}
          <Link href='/' className='flex items-center gap-2'>
            {/* leaf icon */}
            <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' fill='#4caf50' opacity='0.2'/>
              <path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z' fill='#4caf50'/>
              <path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' stroke='#4caf50' strokeWidth='1.5' strokeLinecap='round'/>
            </svg>
            <span className='font-serif font-semibold text-xl text-white tracking-wide'>FloraVision</span>
          </Link>

          {/* desktop links */}
          <nav className='hidden md:flex items-center gap-0.5'>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className='px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5'
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* right icons */}
          <div className='flex items-center gap-1'>
            <button aria-label='Search' className='p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors'>
              <Search size={18} />
            </button>
            <button aria-label='Account' className='hidden md:flex p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors'>
              <User size={18} />
            </button>
            <button aria-label='Cart' className='relative p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors'>
              <ShoppingCart size={18} />
              {/* TODO: real cart count */}
              <span className='absolute top-1 right-1 w-3.5 h-3.5 bg-accent text-white rounded-full text-[9px] font-bold flex items-center justify-center' style={{ backgroundColor: '#4caf50' }}>
                2
              </span>
            </button>
            <button
              onClick={() => setOpen(!open)}
              className='md:hidden p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors ml-1'
              aria-label='Menu'
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      {open && (
        <div className='md:hidden border-t border-white/10 px-4 py-4' style={{ backgroundColor: '#0f1a0f' }}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className='block py-3 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg border-b border-white/5 last:border-none transition-colors'
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
