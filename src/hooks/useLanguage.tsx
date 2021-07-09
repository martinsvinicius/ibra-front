import { useContext } from 'react';
import { useState } from 'react';
import { createContext, ReactNode } from 'react';

interface LanguageContextData {
  language: 'pt-BR' | 'en';
  handleChangeLanguage: () => any;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData
);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<'pt-BR' | 'en'>('pt-BR');

  function handleChangeLanguage() {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
  }

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  return context;
}