import { Showroom } from './components/Showroom'
import { Details } from './components/sections/Details'
import { About } from './components/sections/About'
import { Conditions } from './components/sections/Conditions'
import { Clients } from './components/sections/Clients'
import { FinalCta } from './components/sections/FinalCta'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <>
      <Showroom />
      <main>
        <Details />
        <About />
        <Conditions />
        <Clients />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
