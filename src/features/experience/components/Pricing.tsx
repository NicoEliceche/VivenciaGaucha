import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../../core/i18n/LanguageContext';
import mateImg from '../../../../frontend/assets/mate.png';

const PricingWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.color.background};
  text-align: center;
  scroll-margin-top: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[24]} ${theme.spacing[12]}`};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.lg};
  max-width: 42rem;
  margin: 0 auto ${({ theme }) => theme.spacing[12]};
  color: ${({ theme }) => theme.color.neutral[600]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
`;

const PriceCard = styled.div`
  max-width: 28rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.surface};
  border: 2px solid ${({ theme }) => theme.color.leather};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[10]};
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[6]}`};
  border-radius: ${({ theme }) => theme.radius.full};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: ${({ theme }) => theme.typography.size.xs};
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
  color: ${({ theme }) => theme.color.primary};
  margin-top: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    margin-top: ${({ theme }) => theme.spacing[4]};
  }
`;

const CardVenue = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
  color: ${({ theme }) => theme.color.primaryLight};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['2xlMinus2']};
  }
`;

const Price = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['5xl']};
  color: ${({ theme }) => theme.color.leather};
  margin: ${({ theme }) => theme.spacing[6]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['6xl']};
    margin: ${({ theme }) => theme.spacing[8]} 0;
  }
`;

const Currency = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.size.xl};
  color: ${({ theme }) => theme.color.neutral[500]};
  font-weight: ${({ theme }) => theme.typography.weight.regular};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  }
`;

const FeatureList = styled.ul`
  text-align: left;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.color.primaryLight};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[5]};
    margin-bottom: ${({ theme }) => theme.spacing[10]};
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const MateBullet = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid ${({ theme }) => theme.color.leather};
`;

const CTAButton = styled.a`
  text-decoration: none;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  font-size: ${({ theme }) => theme.typography.size.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;

  &:hover {
    background-color: black;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
`;

export const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const waLink = "https://wa.me/5492223671098?text=Hola!%20Me%20interesa%20reservar%20mi%20lugar%20para%20el%20Día%20de%20Gaucho.";
  
  return (
    <PricingWrapper id="reserva">
      <Title>{t('pricing_title')}</Title>
      <Subtitle>{t('pricing_subtitle')}</Subtitle>
      
      <PriceCard>
        <Badge>{t('pricing_badge')}</Badge>
        <CardTitle>{t('pricing_card_title')}</CardTitle>
        <CardVenue>{t('pricing_card_venue')}</CardVenue>
        <Price>$250 <Currency>USD</Currency></Price>
        
        <FeatureList>
          <FeatureItem>
            <MateBullet src={mateImg} alt="Mate argentino" />
            <span>{t('pricing_feature_1')}</span>
          </FeatureItem>
          <FeatureItem>
            <MateBullet src={mateImg} alt="Mate argentino" />
            <span>{t('pricing_feature_2')}</span>
          </FeatureItem>
          <FeatureItem>
            <MateBullet src={mateImg} alt="Mate argentino" />
            <span>{t('pricing_feature_3')}</span>
          </FeatureItem>
          <FeatureItem>
            <MateBullet src={mateImg} alt="Mate argentino" />
            <span>{t('pricing_feature_4')}</span>
          </FeatureItem>
        </FeatureList>
        
        <CTAButton href={waLink} target="_blank" rel="noopener noreferrer">
          {t('pricing_cta')}
        </CTAButton>
      </PriceCard>
    </PricingWrapper>
  );
};
