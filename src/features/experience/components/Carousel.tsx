import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../../core/i18n/LanguageContext';

// Import assets
import asadoImg from '../../../../frontend/assets/asado-gaucho.png';
import montandoImg from '../../../../frontend/assets/montando.jpg';
import tradicionImg from '../../../../frontend/assets/tradicion.png';
import boinaImg from '../../../../frontend/assets/boina.jpg';
import dronVideo from '../../../../frontend/assets/gauchos_dron_1080p.mp4';

const CarouselWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.color.primaryLight};
  text-align: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  color: ${({ theme }) => theme.color.accent};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

const CarouselContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: 400px;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  background-color: black;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 500px;
  }
`;

const MediaItem = styled.div<{ active: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Media = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoMedia = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Carousel: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { type: 'image', src: asadoImg },
    { type: 'video', src: dronVideo },
    { type: 'image', src: montandoImg },
    { type: 'image', src: tradicionImg },
    { type: 'image', src: boinaImg },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <CarouselWrapper>
      <Title>{t('carousel_title')}</Title>
      <CarouselContainer>
        {items.map((item, index) => (
          <MediaItem key={index} active={activeIndex === index}>
            {item.type === 'image' ? (
              <Media src={item.src} alt="Experiencia Gaucha" />
            ) : (
              <VideoMedia 
                src={item.src} 
                autoPlay 
                muted 
                loop 
                playsInline 
              />
            )}
          </MediaItem>
        ))}
      </CarouselContainer>
    </CarouselWrapper>
  );
};
