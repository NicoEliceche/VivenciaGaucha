import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const LocationWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]}`};
  width: 100%;
  margin: 0 auto;
  scroll-margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[24]} ${theme.spacing[12]}`};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: ${({ theme }) => theme.radius['2xl']};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.color.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 75vw;
    max-width: 1200px;
    height: 450px;
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const MapsLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.leather};
  color: white;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.radius.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    transform: translateY(-2px);
  }
`;

export const Location: React.FC = () => {
  const { t } = useLanguage();
  
  // Custom Embed URL focusing on the specific coordinates and adding a label via 'q' parameter
  // Coordinates for Magdalena approximately
  const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.9790436733!2d-57.5147!3d-35.0823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA0JzU2LjMiUyA1N8KwMzAnNTIuOSJX!5e0!3m2!1ses!2sar!4v1717084800000!5m2!1ses!2sar&q=Día+de+Gaucho";
  const externalMapsUrl = "https://maps.app.goo.gl/7KsZmy6AT9z9b31j8";

  return (
    <LocationWrapper id="ubicacion">
      <Title>{t('nav_location')}</Title>
      <MapContainer>
        <MapFrame 
          src={mapsUrl} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Día de Gaucho"
        />
      </MapContainer>
      <MapsLink href={externalMapsUrl} target="_blank" rel="noopener noreferrer">
        {t('location_cta')}
      </MapsLink>
    </LocationWrapper>
  );
};
