import React from 'react';
import styled from 'styled-components';
import logoImg from '../../../../logo/DÍA_DE_GAUCHO_160p.png';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[3]};
    margin-left: 0;
  }
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50px;
    height: 50px;
  }
`;

const BrandName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: 0;
  color: ${({ theme }) => theme.color.primary};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.lg};
    letter-spacing: 0.05em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
`;

const MobileBrandLine = styled.span`
  display: block;
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const DesktopBrandLine = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    white-space: nowrap;
  }
`;

export const MainLogo: React.FC = () => (
  <LogoWrapper>
    <LogoImage src={logoImg} alt="Asociación Tradicionalista Gauchos de Magdalena" />
    <BrandName>
      <MobileBrandLine>Asociación Tradicionalista</MobileBrandLine>
      <MobileBrandLine>Gauchos de Magdalena</MobileBrandLine>
      <DesktopBrandLine>Asociación Tradicionalista Gauchos</DesktopBrandLine>
      <DesktopBrandLine>de Magdalena</DesktopBrandLine>
    </BrandName>
  </LogoWrapper>
);
