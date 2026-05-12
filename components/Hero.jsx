import Image from 'next/image'
import Link from 'next/link'

function Stars() {
  return (
    <div className='flex items-center gap-1 mt-3'>
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className='text-yellow-400 text-sm'
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className='min-h-screen flex justify-center items-start px-2 sm:px-4 py-3 sm:py-6 overflow-hidden'
      style={{
        background:
          'radial-gradient(circle at top, rgba(31,58,31,0.22), transparent 28%), #071207',
      }}
    >
      <div
        className='relative w-full max-w-[480px] mx-auto rounded-[30px] sm:rounded-[34px] overflow-hidden'
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,22,10,0.97), rgba(5,15,5,0.98))',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 20px 80px rgba(0,0,0,0.65)',
        }}
      >
        {/* glow */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-[240px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-green-500/20 blur-[120px]' />
        </div>

        {/* navbar */}
        <div className='relative z-10 flex items-center justify-between px-4 sm:px-5 pt-5'>
          <div className='flex items-center gap-2'>
            <div className='w-5 h-5 rounded-full bg-green-500' />

            <p className='text-white font-semibold tracking-[0.2em] text-[10px] sm:text-[11px]'>
              FLORAVISION
            </p>
          </div>

          {/* desktop nav */}
          <div className='hidden md:flex items-center gap-3 text-white/80 text-[9px]'>
            <span>Home</span>
            <span>Plant Type</span>
            <span>More</span>
            <span>Contact</span>
          </div>

          <div className='flex items-center gap-3 sm:gap-4 text-white text-sm'>
            <span>⌕</span>
            <span>☰</span>
          </div>
        </div>

        {/* hero */}
        <div className='relative z-10 px-4 sm:px-5 pt-8 sm:pt-10'>
          <h1 className='font-serif text-white text-[52px] sm:text-[58px] leading-[0.88] tracking-tight max-w-[240px] sm:max-w-[280px]'>
            Earth&apos;s Exhale
          </h1>

          <p className='text-white/55 text-[11px] leading-5 max-w-[250px] mt-4'>
            Earth&apos;s Exhale introduces the glory and vitality of the Earth&apos;s
            natural world. Explore a wide variety of plants curated for your home.
          </p>

          <div className='flex items-center gap-3 sm:gap-4 mt-5 flex-wrap'>
            <Link
              href='/shop'
              className='px-5 sm:px-6 py-3 border border-white/20 rounded-xl text-white text-sm hover:bg-white/5 transition'
            >
              Buy Now
            </Link>

            <button className='w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center text-white'>
              ▶
            </button>

            <span className='text-white/70 text-sm'>
              Learn more
            </span>
          </div>
        </div>

        {/* floating tag */}
        <div
          className='absolute top-[170px] sm:top-[150px] right-3 sm:right-5 z-20 rounded-[22px] sm:rounded-[26px] px-4 sm:px-6 py-4 sm:py-5 w-[180px] sm:w-[220px]'
          style={{
            background: 'rgba(20,34,20,0.6)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(18px)',
          }}
        >
          <p className='text-white/70 text-[11px] sm:text-xs mb-2'>
            Indoor Plant
          </p>

          <h3 className='text-white text-[14px] sm:text-[17px] leading-6 mb-4'>
            Aglaonema plant
          </h3>

          <button className='border border-white/20 rounded-lg px-4 sm:px-5 py-2 text-white text-sm'>
            Buy Now
          </button>
        </div>

        {/* review card */}
        <div
          className='absolute left-3 sm:left-5 top-[390px] sm:top-[350px] z-20 w-[140px] sm:w-[150px] rounded-[24px] p-4'
          style={{
            background: 'rgba(35,45,35,0.45)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-9 h-9 rounded-full overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
                alt='review'
                width={36}
                height={36}
                className='object-cover'
              />
            </div>

            <div>
              <p className='text-white text-[11px]'>
                Rosie Harold
              </p>

              <div className='flex text-yellow-400 text-[9px]'>
                ★★★★★
              </div>
            </div>
          </div>

          <p className='text-white/45 text-[10px] leading-4'>
            Very beautiful plant. Delivery was smooth and packaging was excellent.
          </p>
        </div>

        {/* center plant */}
        <div className='relative z-10 flex justify-center mt-4 sm:-mt-10'>
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

        {/* trendy title */}
        <div className='relative z-10 text-center -mt-3 sm:-mt-8'>
          <h2 className='text-white text-[18px] font-medium'>
            Our Trendy plants
          </h2>
        </div>

        {/* first card */}
        <div
          className='relative z-10 mx-3 sm:mx-5 mt-8 rounded-[32px] sm:rounded-[42px] overflow-hidden'
          style={{
            background:
              'linear-gradient(135deg, rgba(32,52,32,0.55), rgba(14,22,14,0.82))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <div className='flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-6 sm:py-8 gap-4'>
            <div className='relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] sm:-ml-6'>
              <Image
                src='/images/plant2.png'
                alt='plant'
                fill
                className='object-contain'
              />
            </div>

            <div className='flex-1 text-center sm:text-left'>
              <h3 className='text-white text-[15px] leading-6 mb-4'>
                For Your Desks Decorations
              </h3>

              <p className='text-white/50 text-[10px] leading-5 mb-2'>
                We have a variety of plants that help improve your workplace atmosphere.
              </p>

              <Stars />

              <p className='text-white text-[18px] font-semibold mt-3'>
                Rs. 599/-
              </p>

              <div className='flex items-center justify-center sm:justify-start gap-3 mt-4'>
                <button className='border border-white/20 rounded-xl px-6 py-2 text-white text-sm'>
                  Explore
                </button>

                <button className='w-11 h-11 rounded-xl border border-white/20 text-white text-lg'>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* second card */}
        <div
          className='relative z-10 mx-3 sm:mx-5 mt-8 mb-12 rounded-[32px] sm:rounded-[42px] overflow-hidden'
          style={{
            background:
              'linear-gradient(135deg, rgba(32,52,32,0.55), rgba(14,22,14,0.82))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <div className='flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-6 py-6 sm:py-8 gap-4'>
            <div className='text-center sm:text-left'>
              <h3 className='text-white text-[15px] leading-6 mb-4'>
                For Your Desks Decorations
              </h3>

              <p className='text-white/50 text-[10px] leading-5 mb-2 max-w-[150px] mx-auto sm:mx-0'>
                Improve your work mood naturally with elegant indoor plants.
              </p>

              <Stars />

              <p className='text-white text-[18px] font-semibold mt-3'>
                Rs. 399/-
              </p>

              <div className='flex items-center justify-center sm:justify-start gap-3 mt-4'>
                <button className='border border-white/20 rounded-xl px-6 py-2 text-white text-sm'>
                  Explore
                </button>

                <button className='w-11 h-11 rounded-xl border border-white/20 text-white text-lg'>
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