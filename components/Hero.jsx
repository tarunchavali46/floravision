'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Stars() {
  return (
    <div className='flex items-center gap-1 mt-1'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className='text-yellow-400 text-[9px] md:text-xs'
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section
      className='min-h-screen flex justify-center px-2 sm:px-4 py-3 sm:py-6 overflow-hidden'
      style={{
        background:
          'radial-gradient(circle at top, rgba(31,58,31,0.20), transparent 28%), #071207',
      }}
    >
      <div
        className='relative w-full max-w-[460px] mx-auto overflow-hidden rounded-[30px] md:rounded-[36px]'
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,22,10,0.97), rgba(4,12,4,0.98))',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 20px 80px rgba(0,0,0,0.65)',
        }}
      >
        {/* glow */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-[240px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-green-500/20 blur-[120px]' />
        </div>

        {/* navbar */}
        <div className='relative z-20 flex items-center justify-between px-4 sm:px-5 pt-5'>
          <div className='flex items-center gap-2'>
            <div className='w-5 h-5 rounded-full bg-green-500 flex-shrink-0' />

            <p className='text-white text-[10px] sm:text-[11px] tracking-[0.18em] font-semibold whitespace-nowrap'>
              FLORAVISION
            </p>
          </div>

          {/* desktop nav */}
          <div className='hidden lg:flex items-center gap-5 text-[10px] text-white/80'>
            <span>Home</span>
            <span>Plant Type</span>
            <span>More</span>
            <span>Contact</span>
          </div>

          {/* icons */}
          <div className='flex items-center gap-4 text-white'>
            <span className='text-sm'>⌕</span>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-[20px]'
            >
              ☰
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div
            className='absolute top-[70px] left-1/2 -translate-x-1/2 z-30 w-[90%] rounded-2xl p-5 flex flex-col gap-4 text-white text-sm md:hidden'
            style={{
              background: 'rgba(14,25,14,0.95)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(18px)',
            }}
          >
            <span>Home</span>
            <span>Plant Type</span>
            <span>More</span>
            <span>Contact</span>
          </div>
        )}

        {/* hero content */}
        <div className='relative z-10 px-4 sm:px-5 pt-8 md:pt-10'>
          <h1 className='font-serif text-white text-[38px] md:text-[56px] leading-[0.88] tracking-[-0.04em] max-w-[210px] md:max-w-[280px]'>
            Earth&apos;s Exhale
          </h1>

          <p className='mt-4 max-w-[240px] text-[10px] md:text-[11px] leading-5 text-white/55'>
            Earth&apos;s Exhale introduces the glory and vitality of the Earth&apos;s
            natural world. Explore a wide variety of plants curated for your home.
          </p>

          {/* buttons */}
          <div className='mt-5 flex items-center gap-3 flex-wrap'>
            <Link
              href='/shop'
              className='rounded-xl border border-white/20 px-5 py-3 text-sm text-white transition hover:bg-white/5'
            >
              Buy Now
            </Link>

            <button className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white'>
              ▶
            </button>

            <span className='text-sm text-white/70'>
              Learn more
            </span>
          </div>
        </div>

        {/* floating product card */}
        <div
          className='absolute right-2 md:right-5 top-[195px] md:top-[180px] z-20 w-[110px] md:w-[165px] rounded-[20px] md:rounded-[24px] px-3 md:px-5 py-3 md:py-4'
          style={{
            background: 'rgba(18,30,18,0.62)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <p className='mb-2 text-[9px] md:text-[11px] text-white/70'>
            Indoor Plant
          </p>

          <h3 className='mb-3 text-[11px] md:text-[15px] leading-5 text-white'>
            Aglaonema plant
          </h3>

          <button className='rounded-lg border border-white/20 px-3 md:px-4 py-2 text-[10px] md:text-sm text-white'>
            Buy Now
          </button>
        </div>

        {/* review card */}
        <div
          className='absolute left-3 md:left-5 top-[390px] md:top-[360px] z-20 w-[105px] md:w-[150px] rounded-[18px] md:rounded-[22px] p-2 md:p-3'
          style={{
            background: 'rgba(35,45,35,0.42)',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(26px)',
          }}
        >
          <div className='flex items-center gap-2 mb-2'>
            <div className='overflow-hidden rounded-full w-6 h-6 md:w-9 md:h-9'>
              <Image
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
                alt='customer'
                width={36}
                height={36}
                className='object-cover'
              />
            </div>

            <div>
              <p className='text-[8px] md:text-[11px] text-white whitespace-nowrap'>
                Rosie Harold
              </p>

              <Stars />
            </div>
          </div>

          <p className='text-[7px] md:text-[10px] leading-4 text-white/45'>
            Very beautiful plant. Delivery was smooth and packaging was excellent.
          </p>
        </div>

        {/* main plant */}
        <div className='relative z-10 flex justify-center mt-6 md:-mt-8'>
          <div className='relative w-[230px] h-[230px] md:w-[330px] md:h-[330px]'>
            <Image
              src='/images/plant1.png'
              alt='main plant'
              fill
              priority
              className='object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]'
            />
          </div>
        </div>

        {/* trendy title */}
        <div className='relative z-10 text-center -mt-1 md:-mt-6'>
          <h2 className='text-white text-[16px] md:text-[18px] font-medium'>
            Our Trendy plants
          </h2>
        </div>

        {/* first card */}
        <div
          className='relative z-10 mx-3 md:mx-5 mt-8 overflow-hidden rounded-[30px] md:rounded-[42px]'
          style={{
            background:
              'linear-gradient(135deg, rgba(32,52,32,0.55), rgba(14,22,14,0.82))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 py-6 md:py-8'>
            <div className='relative w-[130px] h-[130px] md:w-[170px] md:h-[170px] md:-ml-6'>
              <Image
                src='/images/plant2.png'
                alt='plant'
                fill
                className='object-contain'
              />
            </div>

            <div className='flex-1 text-center md:text-left'>
              <h3 className='mb-4 text-[14px] md:text-[15px] leading-6 text-white'>
                For Your Desks Decorations
              </h3>

              <p className='mb-2 text-[9px] md:text-[10px] leading-5 text-white/50'>
                We have a variety of plants that help improve your workplace atmosphere.
              </p>

              <Stars />

              <p className='mt-3 text-[17px] md:text-[18px] font-semibold text-white'>
                Rs. 599/-
              </p>

              <div className='mt-4 flex items-center justify-center md:justify-start gap-3'>
                <button className='rounded-xl border border-white/20 px-5 py-2 text-sm text-white'>
                  Explore
                </button>

                <button className='w-10 h-10 rounded-xl border border-white/20 text-lg text-white'>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* second card */}
        <div
          className='relative z-10 mx-3 md:mx-5 mt-8 mb-12 overflow-hidden rounded-[30px] md:rounded-[42px]'
          style={{
            background:
              'linear-gradient(135deg, rgba(32,52,32,0.55), rgba(14,22,14,0.82))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-4 md:px-6 py-6 md:py-8'>
            <div className='text-center md:text-left'>
              <h3 className='mb-4 text-[14px] md:text-[15px] leading-6 text-white'>
                For Your Desks Decorations
              </h3>

              <p className='mb-2 max-w-[150px] mx-auto md:mx-0 text-[9px] md:text-[10px] leading-5 text-white/50'>
                Improve your work mood naturally with elegant indoor plants.
              </p>

              <Stars />

              <p className='mt-3 text-[17px] md:text-[18px] font-semibold text-white'>
                Rs. 399/-
              </p>

              <div className='mt-4 flex items-center justify-center md:justify-start gap-3'>
                <button className='rounded-xl border border-white/20 px-5 py-2 text-sm text-white'>
                  Explore
                </button>

                <button className='w-10 h-10 rounded-xl border border-white/20 text-lg text-white'>
                  +
                </button>
              </div>
            </div>

            <div className='relative w-[140px] h-[140px] md:w-[180px] md:h-[180px]'>
              <Image
                src='/images/plant3.png'
                alt='plant'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}