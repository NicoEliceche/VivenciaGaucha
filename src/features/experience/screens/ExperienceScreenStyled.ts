import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ScreenWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing[16]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 0;
  }
`;
