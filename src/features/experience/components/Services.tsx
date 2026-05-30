import React from 'react';
import styled from 'styled-components';
import tradicionImg from '../../../../frontend/assets/tradicion.png';
import montandoImg from '../../../../frontend/assets/montando.jpg';
import asadoImg from '../../../../frontend/assets/asado-gaucho.png';
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
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing[10]};
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

export const Services: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <ServicesWrapper id="experiencia">
      <SectionHeader>
        <SectionTitle>{t('services_title')}</SectionTitle>
        <SectionSubtitle>{t('services_subtitle')}</SectionSubtitle>
      </SectionHeader>
      
      <Grid>
        <Card $bgImage={tradicionImg}>
          <CardContent>
            <CardTitle>{t('service_tradition_title')}</CardTitle>
            <CardText>{t('service_tradition_desc')}</CardText>
          </CardContent>
        </Card>
        
        <Card $bgImage={montandoImg} $bgPosition="center 20%">
          <CardContent>
            <CardTitle>{t('service_horse_title')}</CardTitle>
            <CardText>{t('service_horse_desc')}</CardText>
          </CardContent>
        </Card>
        
        <Card $bgImage={asadoImg}>
          <CardContent>
            <CardTitle>{t('service_asado_title')}</CardTitle>
            <CardText>{t('service_asado_desc')}</CardText>
          </CardContent>
        </Card>
      </Grid>
    </ServicesWrapper>
  );
};
