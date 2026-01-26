import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'
import { Shield, Sparkles, TrendingUp, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { InvestmentForm } from './InvestmentForm'
export function HeroSection () {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className='text-white space-y-8'
    >
      <div className='flex flex-col md:flex-row gap-2 my-10'>
        <div className='w-full md:w-[50%]'>
          {' '}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='inline-block bg-violet-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-violet-400/50'
          >
            <span className='text-violet-200 text-sm font-semibold'>
              ✨ #1 Forex Investment Platform 2024
            </span>
          </motion.div>
          <h1 className='text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent'>
            Master Forex Investing & Maximize Your Returns
          </h1>
          <p className='text-xl text-violet-100 mb-8 leading-relaxed'>
            <span className='font-semibold text-white'>
              Just Invest, We handle the rest.
            </span>
<br></br>            Join thousands of successful investors who trust our expert trading
            team. Simply invest and let our professional traders do all the
            work. Consistent daily profits, minimal effort, maximum growth.
          </p>
        </div>
        <div
          className='w-full md:w-[50%] text-gray-700
 p-6'
        >
          <InvestmentForm />
        </div>
      </div>
      {/* Main Trading Image */}
      <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
        <ImageWithFallback
          src='https://images.unsplash.com/photo-1638481826540-7710b13f7d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFkaW5nJTIwZ3JhcGhzfGVufDF8fHx8MTc2OTQyNzM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
          alt='Forex Trading Charts'
          className='w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
        <div className='absolute bottom-6 left-6 right-6'>
          <div className='flex items-center gap-2 mb-2'>
            <TrendingUp className='size-5 text-green-400' />
            <p className='text-white font-bold text-lg'>
              Live Performance: +32% This Month
            </p>
          </div>
          <p className='text-green-400 text-sm'>
            Real-time trading data • Updated every second
          </p>
        </div>
      </div>

      {/* Secondary Trading Images Grid */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='relative rounded-xl overflow-hidden shadow-lg group'>
          <ImageWithFallback
            src='https://images.unsplash.com/photo-1767424196045-030bbde122a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JleCUyMHRyYWRpbmclMjBjaGFydHMlMjBzY3JlZW58ZW58MXx8fHwxNzY5NDI3Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            alt='Forex Trading Analysis'
            className='w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
          <div className='absolute bottom-3 left-3 right-3'>
            <p className='text-white font-semibold text-sm'>
              📊 Advanced Analytics
            </p>
          </div>
        </div>

        <div className='relative rounded-xl overflow-hidden shadow-lg group'>
          <ImageWithFallback
            src='https://images.unsplash.com/photo-1768055104895-e6185762f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmclMjBkZXNrfGVufDF8fHx8MTc2OTQyNzM3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            alt='Professional Trading Desk'
            className='w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
          <div className='absolute bottom-3 left-3 right-3'>
            <p className='text-white font-semibold text-sm'>
              💻 Expert Traders
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-5 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105'
        >
          <Sparkles className='size-8 text-green-400 mb-2' />
          <h3 className='text-lg font-semibold mb-1'>High Returns</h3>
          <p className='text-violet-200 text-sm'>
            Average 15-40% monthly returns with our expert trading team
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-5 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105'
        >
          <Zap className='size-8 text-blue-400 mb-2' />
          <h3 className='text-lg font-semibold mb-1'>Zero Effort</h3>
          <p className='text-violet-200 text-sm'>
            We trade for you 24/7. Just sit back and watch your profits grow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-xl p-5 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105'
        >
          <Shield className='size-8 text-purple-400 mb-2' />
          <h3 className='text-lg font-semibold mb-1'>100% Secure</h3>
          <p className='text-violet-200 text-sm'>
            Bank-level security and encryption protecting your investments 24/7
          </p>
        </motion.div>
      </div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='flex flex-wrap gap-4 items-center'
      >
        <div className='flex -space-x-2'>
          <div className='size-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ring-2 ring-white'></div>
          <div className='size-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 ring-2 ring-white'></div>
          <div className='size-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 ring-2 ring-white'></div>
          <div className='size-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 ring-2 ring-white flex items-center justify-center text-xs font-bold text-white'>
            +10K
          </div>
        </div>
        <div>
          <p className='text-white font-semibold'>10,000+ Happy Investors</p>
          <p className='text-violet-200 text-sm'>
            Join our growing community today
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
