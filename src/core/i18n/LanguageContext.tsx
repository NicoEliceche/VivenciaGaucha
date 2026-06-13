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
  hero_title_1: { es: 'Viví una', en: 'Live a' },
  hero_title_2: { es: 'experiencia criolla', en: 'cultural criollo' },
  hero_title_3: { es: 'cultural en Magdalena', en: 'experience in Magdalena' },
  hero_desc: { 
    es: 'Traslado desde Capital Federal, costillar al asador, caballos, destreza gaucha y folclore.', 
    en: 'Round-trip from Buenos Aires, traditional barbecue, horseback riding, gaucho skills and folklore.' 
  },
  hero_cta: { es: 'Asegurá tu lugar', en: 'Secure your spot' },
  hero_cta_subtext: { 
    es: 'Experimentá un día criollo en el campo argentino', 
    en: 'Experience a traditional criollo day in the Argentine countryside' 
  },
  
  // Services
  services_title: { es: '¿Qué incluye la jornada?', en: 'What is included?' },
  services_subtitle: { es: 'Una experiencia inmersiva de principio a fin. Mimetizate con el verdadero gaucho argentino tradicional.', en: 'An immersive experience from start to finish. Immerse yourself in the life of a true traditional Argentine gaucho.' },
  
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
  location_title_intro: { es: 'Vas a pasar tu día en la', en: 'You will spend your day at' },
  location_title_place: { es: '"Asociación Tradicionalista Gauchos de Magdalena"', en: '"Asociación Tradicionalista Gauchos de Magdalena"' },
  location_cta: { es: 'Abrir en Google Maps', en: 'Open in Google Maps' },

  // Pricing
  pricing_title: { es: 'Asegurá tu experiencia', en: 'Secure your experience' },
  pricing_subtitle: { es: 'Un servicio All-Inclusive desde el transporte hasta el material multimedia final.', en: 'All-inclusive service from transport to the final multimedia material.' },
  pricing_badge: { es: 'Paquete Único', en: 'Single Package' },
  pricing_card_title: { es: 'Experiencia Gaucha Criolla', en: 'Gaucho Criollo Experience' },
  pricing_card_venue: { es: 'Asociación Tradicionalista Gauchos de Magdalena', en: 'Asociación Tradicionalista Gauchos de Magdalena' },
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
  cta_join_us: { es: 'Un día inolvidable te está esperando, ¿te sumás?', en: 'An unforgettable day is waiting for you, will you join us?' },

  // Reviews
  reviews_title: { es: 'Voces de nuestra tierra', en: 'Voices from our land' },
  review_1_text: { es: '"Una experiencia única. El costillar al asador fue lo mejor que probé en mi vida y la cabalgata al atardecer no tiene precio."', en: '"A unique experience. The barbecue was the best I\'ve ever had and the sunset ride is priceless."' },
  review_1_author: { es: 'Juan Manuel - Buenos Aires', en: 'Juan Manuel - Buenos Aires' },
  review_2_text: { es: '"Llevamos a unos amigos del exterior y quedaron fascinados. La atención de los gauchos y el show de folclore son de primer nivel."', en: '"We took some friends from abroad and they were fascinated. The gauchos\' attention and the folklore show are top-notch."' },
  review_2_author: { es: 'Elena R. - Emprendedora', en: 'Elena R. - Entrepreneur' },
  review_3_text: { es: '"Lo que más me gustó fue el material del dron. Tener un video profesional de nosotros cabalgando es un recuerdo para siempre."', en: '"What I liked most was the drone footage. Having a professional video of us riding is a memory for a lifetime."' },
  review_3_author: { es: 'Ricardo G. - Turista', en: 'Ricardo G. - Tourist' },

  // FAQ
  faq_title: { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions' },
  faq_q1: { es: '¿Qué pasa si llueve?', en: 'What happens if it rains?' },
  faq_a1: { es: 'La actividad se reprograma sin costo. Te avisaremos con 24hs de antelación para coordinar una nueva fecha.', en: 'The activity is rescheduled at no cost. We will notify you 24 hours in advance to coordinate a new date.' },
  faq_q2: { es: '¿Tienen opciones para celíacos o vegetarianos?', en: 'Do you have celiac or vegetarian options?' },
  faq_a2: { es: '¡Sí! Al momento de reservar, informanos tus restricciones alimentarias y prepararemos un menú especial para vos.', en: 'Yes! When booking, let us know your dietary restrictions and we will prepare a special menu for you.' },
  faq_q3: { es: '¿Es apto para niños?', en: 'Is it suitable for children?' },
  faq_a3: { es: 'Totalmente. Es una experiencia familiar ideal. Los menores de 12 años tienen un descuento especial.', en: 'Absolutely. It is an ideal family experience. Children under 12 have a special discount.' },
  faq_q4: { es: '¿Cómo se llega desde Capital Federal?', en: 'How do I get there from Buenos Aires?' },
  faq_a4: { es: 'Contamos con traslados privados que salen desde puntos estratégicos de CABA (Palermo y Centro) incluidos en el paquete.', en: 'We have private transfers leaving from strategic points in Buenos Aires (Palermo and Downtown) included in the package.' },
  faq_q5: { es: '¿Necesito experiencia previa con caballos?', en: 'Do I need previous experience with horses?' },
  faq_a5: { es: 'No es necesario. Nuestros caballos son mansos y estarás acompañado por guías expertos en todo momento.', en: 'Not necessary. Our horses are gentle and you will be accompanied by expert guides at all times.' },
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
