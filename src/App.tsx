import { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage'
import BestLolamaLandingPage from './pages/BestLolamaLandingPage'
import ContactPage from './pages/ContactPage'
import FranchisePage from './pages/FranchisePage'
import MenuPage from './pages/MenuPage'
import RecognitionAwardsPage from './pages/RecognitionAwardsPage'

type Page = 'home' | 'menu' | 'about' | 'franchise' | 'contact' | 'recognition-awards'
type ContactScrollTarget = 'top' | 'contact-form'

function App() {
  const [page, setPage] = useState<Page>('home')
  const [contactScrollTarget, setContactScrollTarget] = useState<ContactScrollTarget>('top')

  useEffect(() => {
    if (page === 'contact' && contactScrollTarget === 'contact-form') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [page, contactScrollTarget])

  const goHome = () => setPage('home')
  const goMenu = () => setPage('menu')
  const goAbout = () => setPage('about')
  const goFranchise = () => setPage('franchise')
  const goContact = () => {
    setContactScrollTarget('top')
    setPage('contact')
  }
  const goRecognitionAwards = () => setPage('recognition-awards')
  const goFranchiseNow = () => {
    setContactScrollTarget('contact-form')
    setPage('contact')
  }

  if (page === 'menu') {
    return (
      <MenuPage
        onGoAbout={goAbout}
        onGoFranchise={goFranchise}
        onGoContact={goContact}
        onGoRecognitionAwards={goRecognitionAwards}
        onFranchiseNowClick={goFranchiseNow}
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
        onFranchiseNowClick={goFranchiseNow}
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
        onFranchiseNowClick={goFranchiseNow}
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
        onFranchiseNowClick={goFranchiseNow}
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
        onFranchiseNowClick={goFranchiseNow}
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
      onFranchiseNowClick={goFranchiseNow}
      onOpenMenuPage={goMenu}
    />
  )
}

export default App
