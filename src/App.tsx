import { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage'
import BestLolamaLandingPage from './pages/BestLolamaLandingPage'
import ContactPage from './pages/ContactPage'
import FranchisePage from './pages/FranchisePage'
import MenuPage from './pages/MenuPage'
import RecognitionAwardsPage from './pages/RecognitionAwardsPage'

type Page = 'home' | 'menu' | 'about' | 'franchise' | 'contact' | 'recognition-awards'

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
  const goRecognitionAwards = () => setPage('recognition-awards')

  if (page === 'menu') {
    return (
      <MenuPage
        onGoAbout={goAbout}
        onGoFranchise={goFranchise}
        onGoContact={goContact}
        onGoRecognitionAwards={goRecognitionAwards}
        onBackHome={goHome}
      />
    )
  }

  if (page === 'about') {
    return (
      <AboutPage
        onGoHome={goHome}
        onGoMenu={goMenu}
        onGoFranchise={goFranchise}
        onGoContact={goContact}
        onGoRecognitionAwards={goRecognitionAwards}
      />
    )
  }

  if (page === 'franchise') {
    return (
      <FranchisePage
        onGoHome={goHome}
        onGoMenu={goMenu}
        onGoAbout={goAbout}
        onGoContact={goContact}
        onGoRecognitionAwards={goRecognitionAwards}
      />
    )
  }

  if (page === 'contact') {
    return (
      <ContactPage
        onGoHome={goHome}
        onGoMenu={goMenu}
        onGoAbout={goAbout}
        onGoFranchise={goFranchise}
        onGoRecognitionAwards={goRecognitionAwards}
      />
    )
  }

  if (page === 'recognition-awards') {
    return (
      <RecognitionAwardsPage
        onGoHome={goHome}
        onGoMenu={goMenu}
        onGoAbout={goAbout}
        onGoFranchise={goFranchise}
        onGoContact={goContact}
      />
    )
  }

  return (
    <BestLolamaLandingPage
      onGoMenu={goMenu}
      onGoAbout={goAbout}
      onGoFranchise={goFranchise}
      onGoContact={goContact}
      onGoRecognitionAwards={goRecognitionAwards}
      onOpenMenuPage={goMenu}
    />
  )
}

export default App
