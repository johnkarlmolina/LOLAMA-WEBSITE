import emailjs from '@emailjs/browser'
import { Mail, Phone, Smartphone } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import Swal from 'sweetalert2'

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

type ContactEmailParams = {
  name: string
  email: string
  subject: string
  message: string
  time: string
  reply_to: string
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function buildContactEmailParams(formData: ContactFormData): ContactEmailParams {
  return {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    time: new Date().toLocaleString('en-PH'),
    reply_to: formData.email,
  }
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'email') {
      validateEmail(value)
    }
  }

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (email && !emailPattern.test(email)) {
      setEmailError('Please enter a valid email address (e.g., name@domain.com)')
      return false
    }

    setEmailError('')
    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateEmail(formData.email)) {
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        buildContactEmailParams(formData),
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setFormData({ name: '', email: '', subject: '', message: '' })
      setEmailError('')
      await Swal.fire({
        icon: 'success',
        title: 'Message sent!',
        text: 'Thanks for reaching out — our team will get back to you soon.',
        confirmButtonColor: '#3B1A0E',
        customClass: { popup: 'swal-compact-popup' },
      })
    } catch (error) {
      console.error('Failed to send message:', error)
      await Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: 'Please try again in a moment.',
        confirmButtonColor: '#3B1A0E',
        customClass: { popup: 'swal-compact-popup' },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
        <div className="rounded-4xl border border-amber-100 bg-[#3B1A0E] p-6 text-white shadow-2xl shadow-amber-900/10 sm:p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-200">Contact us</p>
          <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
            Let&apos;s talk about your Best Lolama franchise
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-amber-50/90 sm:text-[0.95rem]">
            Reach out for the latest franchise kit, site evaluation, and investment guidance. Our team can help you
            identify the right format for your location and target community.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 px-4 py-4">
              <Smartphone className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Phone</p>
                <p className="text-sm font-semibold sm:text-base">0916-697-6114</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-4">
              <Phone className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Telephone</p>
                <p className="text-sm font-semibold sm:text-base">046-437-8690</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-4">
              <Mail className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Email</p>
                <p className="whitespace-nowrap text-sm font-semibold">franchisebestlolama@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">General Franchise Manager</p>
            <p className="text-sm font-semibold sm:text-base">Cathleen Japson</p>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Website</p>
            <p className="whitespace-nowrap text-sm font-semibold sm:text-base">bestlolama.com</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'Facebook', href: 'https://www.facebook.com/best.lolama' },
              { label: 'Instagram', href: 'https://www.instagram.com/bestlolama' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@bestlolama' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-30 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 sm:flex-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-4xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">Send us a message</h3>
            <p className="text-xs text-amber-600">Fill out the form below and we&apos;ll get back to you</p>
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
                className="mt-1 w-full rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm text-[#3B1A0E] placeholder:text-[#6e3d25]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
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
                className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm text-[#3B1A0E] placeholder:text-[#6e3d25]/50 focus:outline-none focus:ring-2 transition-all duration-200 ${
                  emailError
                    ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-red-200/70'
                    : 'border-amber-100 bg-white focus:border-amber-500 focus:ring-amber-200/70'
                }`}
                placeholder="Enter your email address"
              />
              {emailError && <p className="mt-1 text-xs text-red-600">{emailError}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-[#3B1A0E]">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm text-[#3B1A0E] placeholder:text-[#6e3d25]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                placeholder="What's this about?"
              />
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
                className="mt-1 w-full resize-none rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm text-[#3B1A0E] placeholder:text-[#6e3d25]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                placeholder="Tell us about your franchise interest..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !!emailError}
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
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection