import { FAQ } from '@/app/components/FAQ'
import { HeroSection } from '@/app/components/HeroSection'
import { HowItWorks } from '@/app/components/HowItWorks'
import { RiskManagement } from '@/app/components/RiskManagement'
import { Stats } from '@/app/components/Stats'
import { Testimonials } from '@/app/components/Testimonials'
import { TrustBadges } from '@/app/components/TrustBadges'
import { WhyChooseUs } from '@/app/components/WhyChooseUs'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { TranslatorProvider } from '../context/TranslatorContext'

export default function App () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900'>
      <nav
        className='fixed top-0 left-0 right-0 z-50 bg-white

'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center gap-2'>
              <img
                src='https://biti-code.com/lander/the-biticodes---japan-funnel/media/670/conversions/45__655f0fae29d74_thebiticodes-logo.png'
                className='w-32 h-10'
                alt='The Biticodes Logo'
              />
            </div>
            <div className='hidden md:flex items-center text-sm gap-8'>
              <a
                href='#HeroSection'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('HeroSection')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                HeroSection
              </a>
              <a
                href='#TrustBadges
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('TrustBadges')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                TrustBadges
              </a>
              <a
                href='#Stats
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('Stats')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                Stats
              </a>
              <a
                href='#HowItWorks
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('HowItWorks')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                HowItWorks
              </a>
              <a
                href='#WhyChooseUs
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('WhyChooseUs')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                WhyChooseUs
              </a>
              <a
                href='#RiskManagement
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('RiskManagement')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary  hover:text-black transition-colors'
              >
                RiskManagement
              </a>
              <a
                href='#Testimonials

'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('Testimonials')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                Testimonials
              </a>

              <a
                href='#FAQ


'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('FAQ')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section with Form in Top Right */}
      <div className='container mx-auto px-4 py-8 mt-10'>
        <div
          id='HeroSection'
          className='grid lg:grid-cols-[1fr,350px] gap-8 items-start'
        >
          <TranslatorProvider>
            {/* Left Side - Hero Content */}
            <HeroSection />
          </TranslatorProvider>
          {/* Right Side - Form (Sticky Top Right) */}
          {/* <InvestmentForm /> */}
        </div>
      </div>
      {/* Trust Badges */}
      <div id='TrustBadges'>
        <TrustBadges />
      </div>
      {/* Stats Section */}
      <div id='Stats'>
        <Stats />
      </div>
      {/* How It Works Section */};
      <div id='HowItWorks'>
        <HowItWorks />
      </div>
      {/* Why Choose Us */}
      <div id='WhyChooseUs'>
        <WhyChooseUs />
      </div>
      {/* Risk Management */}
      <div id='RiskManagement'>
        <RiskManagement />
      </div>
      {/* Testimonials Section */};
      <div id='Testimonials'>
        <Testimonials />
      </div>
      {/* FAQ Section */}
      <div id='FAQ'>
        <FAQ />
      </div>
    </div>
  )
}
