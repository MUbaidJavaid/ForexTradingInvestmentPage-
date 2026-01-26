

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  // Detect user's browser language
  useEffect(() => {
    const detectedLang = navigator.language || navigator.userLanguage;

    // Check if Japanese or Korean
    if (detectedLang.startsWith('ja')) {
      setLanguage('ja');
      translatePage('ja');
    } else if (detectedLang.startsWith('ko')) {
      setLanguage('ko');
      translatePage('ko');
    }
  }, []);

  // Auto-detect on page load based on location/URL
  useEffect(() => {
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam === 'ja' || langParam === 'ko') {
      setLanguage(langParam);
      translatePage(langParam);
    }
  }, []);

  const translatePage = (targetLang) => {
    if (targetLang === 'en') return;

    setIsTranslating(true);

    // Add Google Translate Widget
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.type = 'text/javascript';
    googleTranslateScript.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ja,ko',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');

      // Programmatically trigger translation
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change'));
      }

      setIsTranslating(false);
    };
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    translatePage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isTranslating }}>
      {children}
      {/* Google Translate Container - Hidden */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
