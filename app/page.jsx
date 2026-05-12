import Hero from '../components/Hero'
import TrendyPlants from '../components/TrendyPlants'
import DeskDecor from '../components/DeskDecor'
import BestO2 from '../components/BestO2'
import CustomerReview from '../components/CustomerReview'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendyPlants />
      <DeskDecor />
      <BestO2 />
      <CustomerReview />
      <Footer />
    </main>
  )
}