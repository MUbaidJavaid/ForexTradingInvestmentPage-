import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Check, Lock, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'
import { Fragment, useState } from 'react'

export function InvestmentForm () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+1',
    label: '🇺🇸 United States'
  })
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const countryCodes = [
    { code: '+1', label: '🇺🇸 United States' },
    { code: '+7', label: '🇷🇺 Russia' },
    { code: '+20', label: '🇪🇬 Egypt' },
    { code: '+27', label: '🇿🇦 South Africa' },
    { code: '+30', label: '🇬🇷 Greece' },
    { code: '+31', label: '🇳🇱 Netherlands' },
    { code: '+32', label: '🇧🇪 Belgium' },
    { code: '+33', label: '🇫🇷 France' },
    { code: '+34', label: '🇪🇸 Spain' },
    { code: '+36', label: '🇭🇺 Hungary' },
    { code: '+39', label: '🇮🇹 Italy' },
    { code: '+40', label: '🇷🇴 Romania' },
    { code: '+41', label: '🇨🇭 Switzerland' },
    { code: '+43', label: '🇦🇹 Austria' },
    { code: '+44', label: '🇬🇧 United Kingdom' },
    { code: '+45', label: '🇩🇰 Denmark' },
    { code: '+46', label: '🇸🇪 Sweden' },
    { code: '+47', label: '🇳🇴 Norway' },
    { code: '+48', label: '🇵🇱 Poland' },
    { code: '+49', label: '🇩🇪 Germany' },
    { code: '+51', label: '🇵🇪 Peru' },
    { code: '+52', label: '🇲🇽 Mexico' },
    { code: '+53', label: '🇨🇺 Cuba' },
    { code: '+54', label: '🇦🇷 Argentina' },
    { code: '+55', label: '🇧🇷 Brazil' },
    { code: '+56', label: '🇨🇱 Chile' },
    { code: '+57', label: '🇨🇴 Colombia' },
    { code: '+58', label: '🇻🇪 Venezuela' },
    { code: '+60', label: '🇲🇾 Malaysia' },
    { code: '+61', label: '🇦🇺 Australia' },
    { code: '+62', label: '🇮🇩 Indonesia' },
    { code: '+63', label: '🇵🇭 Philippines' },
    { code: '+64', label: '🇳🇿 New Zealand' },
    { code: '+65', label: '🇸🇬 Singapore' },
    { code: '+66', label: '🇹🇭 Thailand' },
    { code: '+81', label: '🇯🇵 Japan' },
    { code: '+82', label: '🇰🇷 South Korea' },
    { code: '+84', label: '🇻🇳 Vietnam' },
    { code: '+86', label: '🇨🇳 China' },
    { code: '+90', label: '🇹🇷 Turkey' },
    { code: '+91', label: '🇮🇳 India' },
    { code: '+92', label: '🇵🇰 Pakistan' },
    { code: '+93', label: '🇦🇫 Afghanistan' },
    { code: '+94', label: '🇱🇰 Sri Lanka' },
    { code: '+95', label: '🇲🇲 Myanmar' },
    { code: '+98', label: '🇮🇷 Iran' },
    { code: '+212', label: '🇲🇦 Morocco' },
    { code: '+213', label: '🇩🇿 Algeria' },
    { code: '+216', label: '🇹🇳 Tunisia' },
    { code: '+218', label: '🇱🇾 Libya' },
    { code: '+220', label: '🇬🇲 Gambia' },
    { code: '+221', label: '🇸🇳 Senegal' },
    { code: '+222', label: '🇲🇷 Mauritania' },
    { code: '+223', label: '🇲🇱 Mali' },
    { code: '+224', label: '🇬🇳 Guinea' },
    { code: '+225', label: '🇨🇮 Ivory Coast' },
    { code: '+226', label: '🇧🇫 Burkina Faso' },
    { code: '+227', label: '🇳🇪 Niger' },
    { code: '+228', label: '🇹🇬 Togo' },
    { code: '+229', label: '🇧🇯 Benin' },
    { code: '+230', label: '🇲🇺 Mauritius' },
    { code: '+231', label: '🇱🇷 Liberia' },
    { code: '+232', label: '🇸🇱 Sierra Leone' },
    { code: '+233', label: '🇬🇭 Ghana' },
    { code: '+234', label: '🇳🇬 Nigeria' },
    { code: '+235', label: '🇹🇩 Chad' },
    { code: '+236', label: '🇨🇬 Republic of the Congo' },
    { code: '+237', label: '🇨🇲 Cameroon' },
    { code: '+238', label: '🇨🇻 Cape Verde' },
    { code: '+239', label: '🇸🇹 Sao Tome & Principe' },
    { code: '+240', label: '🇬🇶 Equatorial Guinea' },
    { code: '+241', label: '🇬🇦 Gabon' }
    // … aur countries add kar sakte ho
  ]

  const filteredCountries =
    query === ''
      ? countryCodes
      : countryCodes.filter(
          c =>
            c.label.toLowerCase().includes(query.toLowerCase()) ||
            c.code.includes(query)
        )

  const handleCountrySelect = (
    country: { code: string; label: string } | null
  ) => {
    if (!country) return
    setSelectedCountry(country)
    setFormData({ ...formData, countryCode: country.code })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white rounded-xl shadow-2xl p-6 lg:sticky lg:top-4'
    >
      <div className='text-center mb-4'>
        <div className='bg-gradient-to-r from-violet-600 to-fuchsia-600 p-2.5 rounded-full inline-block mb-2'>
          <TrendingUp className='size-6 text-white' />
        </div>
        <h2 className='text-xl font-bold text-slate-900 mb-1'>
          Start Investing
        </h2>
        <p className='text-slate-600 text-xs'>Join 10,000+ investors</p>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='mb-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2'
        >
          <Check className='size-4 text-green-600' />
          <p className='text-green-800 text-xs font-medium'>
            We'll contact you soon!
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className='space-y-3 px-6'>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
          className='w-full px-3 py-2.5 border text-gray-500 border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition text-sm'
          placeholder='First Name'
        />
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
          className='w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition text-sm'
          placeholder='Last Name'
        />
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition text-sm'
          placeholder='Email Address'
        />

        {/* Searchable Country + Phone Input */}
        <div className='flex gap-2'>
          <Combobox
            as='div'
            value={selectedCountry}
            onChange={handleCountrySelect}
            className='relative w-36'
          >
            <div className='relative'>
              <Combobox.Input
                className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-sm'
                displayValue={(c: any) => `${c.label} ${c.code}`}
                onChange={event => setQuery(event.target.value)}
                placeholder='Search country...'
              />
              <Combobox.Button className='absolute inset-y-0 right-2 flex items-center'>
                <ChevronUpDownIcon className='w-5 h-5 text-slate-500' />
              </Combobox.Button>
            </div>

            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              enter='transition ease-out duration-100'
              enterFrom='opacity-0'
              enterTo='opacity-100'
            >
              <Combobox.Options>
                {filteredCountries.length === 0 ? (
                  <div className='cursor-default select-none py-2 px-3 text-gray-500'>
                    No countries found.
                  </div>
                ) : (
                  filteredCountries.map(country => (
                    <Combobox.Option
                      key={country.code}
                      value={country}
                      className={({ active }) =>
                        `cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                          active
                            ? 'bg-violet-100 text-violet-900'
                            : 'text-gray-900'
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {country.label} {country.code}
                          </span>
                          {selected && (
                            <span
                              className={`absolute inset-y-0 right-3 flex items-center ${
                                active ? 'text-violet-900' : 'text-violet-600'
                              }`}
                            >
                              <CheckIcon className='w-5 h-5' />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </Combobox>

          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
            className='flex-1 px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition shadow-sm hover:shadow-md'
            placeholder='Phone Number'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm'
        >
          Register Now
        </button>

        <div className='flex items-center justify-center gap-1.5 text-xs text-slate-500'>
          <Lock className='size-3.5' />
          <span>100% Secure & Encrypted</span>
        </div>

        <div className='border-t border-slate-200 pt-3 mt-3'>
          <div className='flex items-center justify-around text-center'>
            <div>
              <div className='font-bold text-violet-600 text-sm'>$0</div>
              <div className='text-xs text-slate-600'>Fee</div>
            </div>
            <div className='w-px h-6 bg-slate-200'></div>
            <div>
              <div className='font-bold text-violet-600 text-sm'>24/7</div>
              <div className='text-xs text-slate-600'>Support</div>
            </div>
            <div className='w-px h-6 bg-slate-200'></div>
            <div>
              <div className='font-bold text-violet-600 text-sm'>Fast</div>
              <div className='text-xs text-slate-600'>Setup</div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  )
}
