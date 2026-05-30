import React from 'react';
import styled from 'styled-components';
import bgImage from '../../../../frontend/assets/gaucho_background.jpg';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]} ${theme.spacing[10]}`};
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocationBadge = styled.span`
  color: ${({ theme }) => theme.color.neutral[0]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.size.sm};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.neutral[0]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.radius.full};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.base};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  color: ${({ theme }) => theme.color.textInverse};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.1;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['7xl']};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.size.lg};
  color: ${({ theme }) => theme.color.neutral[200]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  max-width: 42rem;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  }
`;

const HeroButton = styled.a`
  text-decoration: none;
  width: 100%;
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 56px;

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral[0]};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: auto;
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  }
`;

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <HeroWrapper>
      <HeroContent>
        <LocationBadge>{t('hero_badge')}</LocationBadge>
        <Title>{t('hero_title_1')} <br /> {t('hero_title_2')}</Title>
        <Description>
          {t('hero_desc')}
        </Description>
        <HeroButton href="#reserva">{t('hero_cta')}</HeroButton>
      </HeroContent>
    </HeroWrapper>
  );
};
