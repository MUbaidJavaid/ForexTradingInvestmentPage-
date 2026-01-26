// src/context/TranslatorContext.tsx
import { createContext, useContext, useState, useEffect } from 'react'

type TranslatorContextType = {
  lang: string
  setLang: (lang: string) => void
}

const TranslatorContext = createContext<TranslatorContextType>({
  lang: 'en',
  setLang: () => {}
})

export const useTranslator = () => useContext(TranslatorContext)

export const TranslatorProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0]
    setLang(browserLang)
  }, [])

  return (
    <TranslatorContext.Provider value={{ lang, setLang }}>
      {children}
    </TranslatorContext.Provider>
  )
}
