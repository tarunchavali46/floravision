import Image from 'next/image'
import Link from 'next/link'

function Stars() {
  return (
    <div className='flex items-center gap-1 mt-2'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className='text-yellow-400 text-xs'>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className='min-h-screen px-2 sm:px-4 py-3 sm:py-6 flex justify-center overflow-hidden'
      style={{
        background:
          'radial-gradient(circle at top, rgba(31,58,31,0.20), transparent 28%), #071207',
      }}
    >
      <div
        className='relative w-full max-w-[480px] mx-auto overflow-hidden rounded-[30px] sm:rounded-[36px]'
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,22,10,0.97), rgba(4,12,4,0.98))',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 20px 80px rgba(0,0,0,0.65)',
        }}
      >
        {/* background glow */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-[220px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-green-500/20 blur-[120px]' />
        </div>

        {/* navbar */}
        <div className='relative z-20 flex items-center justify-between px-4 sm:px-5 pt-5'>
          {/* logo */}
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
            <span className='text-[20px]'>☰</span>
          </div>
        </div>

        {/* hero content */}
        <div className='relative z-10 px-4 sm:px-5 pt-8 sm:pt-10'>
          <h1 className='font-serif text-white text-[42px] md:text-[58px] leading-[0.88] tracking-tight max-w-[240px] sm:max-w-[280px]'>
            Earth&apos;s Exhale
          </h1>

          <p className='mt-4 max-w-[250px] text-[11px] leading-5 text-white/55'>
            Earth&apos;s Exhale introduces the glory and vitality of the Earth&apos;s
            natural world. Explore a wide variety of plants curated for your home.
          </p>

          {/* buttons */}
          <div className='mt-5 flex flex-wrap items-center gap-3 sm:gap-4'>
            <Link
              href='/shop'
              className='rounded-xl border border-white/20 px-5 sm:px-6 py-3 text-sm text-white transition hover:bg-white/5'
            >
              Buy Now
            </Link>

            <button className='flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 text-white'>
              ▶
            </button>

            <span className='text-sm text-white/70'>
              Learn more
            </span>
          </div>
        </div>

        {/* floating product card */}
        <div
          className='absolute right-1 sm:right-3 top-[260px] sm:top-[170px] z-20 w-[145px] sm:w-[200px] rounded-[22px] sm:rounded-[26px] px-4 sm:px-6 py-4 sm:py-5'
          style={{
            background: 'rgba(20,34,20,0.55)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(18px)',
          }}
        >
          <p className='mb-2 text-[11px] sm:text-xs text-white/70'>
            Indoor Plant
          </p>

          <h3 className='mb-4 text-[14px] sm:text-[17px] leading-6 text-white'>
            Aglaonema plant
          </h3>

          <button className='rounded-lg border border-white/20 px-4 sm:px-5 py-2 text-sm text-white'>
            Buy Now
          </button>
        </div>

        {/* review card */}
        <div
          className='absolute left-3 sm:left-5 top-[470px] sm:top-[350px] z-20 w-[145px] sm:w-[150px] rounded-[24px] p-4'
          style={{
            background: 'rgba(35,45,35,0.45)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className='mb-3 flex items-center gap-2'>
            <div className='overflow-hidden rounded-full w-9 h-9'>
              <Image
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
                alt='customer'
                width={36}
                height={36}
                className='object-cover'
              />
            </div>

            <div>
              <p className='text-[11px] text-white'>
                Rosie Harold
              </p>

              <Stars />
            </div>
          </div>

          <p className='text-[10px] leading-4 text-white/45'>
            Very beautiful plant. Delivery was smooth and packaging was excellent.
          </p>
        </div>

        {/* main plant */}
        <div className='relative z-10 mt-4 sm:-mt-10 flex justify-center'>
          <div className='relative w-[260px] h-[260px] sm:w-[330px] sm:h-[330px]'>
            <Image
              src='/images/plant1.png'
              alt='main plant'
              fill
              priority
              className='object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]'
            />
          </div>
        </div>

        {/* section title */}
        <div className='relative z-10 -mt-3 sm:-mt-8 text-center'>
          <h2 className='text-[18px] font-medium text-white'>
            Our Trendy plants
          </h2>
        </div>

        {/* first card */}
        <div
          className='relative z-10 mx-3 sm:mx-5 mt-8 overflow-hidden rounded-[32px] sm:rounded-[42px]'
          style={{
            background:
              'linear-gradient(135deg, rgba(32,52,32,0.55), rgba(14,22,14,0.82))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-6 sm:py-8'>
            <div className='relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] sm:-ml-6'>
              <Image
                src='/images/plant2.png'
                alt='plant'
                fill
                className='object-contain'
              />
            </div>

            <div className='flex-1 text-center sm:text-left'>
              <h3 className='mb-4 text-[15px] leading-6 text-white'>
                For Your Desks Decorations
              </h3>

              <p className='mb-2 text-[10px] leading-5 text-white/50'>
                We have a variety of plants that help improve your workplace atmosphere.
              </p>

              <Stars />

              <p className='mt-3 text-[18px] font-semibold text-white'>
                Rs. 599/-
              </p>

              <div className='mt-4 flex items-center justify-center gap-3 sm:justify-start'>
                <button className='rounded-xl border border-white/20 px-6 py-2 text-sm text-white'>
                  Explore
                </button>

                <button className='h-11 w-11 rounded-xl border border-white/20 text-lg text-white'>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* second card */}
        <div
          className='relative z-10 mx-3 sm:mx-5 mt-8 mb-12 overflow-hidden rounded-[32px] sm:rounded-[42px]'
          style={{
            background:
              'linear-gradient(135deg, rgba(32,52,32,0.55), rgba(14,22,14,0.82))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <div className='flex flex-col-reverse sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-6 sm:py-8'>
            <div className='text-center sm:text-left'>
              <h3 className='mb-4 text-[15px] leading-6 text-white'>
                For Your Desks Decorations
              </h3>

              <p className='mb-2 max-w-[150px] text-[10px] leading-5 text-white/50 mx-auto sm:mx-0'>
                Improve your work mood naturally with elegant indoor plants.
              </p>

              <Stars />

              <p className='mt-3 text-[18px] font-semibold text-white'>
                Rs. 399/-
              </p>

              <div className='mt-4 flex items-center justify-center gap-3 sm:justify-start'>
                <button className='rounded-xl border border-white/20 px-6 py-2 text-sm text-white'>
                  Explore
                </button>

                <button className='h-11 w-11 rounded-xl border border-white/20 text-lg text-white'>
                  +
                </button>
              </div>
            </div>

            <div className='relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px]'>
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