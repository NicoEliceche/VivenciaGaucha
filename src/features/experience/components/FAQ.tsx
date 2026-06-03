import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../../core/i18n/LanguageContext';

const FAQWrapper = styled.section`
  padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.color.background};
  max-width: 48rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Item = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

const Question = styled.button<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[4]} 0`};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  
  font-family: ${({ theme }) => theme.typography.fontFamily.title};
  font-size: ${({ theme }) => theme.typography.size.lg};
  color: ${({ theme, isOpen }) => (isOpen ? theme.color.accent : theme.color.primary)};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }

  &::after {
    content: '${({ isOpen }) => (isOpen ? '−' : '+')}';
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    margin-left: ${({ theme }) => theme.spacing[4]};
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  padding-bottom: ${({ theme, isOpen }) => (isOpen ? theme.spacing[6] : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('faq_q1'), a: t('faq_a1') },
    { q: t('faq_q2'), a: t('faq_a2') },
    { q: t('faq_q3'), a: t('faq_a3') },
    { q: t('faq_q4'), a: t('faq_a4') },
    { q: t('faq_q5'), a: t('faq_a5') },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQWrapper id="faq">
      <Title>{t('faq_title')}</Title>
      <Accordion>
        {faqs.map((faq, index) => (
          <Item key={index}>
            <Question 
              isOpen={openIndex === index} 
              onClick={() => toggle(index)}
            >
              {faq.q}
            </Question>
            <Answer isOpen={openIndex === index}>
              {faq.a}
            </Answer>
          </Item>
        ))}
      </Accordion>
    </FAQWrapper>
  );
};
