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
  location_title_place: { es: '"Agrupación Tradicionalista Gauchos de Magdalena"', en: '"Agrupación Tradicionalista Gauchos de Magdalena"' },
  location_cta: { es: 'Abrir en Google Maps', en: 'Open in Google Maps' },

  // Pricing
  pricing_title: { es: 'Asegurá tu experiencia', en: 'Secure your experience' },
  pricing_subtitle: { es: 'Un servicio All-Inclusive desde el transporte hasta el material multimedia final.', en: 'All-inclusive service from transport to the final multimedia material.' },
  pricing_badge: { es: 'Paquete Único', en: 'Single Package' },
  pricing_card_title: { es: 'Experiencia Gaucha Criolla', en: 'Gaucho Criollo Experience' },
  pricing_card_venue: { es: 'Agrupación Tradicionalista Gauchos de Magdalena', en: 'Agrupación Tradicionalista Gauchos de Magdalena' },
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
  faq_q1: { es: '¿Qué pasa si llueve o hay mal clima?', en: 'What happens if it rains or the weather is bad?' },
  faq_a1: { es: 'La prioridad es la seguridad. Si el clima impide las actividades al aire libre, reprogramamos o adaptamos la jornada según disponibilidad.', en: 'Safety comes first. If weather prevents outdoor activities, we reschedule or adapt the day depending on availability.' },
  faq_q2: { es: '¿Cuánto dura la experiencia completa?', en: 'How long does the full experience last?' },
  faq_a2: { es: 'Es una jornada de día completo. Con traslados desde CABA, calculá salir por la mañana y volver al atardecer.', en: 'It is a full-day outing. With transfers from Buenos Aires, expect a morning departure and an evening return.' },
  faq_q3: { es: '¿Desde dónde salen los traslados?', en: 'Where do transfers depart from?' },
  faq_a3: { es: 'Coordinamos puntos de encuentro en CABA o pickup privado según el grupo. Te confirmamos horario y dirección al reservar.', en: 'We coordinate meeting points in Buenos Aires or private pickup depending on the group. Time and address are confirmed when booking.' },
  faq_q4: { es: '¿La experiencia incluye ida y vuelta?', en: 'Is round-trip transfer included?' },
  faq_a4: { es: 'Sí, el paquete contempla traslado CABA-Magdalena ida y vuelta, salvo que acuerdes llegar por tu cuenta.', en: 'Yes, the package includes round-trip CABA-Magdalena transfer unless you arrange to arrive on your own.' },
  faq_q5: { es: '¿Necesito experiencia previa con caballos?', en: 'Do I need previous horse-riding experience?' },
  faq_a5: { es: 'No. La actividad está pensada para principiantes y se realiza acompañada por guías.', en: 'No. The activity is beginner-friendly and guided throughout.' },
  faq_q6: { es: '¿Puedo participar si no quiero montar a caballo?', en: 'Can I join if I do not want to ride?' },
  faq_a6: { es: 'Sí. Podés mirar, sacar fotos y sumarte al resto de las actividades; avisá al reservar para organizar una alternativa.', en: 'Yes. You can watch, take photos, and join the rest of the activities; let us know when booking so we can arrange an alternative.' },
  faq_q7: { es: '¿La cabalgata es segura para niños?', en: 'Is horseback riding safe for children?' },
  faq_a7: { es: 'Sí, se adapta a la edad y al criterio del equipo. Los menores participan acompañados y con supervisión.', en: 'Yes, it is adapted by age and staff judgment. Children participate accompanied and supervised.' },
  faq_q8: { es: '¿Es apto para adultos mayores?', en: 'Is it suitable for older adults?' },
  faq_a8: { es: 'Sí, si pueden pasar un día al aire libre. Recomendamos avisar cualquier necesidad de movilidad, rodilla o espalda.', en: 'Yes, if they are comfortable spending a day outdoors. Please mention mobility, knee, or back needs in advance.' },
  faq_q9: { es: '¿Es accesible para silla de ruedas?', en: 'Is it wheelchair accessible?' },
  faq_a9: { es: 'El campo tiene terreno irregular. Consultanos antes de reservar para evaluar asistencia y recorrido posible.', en: 'The countryside has uneven ground. Please ask before booking so we can evaluate assistance and possible routes.' },
  faq_q10: { es: '¿Qué ropa conviene llevar?', en: 'What should I wear?' },
  faq_a10: { es: 'Ropa cómoda que pueda ensuciarse, abrigo liviano por si refresca y calzado cerrado.', en: 'Wear comfortable clothes that can get dusty, a light layer in case it cools down, and closed-toe shoes.' },
  faq_q11: { es: '¿Hace falta llevar protector solar o repelente?', en: 'Should I bring sunscreen or insect repellent?' },
  faq_a11: { es: 'Sí. Recomendamos protector solar, gorra o sombrero, lentes y repelente, especialmente en primavera y verano.', en: 'Yes. We recommend sunscreen, a cap or hat, sunglasses, and repellent, especially in spring and summer.' },
  faq_q12: { es: '¿Incluye vestimenta criolla?', en: 'Is traditional criollo clothing included?' },
  faq_a12: { es: 'Sí, durante la jornada te prestamos elementos tradicionales como boina, faja y alpargatas según disponibilidad y talle.', en: 'Yes, during the day we lend traditional items such as a beret, sash, and espadrilles depending on availability and size.' },
  faq_q13: { es: '¿Qué incluye el almuerzo?', en: 'What does lunch include?' },
  faq_a13: { es: 'Asado criollo con costillar, acompañamientos y bebidas. Confirmamos el menú final al reservar.', en: 'Traditional asado with ribs, sides, and drinks. We confirm the final menu when booking.' },
  faq_q14: { es: '¿Hay opciones vegetarianas, veganas o sin TACC?', en: 'Are vegetarian, vegan, or gluten-free options available?' },
  faq_a14: { es: 'Sí. Avisanos al reservar para preparar una alternativa adecuada.', en: 'Yes. Let us know when booking so we can prepare a suitable alternative.' },
  faq_q15: { es: '¿Pueden adaptar el menú por alergias?', en: 'Can the menu be adapted for allergies?' },
  faq_a15: { es: 'Sí, necesitamos saberlo con anticipación. Si la alergia es severa, coordinamos detalles antes de confirmar.', en: 'Yes, we need to know in advance. For severe allergies, we coordinate details before confirming.' },
  faq_q16: { es: '¿Se sirve alcohol?', en: 'Is alcohol served?' },
  faq_a16: { es: 'Puede haber vino u otras bebidas para mayores de edad. También hay opciones sin alcohol.', en: 'Wine or other drinks may be available for adults. Non-alcoholic options are also available.' },
  faq_q17: { es: '¿En qué idiomas se realiza?', en: 'What languages are available?' },
  faq_a17: { es: 'Podemos acompañar en español e inglés. Para otros idiomas, consultanos disponibilidad.', en: 'We can host in Spanish and English. For other languages, please ask about availability.' },
  faq_q18: { es: '¿Tengo que llevar documentación?', en: 'Do I need to bring ID?' },
  faq_a18: { es: 'Para la experiencia local normalmente alcanza con la reserva. Turistas deben llevar su documentación personal de viaje.', en: 'For the local experience, the booking is usually enough. Travelers should carry their personal travel documents.' },
  faq_q19: { es: '¿Puedo llevar cámara o celular?', en: 'Can I bring a camera or phone?' },
  faq_a19: { es: 'Sí. También incluimos registro fotográfico y dron cuando el clima y la normativa lo permiten.', en: 'Yes. We also include photo coverage and drone footage when weather and regulations allow it.' },
  faq_q20: { es: '¿Cuándo recibo las fotos y videos?', en: 'When will I receive the photos and videos?' },
  faq_a20: { es: 'Te compartimos el material editado por Google Drive dentro de los días posteriores a la experiencia.', en: 'We share the edited material via Google Drive in the days following the experience.' },
  faq_q21: { es: '¿La experiencia puede ser privada?', en: 'Can the experience be private?' },
  faq_a21: { es: 'Sí, podemos personalizar horarios, traslados y dinámica para grupos privados.', en: 'Yes, we can personalize schedules, transfers, and activities for private groups.' },
  faq_q22: { es: '¿Cuál es la mejor época del año?', en: 'What is the best time of year?' },
  faq_a22: { es: 'Primavera y otoño suelen ser ideales por temperatura, pero la experiencia se puede disfrutar todo el año.', en: 'Spring and fall are usually ideal for weather, but the experience can be enjoyed year-round.' },
  faq_q23: { es: '¿Hay baños y lugar para cambiarse?', en: 'Are restrooms and changing areas available?' },
  faq_a23: { es: 'Sí, hay instalaciones básicas para pasar el día con comodidad.', en: 'Yes, basic facilities are available so you can spend the day comfortably.' },
  faq_q24: { es: '¿Cómo reservo y pago?', en: 'How do I book and pay?' },
  faq_a24: { es: 'Consultanos disponibilidad por WhatsApp. Te indicamos seña, medios de pago y confirmación de la fecha.', en: 'Ask us about availability on WhatsApp. We will explain the deposit, payment methods, and date confirmation.' },
  faq_q25: { es: '¿Qué pasa si necesito cancelar?', en: 'What if I need to cancel?' },
  faq_a25: { es: 'Avisanos cuanto antes. Las condiciones dependen de la anticipación y del tamaño del grupo.', en: 'Let us know as soon as possible. Conditions depend on notice period and group size.' },
  faq_q26: { es: '¿Puedo ir con equipaje?', en: 'Can I bring luggage?' },
  faq_a26: { es: 'Mejor viajar liviano. Si venís con valijas, avisanos antes para confirmar espacio en el traslado.', en: 'It is best to travel light. If you have luggage, let us know in advance so we can confirm transfer space.' },
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
