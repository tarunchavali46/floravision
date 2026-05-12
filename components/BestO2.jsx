import Image from 'next/image'
import Link from 'next/link'

export default function BestO2() {
  return (
    <section
      className='relative py-10 overflow-hidden'
      style={{
        background:
          'linear-gradient(to bottom, #081208 0%, #071207 100%)',
      }}
    >
      {/* background glow */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-green-500/10 blur-[140px]' />
      </div>

      <div className='relative z-10 max-w-[480px] mx-auto px-5'>

        {/* heading */}
        <div className='mb-8'>
          <h2 className='text-white text-[28px] font-semibold tracking-tight'>
            Our Best O2
          </h2>

          <p className='text-white/45 text-[11px] mt-2 leading-5 max-w-[260px]'>
            Beautiful oxygen producing plants for healthier and cleaner indoor spaces.
          </p>
        </div>

        {/* card */}
        <div
          className='relative rounded-[42px] overflow-hidden'
          style={{
            background:
              'linear-gradient(135deg, rgba(34,52,34,0.58), rgba(12,18,12,0.92))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <div className='grid grid-cols-2 items-center gap-4 px-6 py-8'>

            {/* content */}
            <div>
              <h3 className='text-white text-[18px] leading-8 font-semibold mb-4'>
                We Have Small And Best O2 Plants Collection.
              </h3>

              <p className='text-white/50 text-[11px] leading-5 mb-5'>
                Oxygen-producing plants improve indoor air quality and create
                a refreshing natural atmosphere in your home or workspace.
              </p>

              <div className='flex items-center gap-3'>
                <Link
                  href='/o2-plants'
                  className='px-6 py-2.5 rounded-xl text-white text-sm border border-white/20 hover:bg-white/5 transition'
                >
                  Explore
                </Link>

                <button
                  className='w-11 h-11 rounded-xl text-white text-lg'
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* image */}
            <div className='relative flex justify-center'>
              <div className='relative w-[210px] h-[210px]'>
                <Image
                  src='/images/plant4.png'
                  alt='Best O2 plant'
                  fill
                  className='object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.75)]'
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}