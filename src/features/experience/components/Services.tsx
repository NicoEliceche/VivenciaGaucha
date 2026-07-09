import React from 'react';
import styled from 'styled-components';
import tradicionImg from '../../../../frontend/assets/tradicion.png';
import montandoImg from '../../../../frontend/assets/montando.jpg';
import asadoImg from '../../../../frontend/assets/asado-gaucho.png';
import mateImg from '../../../../frontend/assets/mate.png';
import boinaImg from '../../../../frontend/assets/boina.jpg';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const ServicesWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]}`};
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  scroll-margin-top: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[24]} ${theme.spacing[12]}`};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[16]};
  }
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.lg};
  color: ${({ theme }) => theme.color.neutral[600]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing[10]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.div<{ $bgImage: string; $bgPosition?: string }>`
  position: relative;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: ${({ $bgPosition }) => $bgPosition || 'center'};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border-top: 4px solid ${({ theme }) => theme.color.leather};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[10]};
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.textInverse};
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  }
`;

const CardText = styled.p`
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.color.neutral[200]};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;

const serviceCards = [
  {
    titleKey: 'service_tradition_title',
    descKey: 'service_tradition_desc',
    image: tradicionImg,
  },
  {
    titleKey: 'service_asado_title',
    descKey: 'service_asado_desc',
    image: asadoImg,
  },
  {
    titleKey: 'service_folklore_title',
    descKey: 'service_folklore_desc',
    image: mateImg,
  },
  {
    titleKey: 'service_dress_title',
    descKey: 'service_dress_desc',
    image: boinaImg,
  },
  {
    titleKey: 'service_skills_title',
    descKey: 'service_skills_desc',
    image: montandoImg,
    bgPosition: 'center 20%',
  },
  {
    titleKey: 'service_media_title',
    descKey: 'service_media_desc',
    image: montandoImg,
    bgPosition: 'center 20%',
  },
];

export const Services: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <ServicesWrapper id="experiencia">
      <SectionHeader>
        <SectionTitle>{t('services_title')}</SectionTitle>
        <SectionSubtitle>{t('services_subtitle')}</SectionSubtitle>
      </SectionHeader>
      
      <Grid>
        {serviceCards.map((card) => (
          <Card key={card.titleKey} $bgImage={card.image} $bgPosition={card.bgPosition}>
            <CardContent>
              <CardTitle>{t(card.titleKey)}</CardTitle>
              <CardText>{t(card.descKey)}</CardText>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </ServicesWrapper>
  );
};
