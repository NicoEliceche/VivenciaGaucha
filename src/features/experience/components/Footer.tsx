import React from 'react';
import styled from 'styled-components';
import { MainLogo } from './MainLogo';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.neutral[400]};
  padding: ${({ theme }) => `${theme.spacing[10]} ${theme.spacing[4]}`};
  text-align: center;
  border-top: 1px solid ${({ theme }) => `${theme.color.accent}33`}; // 20% opacity

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[4]}`};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  /* Mobile layout: Stacked with separate backgrounds */
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};
    background: transparent;
    padding: 0;
    box-shadow: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
      background-color: white;
      padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
      border-radius: ${({ theme }) => theme.radius.full};
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      gap: ${({ theme }) => theme.spacing[4]};
    }
  }

  /* Image styling with conditional white background on mobile */
  img {
    width: 80px;
    height: 80px;
    background-color: white;
    padding: ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.radius.full};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 80px;
      height: 80px;
      padding: 0;
      background-color: transparent;
      box-shadow: none;
    }
  }

  /* Brand name styling */
  span {
    color: white !important; /* White on mobile dark background */
    font-size: ${({ theme }) => theme.typography.size['2xl']};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      color: ${({ theme }) => theme.color.primary} !important; /* Dark on desktop white background */
      font-size: ${({ theme }) => theme.typography.size['3xl']};
    }
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;

export const Footer: React.FC = () => (
  <FooterWrapper>
    <LogoContainer>
      <MainLogo />
    </LogoContainer>
    <Copyright>
      &copy; {new Date().getFullYear()} Experiencia Gaucha Criolla. Magdalena, Buenos Aires, Argentina.
    </Copyright>
  </FooterWrapper>
);
