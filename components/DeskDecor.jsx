import Image from 'next/image'
import Link from 'next/link'

export default function DeskDecor() {
  return (
    <section
      className='relative py-10 overflow-hidden'
      style={{
        background:
          'linear-gradient(to bottom, #0a160a 0%, #081208 100%)',
      }}
    >
      {/* background glow */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-10 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-green-500/10 blur-[140px]' />
      </div>

      <div className='relative z-10 max-w-[480px] mx-auto px-5'>

        <div
          className='relative rounded-[42px] overflow-hidden'
          style={{
            background:
              'linear-gradient(135deg, rgba(34,50,34,0.58), rgba(12,18,12,0.92))',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <div className='grid grid-cols-2 items-center gap-4 px-6 py-8'>

            {/* image */}
            <div className='relative flex justify-center'>
              <div className='relative w-[200px] h-[200px]'>
                <Image
                  src='/images/plant2.png'
                  alt='Desk decoration plant'
                  fill
                  className='object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.75)]'
                />
              </div>
            </div>

            {/* content */}
            <div>
              <h2 className='text-white text-[18px] leading-8 font-semibold mb-4'>
                For Your Desks Decorations
              </h2>

              <p className='text-white/50 text-[11px] leading-5 mb-4'>
                I recently added a beautiful desk decoration plant to my workspace,
                and it has made such a positive difference!
              </p>

              <p className='text-white text-[30px] font-semibold mb-5'>
                Rs. 599/-
              </p>

              <div className='flex items-center gap-3'>
                <Link
                  href='/desk-plants'
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

          </div>
        </div>
      </div>
    </section>
  )
}