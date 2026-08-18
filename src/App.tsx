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

  useEffect(() => {
    const handlePopState = () => {
      const previousPage = (window.history.state as { page?: Page } | null)?.page ?? 'home'
      setPage(previousPage)
      setContactScrollTarget('top')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (!window.history.state || (window.history.state as { page?: Page } | null)?.page !== page) {
      window.history.replaceState({ page }, '', `#${page}`)
    }
  }, [page])

  const navigateToPage = (nextPage: Page, nextTarget: ContactScrollTarget = 'top') => {
    if (nextPage === 'contact') {
      setContactScrollTarget(nextTarget)
    }

    if (window.history.state && (window.history.state as { page?: Page } | null)?.page === nextPage) {
      setPage(nextPage)
      return
    }

    window.history.pushState({ page: nextPage }, '', `#${nextPage}`)
    setPage(nextPage)
  }

  const goHome = () => navigateToPage('home')
  const goMenu = () => navigateToPage('menu')
  const goAbout = () => navigateToPage('about')
  const goFranchise = () => navigateToPage('franchise')
  const goContact = () => navigateToPage('contact', 'top')
  const goRecognitionAwards = () => navigateToPage('recognition-awards')
  const goFranchiseNow = () => navigateToPage('contact', 'contact-form')

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
