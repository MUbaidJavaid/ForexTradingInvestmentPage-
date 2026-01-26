// src/hooks/useTranslate.ts
import { useEffect, useState } from "react";
import { useTranslator } from "../context/TranslatorContext";

const LINGVA_INSTANCES = [
  "lingva.ml",
  "lingva.lunar.icu",
  "translate.plausibility.cloud",
];

export const useTranslate = (text: string) => {
  const { lang } = useTranslator();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    if (lang === "en") {
      setTranslated(text); // reset to original
      return;
    }

    const translateText = async () => {
      for (const instance of LINGVA_INSTANCES) {
        try {
          const res = await fetch(
            `https://${instance}/api/v1/en/${lang}/${encodeURIComponent(text)}`,
          );
          if (res.ok) {
            const data = await res.json();
            if (data.translation) {
              setTranslated(data.translation);
              return;
            }
          }
        } catch (e) {
          console.log(`Lingva instance ${instance} failed, trying next...`);
        }
      }
      setTranslated(text); // fallback
    };

    translateText();
  }, [text, lang]);

  return translated;
};
