import React, { useState } from 'react';
import styled from 'styled-components';
import { MainLogo } from './MainLogo';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => `${theme.color.background}F2`}; // 95% opacity
  backdrop-filter: blur(8px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[12]}`};
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LanguageToggle = styled.button`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  border-radius: ${({ theme }) => theme.radius.full};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.xs};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  &:hover {
    border-color: ${({ theme }) => theme.color.leather};
    color: ${({ theme }) => theme.color.leather};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.typography.size.sm};
    min-width: 160px;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing[8]};
    align-items: center;
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryLight};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.leather};
  }
`;

const ReserveButton = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.leather};
  color: ${({ theme }) => theme.color.textInverse};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[6]}`};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-height: ${({ $isOpen }) => ($isOpen ? '400px' : '0')};
  padding: ${({ $isOpen, theme }) => ($isOpen ? `${theme.spacing[6]} 0` : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const MobileNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
`;

const MobileReserveBtn = styled(ReserveButton)`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.lg};
  
  &:active {
    transform: scale(0.95);
  }
`;

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <HeaderWrapper>
      <NavContainer>
        <MainLogo />
        
        <NavActions>
          <LanguageToggle onClick={toggleLanguage} aria-label="Cambiar idioma">
            {language === 'es' ? 'INGLÉS / ENGLISH' : 'ESPAÑOL / SPANISH'}
          </LanguageToggle>

          <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
            <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </MenuButton>

          <DesktopNav>
            <NavLink href="#experiencia">{t('nav_experience')}</NavLink>
            <NavLink href="#ubicacion">{t('nav_location')}</NavLink>
            <ReserveButton href="#reserva">{t('nav_reserve')}</ReserveButton>
          </DesktopNav>
        </NavActions>
      </NavContainer>

      <MobileMenu $isOpen={isOpen}>
        <MobileNavLinks>
          <MobileNavLink href="#experiencia" onClick={() => setIsOpen(false)}>{t('nav_experience')}</MobileNavLink>
          <MobileNavLink href="#ubicacion" onClick={() => setIsOpen(false)}>{t('nav_location')}</MobileNavLink>
          <MobileReserveBtn href="#reserva" onClick={() => setIsOpen(false)}>{t('nav_reserve')}</MobileReserveBtn>
        </MobileNavLinks>
      </MobileMenu>
    </HeaderWrapper>
  );
};
