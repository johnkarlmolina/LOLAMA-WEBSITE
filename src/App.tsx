import { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage'
import BestLolamaLandingPage from './pages/BestLolamaLandingPage'
import ContactPage from './pages/ContactPage'
import FranchisePage from './pages/FranchisePage'
import MenuPage from './pages/MenuPage'

type Page = 'home' | 'menu' | 'about' | 'franchise' | 'contact'

function App() {
  const [page, setPage] = useState<Page>('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [page])

  const goHome = () => setPage('home')
  const goMenu = () => setPage('menu')
  const goAbout = () => setPage('about')
  const goFranchise = () => setPage('franchise')
  const goContact = () => setPage('contact')

  if (page === 'menu') {
    return <MenuPage onGoAbout={goAbout} onGoFranchise={goFranchise} onGoContact={goContact} onBackHome={goHome} />
  }

  if (page === 'about') {
    return <AboutPage onGoHome={goHome} onGoMenu={goMenu} onGoFranchise={goFranchise} onGoContact={goContact} />
  }

  if (page === 'franchise') {
    return <FranchisePage onGoHome={goHome} onGoMenu={goMenu} onGoAbout={goAbout} onGoContact={goContact} />
  }

  if (page === 'contact') {
    return <ContactPage onGoHome={goHome} onGoMenu={goMenu} onGoAbout={goAbout} onGoFranchise={goFranchise} />
  }

  return (
    <BestLolamaLandingPage
      onGoMenu={goMenu}
      onGoAbout={goAbout}
      onGoFranchise={goFranchise}
      onGoContact={goContact}
      onOpenMenuPage={goMenu}
    />
  )
}

export default App
