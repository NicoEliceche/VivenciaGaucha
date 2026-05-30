import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const CTAWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.color.leather};
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const CTATitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  max-width: 40rem;
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['4xl']};
  }
`;

const ActionButton = styled.a`
  text-decoration: none;
  background-color: white;
  color: ${({ theme }) => theme.color.leather};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.radius.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.color.neutral[100]};
  }
`;

interface SectionCTAProps {
  titleKey: string;
}

export const SectionCTA: React.FC<SectionCTAProps> = ({ titleKey }) => {
  const { t } = useLanguage();
  return (
    <CTAWrapper>
      <CTATitle>{t(titleKey)}</CTATitle>
      <ActionButton href="#reserva">{t('nav_reserve')}</ActionButton>
    </CTAWrapper>
  );
};
