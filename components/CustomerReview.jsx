import Image from 'next/image'

const reviews = [
  {
    id: 1,
    name: 'Rosie Harold',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text:
      'Very beautiful plant. Delivery was smooth and packaging was excellent.',
  },
  {
    id: 2,
    name: 'Daniel James',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    text:
      'The quality exceeded my expectations. It instantly improved my workspace.',
  },
  {
    id: 3,
    name: 'Sophia Lee',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    text:
      'Elegant design and healthy plants. I will definitely order again.',
  },
]

function Stars() {
  return (
    <div className='flex items-center gap-1 mt-2'>
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className='text-yellow-400 text-xs'
        >
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div
      className='relative rounded-[32px] p-5 overflow-hidden'
      style={{
        background:
          'linear-gradient(135deg, rgba(34,52,34,0.55), rgba(14,22,14,0.88))',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px)',
      }}
    >
      {/* glow */}
      <div className='absolute -top-10 -right-10 w-24 h-24 rounded-full bg-green-500/10 blur-3xl' />

      <div className='relative z-10'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-12 h-12 rounded-full overflow-hidden'>
            <Image
              src={review.image}
              alt={review.name}
              width={48}
              height={48}
              className='object-cover'
            />
          </div>

          <div>
            <p className='text-white text-sm font-medium'>
              {review.name}
            </p>

            <Stars />
          </div>
        </div>

        <p className='text-white/50 text-[11px] leading-5'>
          {review.text}
        </p>
      </div>
    </div>
  )
}

export default function CustomerReview() {
  return (
    <section
      className='relative py-14 overflow-hidden'
      style={{
        background:
          'linear-gradient(to bottom, #071207 0%, #091509 100%)',
      }}
    >
      {/* background glow */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-green-500/10 blur-[140px]' />
      </div>

      <div className='relative z-10 max-w-[480px] mx-auto px-5'>

        {/* heading */}
        <div className='text-center mb-10'>
          <h2 className='text-white text-[28px] font-semibold tracking-tight'>
            Customer Reviews
          </h2>

          <p className='text-white/45 text-[11px] mt-2'>
            What our customers say about our plants
          </p>
        </div>

        {/* cards */}
        <div className='grid gap-5'>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}