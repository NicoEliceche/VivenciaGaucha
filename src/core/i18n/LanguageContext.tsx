import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface TranslationDictionary {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: TranslationDictionary = {
  // Header
  nav_experience: { es: 'La Experiencia', en: 'The Experience' },
  nav_location: { es: 'Ubicación', en: 'Location' },
  nav_reserve: { es: 'Reservar Ahora', en: 'Book Now' },
  
  // Hero
  hero_badge: { es: 'Magdalena, Buenos Aires', en: 'Magdalena, Buenos Aires' },
  hero_title_1: { es: 'Viví un verdadero', en: 'Experience a true' },
  hero_title_2: { es: 'Día de Gaucho', en: 'Gaucho Day' },
  hero_desc: { 
    es: 'Traslado desde Capital Federal, costillar al asador, caballos, folclore y contenido multimedia con Dron.', 
    en: 'Round-trip from Buenos Aires, traditional barbecue, horseback riding, folklore, and drone multimedia content.' 
  },
  hero_cta: { es: 'Asegurá tu lugar', en: 'Secure your spot' },
  
  // Services
  services_title: { es: '¿Qué incluye la jornada?', en: 'What is included?' },
  services_subtitle: { es: 'Una experiencia inmersiva de principio a fin.', en: 'An immersive experience from start to finish.' },
  
  service_tradition_title: { es: 'Historia y Tradición', en: 'History & Tradition' },
  service_tradition_desc: { 
    es: 'Nuestro speaker te sumergirá en la rica historia de Magdalena y los gauchos. Además, vas a vestirte con boina, alpargatas y faja todo el día.',
    en: 'Our speaker will immerse you in the rich history of Magdalena and the gauchos. You will also wear a beret, espadrilles, and a sash all day.'
  },
  
  service_horse_title: { es: 'A Caballo', en: 'Horseback Riding' },
  service_horse_desc: {
    es: 'Montá a caballo por la inmensidad de la llanura y disfrutá de nuestros exclusivos espectáculos ecuestres demostrando la destreza gaucha.',
    en: 'Ride horses through the vast plains and enjoy our exclusive equestrian shows demonstrating gaucho skills.'
  },
  
  service_asado_title: { es: 'El Gran Asado', en: 'The Great Barbecue' },
  service_asado_desc: {
    es: 'Coronamos el día viviendo la magia de un auténtico costillar al asador, acompañado de baile típico argentino y shows folclóricos en vivo.',
    en: 'We crown the day experiencing the magic of an authentic barbecue (asador), accompanied by traditional Argentine dance and live folklore shows.'
  },

  // Multimedia
  multimedia_title: { es: 'Tus recuerdos, desde el aire.', en: 'Your memories, from above.' },
  multimedia_text: { 
    es: 'Sabemos que es una experiencia única. Por eso, documentamos tu día con calidad cinematográfica para que te quede de recuerdo para siempre.',
    en: 'We know this is a unique experience. That\'s why we document your day with cinematic quality so you can have a forever memory.'
  },
  multimedia_item_1: { es: 'Fotógrafo profesional cubriendo toda la jornada.', en: 'Professional photographer covering the whole day.' },
  multimedia_item_2: { es: 'Filmaciones con Dron del almuerzo y los caballos.', en: 'Drone filming of lunch and horses.' },
  multimedia_item_3: { es: 'Edición premium lista a los pocos días.', en: 'Premium editing ready within a few days.' },
  multimedia_item_4: { es: 'Carpeta pública en Google Drive para descargar y compartir.', en: 'Public Google Drive folder to download and share.' },
  multimedia_visual_title: { es: 'Contenido listo para brillar', en: 'Content ready to shine' },
  multimedia_visual_subtitle: { es: 'Material en alta calidad directo a tu Google Drive, ideal para redes sociales.', en: 'High-quality material direct to your Google Drive, ideal for social media.' },

  // Location
  location_cta: { es: 'Abrir en Google Maps', en: 'Open in Google Maps' },

  // Pricing
  pricing_title: { es: 'Asegurá tu experiencia', en: 'Secure your experience' },
  pricing_subtitle: { es: 'Un servicio All-Inclusive desde el transporte hasta el material multimedia final.', en: 'All-inclusive service from transport to the final multimedia material.' },
  pricing_badge: { es: 'Paquete Único', en: 'Single Package' },
  pricing_card_title: { es: 'Día de Gaucho', en: 'Gaucho Day' },
  pricing_feature_1: { es: 'Traslado CABA - Magdalena ida y vuelta.', en: 'Round-trip CABA - Magdalena transfer.' },
  pricing_feature_2: { es: 'Almuerzo libre: Costillar y bebidas.', en: 'Open lunch: Traditional BBQ and drinks.' },
  pricing_feature_3: { es: 'Cabalgatas, baile, historia y vestimenta.', en: 'Horseback riding, dance, history, and attire.' },
  pricing_feature_4: { es: 'Pack de Fotos y Dron vía Google Drive.', en: 'Photo & Drone pack via Google Drive.' },
  pricing_cta: { es: 'Consultar Disponibilidad', en: 'Check Availability' },

  // Floating CTA
  floating_cta: { es: 'Ver Paquete All-Inclusive', en: 'View All-Inclusive Package' },
  
  // New CTAs
  cta_roots: { es: 'No dejes pasar la oportunidad de conectar con tus raíces.', en: 'Don\'t miss the opportunity to connect with your roots.' },
  cta_magic: { es: 'Viví la verdadera magia del campo argentino.', en: 'Experience the true magic of the Argentine countryside.' },
  cta_history: { es: 'Tu lugar en la historia te espera.', en: 'Your place in history awaits you.' },
  cta_join_us: { es: 'Un día inolvidable te está esperando, ¿te sumás?', en: 'An unforgettable day is waiting for you, will you join us?' }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
