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
    es: 'Traslado opcional desde tu hotel o residencia, costillar al asador, fotos con caballos, destreza gaucha y folclore.',
    en: 'Optional round-trip transfer from your hotel or residence, traditional asado, photos with horses, gaucho skills and folklore.'
  },
  hero_cta: { es: 'Asegurá tu lugar', en: 'Secure your spot' },
  hero_cta_subtext: { 
    es: 'Experimentá un día criollo en una posta tradicional de Magdalena',
    en: 'Experience a traditional criollo day at a Magdalena posta'
  },
  
  // Services
  services_title: { es: '¿Qué incluye la jornada?', en: 'What is included?' },
  services_subtitle: { es: 'Una experiencia inmersiva de principio a fin. Mimetizate con el verdadero gaucho argentino tradicional.', en: 'An immersive experience from start to finish. Immerse yourself in the life of a true traditional Argentine gaucho.' },
  
  service_tradition_title: { es: 'Historia y Tradición', en: 'History & Tradition' },
  service_tradition_desc: {
    es: 'Compartimos la historia de los gauchos y de Magdalena, ciudad con raíz de pueblo, para entender la tradición antes de vivir la posta.',
    en: 'We share the history of the gauchos and Magdalena, a city with town roots, so guests understand the tradition before living the posta.'
  },
  
  service_horse_title: { es: 'Foto a Caballo', en: 'Horse Photo' },
  service_horse_desc: {
    es: 'Montá para sacarte fotos vestido de gaucho/a y, si el equipo lo habilita, dar unos pasos guiados en el predio.',
    en: 'Mount a horse for photos in gaucho attire and, if the team allows it, take a few guided steps on the grounds.'
  },
  
  service_asado_title: { es: 'El Gran Asado', en: 'The Great Barbecue' },
  service_asado_desc: {
    es: 'Gauchos cocinando costillar al asador al estilo criollo, bien campero y tradicional. Vas a poder ver la preparación y el fuego de cerca.',
    en: 'Gauchos cook ribs on the asador in a rustic, traditional criollo style. Guests can watch the preparation and the fire up close.'
  },
  service_folklore_title: { es: 'Folclore', en: 'Folklore' },
  service_folklore_desc: {
    es: 'Escuchá música, mirá bailar e intentá algunos pasos de folclore con la ayuda de los gauchos.',
    en: 'Listen to the music, watch the dancing, and try a few folklore steps with help from the gauchos.'
  },
  service_dress_title: { es: 'Vestirse de gaucho/a', en: 'Dress as a Gaucho' },
  service_dress_desc: {
    es: 'Te prestamos prendas criollas para sacarte fotos en la posta, junto a gauchos reales y montado/a a caballo.',
    en: 'Wear traditional criollo clothing and take photos at the posta, alongside real gauchos and mounted on a horse.'
  },
  service_skills_title: { es: 'Destreza gaucha', en: 'Gaucho Skills' },
  service_skills_desc: {
    es: 'Demostraciones de habilidades gauchas con el caballo realizadas por el equipo local, en un entorno controlado y sin cabalgata.',
    en: 'Watch local gauchos demonstrate horse-handling skills in a controlled setting, without a trail ride.'
  },
  service_media_title: { es: 'Fotos y dron', en: 'Photos & Drone' },
  service_media_desc: {
    es: 'En las actividades al aire libre vamos a registrar ciertos momentos con dron y compartir el material por Google Drive.',
    en: 'During outdoor activities, we capture selected moments with a drone and share the media through Google Drive.'
  },

  // Multimedia
  multimedia_title: { es: 'Tus recuerdos, desde el aire.', en: 'Your memories, from above.' },
  multimedia_text: { 
    es: 'Sabemos que es una experiencia única. Por eso, documentamos tu día con calidad cinematográfica para que te quede de recuerdo para siempre.',
    en: 'We know this is a unique experience. That\'s why we document your day with cinematic quality so you can have a forever memory.'
  },
  multimedia_item_1: { es: 'Fotógrafo profesional cubriendo toda la jornada.', en: 'Professional photographer covering the whole day.' },
  multimedia_item_2: { es: 'Filmaciones con dron de momentos al aire libre, según clima y condiciones.', en: 'Drone footage of outdoor moments, depending on weather and conditions.' },
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
  pricing_subtitle: { es: 'Servicio completo con actividades criollas, almuerzo, multimedia y traslado opcional.', en: 'A complete service with criollo activities, lunch, media coverage, and optional transfer.' },
  pricing_badge: { es: 'Paquete Único', en: 'Single Package' },
  pricing_card_title: { es: 'Experiencia Gaucha Criolla', en: 'Gaucho Criollo Experience' },
  pricing_card_venue: { es: 'Agrupación Tradicionalista Gauchos de Magdalena', en: 'Agrupación Tradicionalista Gauchos de Magdalena' },
  pricing_feature_1: { es: 'Traslado ida y vuelta desde hotel o residencia disponible como opcional.', en: 'Optional round-trip transfer from your hotel or residence.' },
  pricing_feature_2: { es: 'Almuerzo libre: Costillar y bebidas.', en: 'Open lunch: Traditional BBQ and drinks.' },
  pricing_feature_3: { es: 'Historia, folclore, vestimenta criolla, fotos a caballo y destreza gaucha.', en: 'History, folklore, criollo attire, horse photos, and gaucho skills.' },
  pricing_feature_4: { es: 'Pack de Fotos y Dron vía Google Drive.', en: 'Photo & Drone pack via Google Drive.' },
  pricing_cta: { es: 'Consultar Disponibilidad', en: 'Check Availability' },

  // Floating CTA
  floating_cta: { es: 'Ver experiencia y opciones', en: 'View experience options' },
  
  // New CTAs
  cta_roots: { es: 'No dejes pasar la oportunidad de conectar con tus raíces.', en: 'Don\'t miss the opportunity to connect with your roots.' },
  cta_magic: { es: 'Viví la verdadera magia de una posta gaucha argentina.', en: 'Experience the true magic of an Argentine gaucho posta.' },
  cta_history: { es: 'Tu lugar en la historia te espera.', en: 'Your place in history awaits you.' },
  cta_join_us: { es: 'Un día inolvidable te está esperando, ¿te sumás?', en: 'An unforgettable day is waiting for you, will you join us?' },

  // Reviews
  reviews_title: { es: 'Voces de nuestra tierra', en: 'Voices from our land' },
  review_1_text: { es: '"Una experiencia única. El costillar al asador fue lo mejor que probé en mi vida y las fotos vestidos de gaucho quedaron increíbles."', en: '"A unique experience. The barbecue was the best I\'ve ever had and the photos in gaucho attire were incredible."' },
  review_1_author: { es: 'Juan Manuel - Buenos Aires', en: 'Juan Manuel - Buenos Aires' },
  review_2_text: { es: '"Llevamos a unos amigos del exterior y quedaron fascinados. La atención de los gauchos y el show de folclore son de primer nivel."', en: '"We took some friends from abroad and they were fascinated. The gauchos\' attention and the folklore show are top-notch."' },
  review_2_author: { es: 'Elena R. - Emprendedora', en: 'Elena R. - Entrepreneur' },
  review_3_text: { es: '"Lo que más me gustó fue el material del dron. Tener un video profesional de la jornada es un recuerdo para siempre."', en: '"What I liked most was the drone footage. Having a professional video of the day is a memory for a lifetime."' },
  review_3_author: { es: 'Ricardo G. - Turista', en: 'Ricardo G. - Tourist' },

  // FAQ
  faq_title: { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions' },
  faq_q1: { es: '¿Qué pasa si llueve o hay mal clima?', en: 'What happens if it rains or the weather is bad?' },
  faq_a1: { es: 'La prioridad es la seguridad. Si el clima impide las actividades al aire libre, reprogramamos o adaptamos la jornada según disponibilidad.', en: 'Safety comes first. If weather prevents outdoor activities, we reschedule or adapt the day depending on availability.' },
  faq_q2: { es: '¿Cuánto dura la experiencia completa?', en: 'How long does the full experience last?' },
  faq_a2: { es: 'Es una jornada de día completo. Si contratás traslado, calculá salir por la mañana y volver al atardecer.', en: 'It is a full-day outing. If you book the transfer, expect a morning departure and an evening return.' },
  faq_q3: { es: '¿Desde dónde salen los traslados?', en: 'Where do transfers depart from?' },
  faq_a3: { es: 'Coordinamos pickup en hotel, residencia o punto de encuentro según el grupo. Te confirmamos horario y dirección al reservar.', en: 'We coordinate pickup at a hotel, residence, or meeting point depending on the group. Time and address are confirmed when booking.' },
  faq_q4: { es: '¿La experiencia incluye ida y vuelta?', en: 'Is round-trip transfer included?' },
  faq_a4: { es: 'Ofrecemos traslado ida y vuelta como opción. Si venís por tu cuenta, lo coordinamos y evitás pagar ese servicio.', en: 'We offer round-trip transfer as an option. If you arrive on your own, we coordinate it and you avoid paying for that service.' },
  faq_q5: { es: '¿Necesito experiencia previa con caballos?', en: 'Do I need previous experience with horses?' },
  faq_a5: { es: 'No. No es una cabalgata: la actividad a caballo es para fotos y, como máximo, unos pasos guiados dentro del predio.', en: 'No. This is not a trail ride: the horse activity is for photos and, at most, a few guided steps within the grounds.' },
  faq_q6: { es: '¿Puedo participar si no quiero montar a caballo?', en: 'Can I join if I do not want to ride?' },
  faq_a6: { es: 'Sí. Podés mirar, sacarte fotos junto al caballo y sumarte al resto de las actividades.', en: 'Yes. You can watch, take photos beside the horse, and join the rest of the activities.' },
  faq_q7: { es: '¿La actividad con caballos es segura para niños?', en: 'Is the horse activity safe for children?' },
  faq_a7: { es: 'Sí, se adapta a la edad y al criterio del equipo. Los menores participan acompañados y con supervisión.', en: 'Yes, it is adapted by age and staff judgment. Children participate accompanied and supervised.' },
  faq_q8: { es: '¿Es apto para adultos mayores?', en: 'Is it suitable for older adults?' },
  faq_a8: { es: 'Sí, si pueden pasar un día al aire libre. Recomendamos avisar cualquier necesidad de movilidad, rodilla o espalda.', en: 'Yes, if they are comfortable spending a day outdoors. Please mention mobility, knee, or back needs in advance.' },
  faq_q9: { es: '¿Es accesible para silla de ruedas?', en: 'Is it wheelchair accessible?' },
  faq_a9: { es: 'El predio tiene terreno irregular. Consultanos antes de reservar para evaluar asistencia y recorrido posible.', en: 'The grounds have uneven terrain. Please ask before booking so we can evaluate assistance and possible routes.' },
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
