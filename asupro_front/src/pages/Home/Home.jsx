import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Base from '../../layout/Base'

function Home() {
  return (
    <Base title="Asupro | Página Principal">
      <Navbar />
      <Hero />
    </Base>
  )
}

export default Home