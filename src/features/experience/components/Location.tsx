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
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

const TitleLine = styled.span`
  display: block;
`;

const TitleIntro = styled(TitleLine)`
  font-size: ${({ theme }) => theme.typography.size['2xl']};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: inherit;
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

  const mapsUrl = "https://www.google.com/maps?q=Asociaci%C3%B3n%20Tradicionalista%20Gauchos%20de%20Magdalena%2C%20-35.0868873%2C%20-57.5054844&z=17&output=embed";
  const externalMapsUrl = "https://www.google.com/maps/place/Asociaci%C3%B3n+Tradicionalista+Gauchos+de+Magdalena/@-35.0868829,-57.5080593,17z/data=!4m14!1m7!3m6!1s0x95a265816e5a0717:0x80227442925809df!2sAsociaci%C3%B3n+Tradicionalista+Gauchos+de+Magdalena!8m2!3d-35.0868873!4d-57.5054844!16s%2Fg%2F11qzxc2c0s!3m5!1s0x95a265816e5a0717:0x80227442925809df!8m2!3d-35.0868873!4d-57.5054844!16s%2Fg%2F11qzxc2c0s?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <LocationWrapper id="ubicacion">
      <Title>
        <TitleIntro>{t('location_title_intro')}</TitleIntro>
        <TitleLine>{t('location_title_place')}</TitleLine>
      </Title>
      <MapContainer>
        <MapFrame 
          src={mapsUrl} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Agrupación Tradicionalista Gauchos de Magdalena"
        />
      </MapContainer>
      <MapsLink href={externalMapsUrl} target="_blank" rel="noopener noreferrer">
        {t('location_cta')}
      </MapsLink>
    </LocationWrapper>
  );
};
