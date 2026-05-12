import Image from 'next/image'

const plants = [
  {
    id: 1,
    name: 'Aglaonema plant',
    price: 'Rs. 300/-',
    image: '/images/plant4.png',
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    price: 'Rs. 350/-',
    image: '/images/plant2.png',
  },
  {
    id: 3,
    name: 'Cactus',
    price: 'Rs. 250/-',
    image: '/images/plant3.png',
  },
]

export default function TrendyPlants() {
  return (
    <section
      className='relative py-16 overflow-hidden'
      style={{
        background:
          'linear-gradient(to bottom, #071207 0%, #0a160a 100%)',
      }}
    >
      {/* glow */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-green-500/10 blur-[140px]' />
      </div>

      <div className='relative z-10 max-w-[480px] mx-auto px-5'>

        {/* heading */}
        <div className='text-center mb-12'>
          <h2 className='text-white text-[30px] font-semibold tracking-tight'>
            Our Top Selling Plants
          </h2>

          <div className='w-24 h-[2px] bg-green-400/40 mx-auto mt-3 rounded-full' />
        </div>

        {/* cards */}
        <div className='grid grid-cols-3 gap-4'>
          {plants.map((plant) => (
            <div
              key={plant.id}
              className='relative rounded-[28px] overflow-hidden pt-6 pb-5'
              style={{
                background:
                  'linear-gradient(180deg, rgba(34,50,34,0.65), rgba(14,22,14,0.92))',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* image */}
              <div className='relative w-full h-[130px] flex justify-center'>
                <Image
                  src={plant.image}
                  alt={plant.name}
                  width={120}
                  height={120}
                  className='object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]'
                />
              </div>

              {/* content */}
              <div className='px-3 mt-3'>
                <h3 className='text-white text-[12px] leading-5 min-h-[40px]'>
                  {plant.name}
                </h3>

                <p className='text-white/60 text-[11px] mt-1'>
                  {plant.price}
                </p>

                <button
                  className='mt-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm'
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}