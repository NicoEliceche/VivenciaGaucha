import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const StickyContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing[4]};
  background: linear-gradient(to top, ${({ theme }) => theme.color.background}, transparent);
  display: flex;
  justify-content: center;
  z-index: 40;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const ActionButton = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.leather};
  color: white;
  width: 100%;
  max-width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-height: 52px;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const FloatingCTA: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <StickyContainer>
      <ActionButton href="#reserva">
        {t('floating_cta')}
      </ActionButton>
    </StickyContainer>
  );
};
