import React from 'react';
import styled from 'styled-components';
import droneVideo from '../../../../frontend/assets/gauchos_dron_1080p.mp4';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const MultimediaWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.textInverse};
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]}`};
  scroll-margin-top: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[24]} ${theme.spacing[12]}`};
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[16]};
  }
`;

const VisualBox = styled.div`
  width: 100%;
  order: 2; /* Title first on mobile */
  background-color: #000;
  border-radius: ${({ theme }) => theme.radius['2xl']};
  border: 1px solid ${({ theme }) => `${theme.color.accent}4D`}; // 30% opacity
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  aspect-ratio: 16 / 9;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
    order: 2; /* Video on right on desktop */
  }
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing[6]};
  z-index: 2;
`;

const VisualTitle = styled.p`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.lg};
  color: white;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
`;

const VisualSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.xs};
  color: ${({ theme }) => theme.color.neutral[300]};
  margin-top: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

const Content = styled.div`
  width: 100%;
  order: 1; /* Title first on mobile */
  text-align: center; /* Centered by default for mobile */

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
    order: 1; /* Title on left on desktop */
    text-align: left; /* Left aligned for desktop */
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  color: ${({ theme }) => theme.color.accent};
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.size.base};
  color: ${({ theme }) => theme.color.neutral[300]};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.lg};
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  text-align: left; /* Keep list items left aligned for readability */
  max-width: 28rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.lg};
    margin: 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const CheckMark = styled.span`
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: 1;
`;

export const Multimedia: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <MultimediaWrapper id="multimedia">
      <Container>
        <VisualBox>
          <VideoBackground 
            src={droneVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <VideoOverlay>
            <VisualTitle>{t('multimedia_visual_title')}</VisualTitle>
            <VisualSubtitle>{t('multimedia_visual_subtitle')}</VisualSubtitle>
          </VideoOverlay>
        </VisualBox>

        <Content>
          <Title>{t('multimedia_title')}</Title>
          <Text>{t('multimedia_text')}</Text>
          <List>
            <ListItem><CheckMark>✓</CheckMark> <span>{t('multimedia_item_1')}</span></ListItem>
            <ListItem><CheckMark>✓</CheckMark> <span>{t('multimedia_item_2')}</span></ListItem>
            <ListItem><CheckMark>✓</CheckMark> <span>{t('multimedia_item_3')}</span></ListItem>
            <ListItem><CheckMark>✓</CheckMark> <span>{t('multimedia_item_4')}</span></ListItem>
          </List>
        </Content>
      </Container>
    </MultimediaWrapper>
  );
};
