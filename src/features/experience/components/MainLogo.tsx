import React from 'react';
import styled from 'styled-components';
import logoImg from '../../../../logo/DÍA_DE_GAUCHO_160p.png';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50px;
    height: 50px;
  }
`;

const BrandName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size.xl};
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  }
`;

export const MainLogo: React.FC = () => (
  <LogoWrapper>
    <LogoImage src={logoImg} alt="Día de Gaucho Logo" />
    <BrandName>Día de Gaucho</BrandName>
  </LogoWrapper>
);
