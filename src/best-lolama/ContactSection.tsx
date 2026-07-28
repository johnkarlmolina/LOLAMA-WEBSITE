import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Validate email while typing
    if (name === 'email') {
      validateEmail(value)
    }
  }

  const validateEmail = (email) => {
    // Basic email validation pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (email && !emailPattern.test(email)) {
      setEmailError('Please enter a valid email address (e.g., name@domain.com)')
      return false
    } else {
      setEmailError('')
      return true
    }
  }

  const validatePhoneNumber = (phone) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '')
    
    // Philippine mobile number pattern - 11 digits starting with 09
    const isValid = /^09\d{9}$/.test(cleanPhone)
    
    return isValid
  }

  // Real-time phone validation while typing
  const handlePhoneChange = (e) => {
    const value = e.target.value
    // Allow only digits
    const formatted = value.replace(/\D/g, '')
    setFormData(prev => ({ ...prev, phone: formatted }))
    
    // Real-time validation
    if (formatted.length > 0) {
      const isValid = validatePhoneNumber(formatted)
      
      if (!isValid) {
        if (formatted.length < 11) {
          setPhoneError(`Need ${11 - formatted.length} more digit(s) (format: 09XXXXXXXXX)`)
        } else if (!formatted.startsWith('09')) {
          setPhoneError('Must start with 09 (e.g., 09161234567)')
        } else {
          setPhoneError('Please enter a valid 11-digit Philippine mobile number (09XXXXXXXXX)')
        }
      } else {
        setPhoneError('')
      }
    } else {
      setPhoneError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate email before submitting
    if (!validateEmail(formData.email)) {
      return
    }
    
    // Validate phone before submitting
    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      setPhoneError('Please enter a valid Philippine mobile number')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setPhoneError('')
      setEmailError('')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
        {/* Left Card - Contact Info */}
        <div className="rounded-[2rem] border border-amber-100 bg-[#3B1A0E] p-6 text-white shadow-2xl shadow-amber-900/10 sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-200">Contact us</p>
          <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
            Let's talk about your Best Lolama franchise
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-amber-50/90 sm:text-[0.95rem]">
            Reach out for the latest franchise kit, site evaluation, and investment guidance. Our team can help you
            identify the right format for your location and target community.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:09166976114"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 transition hover:bg-white/15"
            >
              <Phone className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Phone</p>
                <p className="font-semibold text-sm sm:text-base">0916-697-6114</p>
              </div>
            </a>
            <a
              href="mailto:franchisebestlolama@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 transition hover:bg-white/15"
            >
              <Mail className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Email</p>
                <p className="break-all font-semibold text-sm sm:text-base">franchisebestlolama@gmail.com</p>
              </div>
            </a>
          </div>

          {/* General Franchise Manager */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">
              General Franchise Manager
            </p>
            <p className="font-semibold text-sm sm:text-base">Cathlenn Japson</p>
          </div>

          {/* Website */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Website</p>
            <a
              href="https://bestlolama.com.ph"
              className="inline-block break-all font-semibold text-sm text-white hover:text-amber-200 sm:text-base"
            >
              bestlolama.com.ph
            </a>
          </div>

          {/* Social media links */}
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'Facebook', href: 'https://www.facebook.com/best.lolama' },
              { label: 'Instagram', href: 'https://www.instagram.com/bestlolama' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@bestlolama' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[7.5rem] flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 sm:flex-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Send us a message</h3>
            <p className="text-xs text-amber-600">Fill out the form below and we'll get back to you</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#3B1A0E]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-amber-300 bg-amber-50/50 px-4 py-3 text-sm text-[#3B1A0E] placeholder:text-amber-400/70 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#3B1A0E]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm text-[#3B1A0E] placeholder:text-amber-400/70 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  emailError 
                    ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-red-200/70' 
                    : 'border-amber-300 bg-amber-50/50 focus:border-amber-500 focus:bg-white focus:ring-amber-200/70'
                }`}
                placeholder="Enter your email address"
              />
              {emailError && (
                <p className="mt-1 text-xs text-red-600">{emailError}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#3B1A0E]">
                Phone Number <span className="text-xs font-normal text-amber-500">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                maxLength={11}
                className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm text-[#3B1A0E] placeholder:text-amber-400/70 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  phoneError 
                    ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-red-200/70' 
                    : 'border-amber-300 bg-amber-50/50 focus:border-amber-500 focus:bg-white focus:ring-amber-200/70'
                }`}
                placeholder="09161234567"
              />
              
              {phoneError && (
                <p className="mt-1 text-xs text-red-600">{phoneError}</p>
              )}
              
              <p className="mt-1 text-xs text-amber-400">Must be 11 digits starting with 09 (e.g., 09161234567)</p>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#3B1A0E]">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 w-full resize-none rounded-xl border border-amber-300 bg-amber-50/50 px-4 py-3 text-sm text-[#3B1A0E] placeholder:text-amber-400/70 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                placeholder="Tell us about your franchise interest..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !!phoneError || !!emailError}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3B1A0E] px-6 py-3.5 font-semibold text-white transition hover:bg-[#5b2d18] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                <span className="text-lg">✓</span>
                <p className="text-sm font-medium">Your message has been sent successfully!</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                <span className="text-lg">✗</span>
                <p className="text-sm font-medium">Something went wrong. Please try again.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection