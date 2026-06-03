import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const ReviewsWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.color.primary};
  text-align: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  color: ${({ theme }) => theme.color.accent};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ReviewCard = styled.div`
  background-color: ${({ theme }) => theme.color.primaryLight};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Quote = styled.p`
  color: ${({ theme }) => theme.color.neutral[100]};
  font-size: ${({ theme }) => theme.typography.size.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  &::before {
    content: '"';
    font-family: ${({ theme }) => theme.typography.fontFamily.title};
    font-size: 2rem;
    color: ${({ theme }) => theme.color.accent};
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;

const Author = styled.span`
  color: ${({ theme }) => theme.color.accent};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.base};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Reviews: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    { text: t('review_1_text'), author: t('review_1_author') },
    { text: t('review_2_text'), author: t('review_2_author') },
    { text: t('review_3_text'), author: t('review_3_author') },
  ];

  return (
    <ReviewsWrapper>
      <Title>{t('reviews_title')}</Title>
      <Grid>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <Quote>{review.text.replace(/^"|"$/g, '')}</Quote>
            <Author>{review.author}</Author>
          </ReviewCard>
        ))}
      </Grid>
    </ReviewsWrapper>
  );
};
