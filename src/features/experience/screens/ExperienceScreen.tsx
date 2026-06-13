import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Multimedia } from '../components/Multimedia';
import { Reviews } from '../components/Reviews';
import { Location } from '../components/Location';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { SectionCTA } from '../components/SectionCTA';
import { Footer } from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';
import { WhatsAppFloatingCTA } from '../components/WhatsAppFloatingCTA';
import { MainContent, ScreenWrapper } from './ExperienceScreenStyled';

export const ExperienceScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <Header />
      <MainContent>
        <Hero />
        <Services />
        <Multimedia />
        <Reviews />
        <SectionCTA titleKey="cta_roots" />
        <Location />
        <SectionCTA titleKey="cta_magic" />
        <Pricing />
        <FAQ />
        <SectionCTA titleKey="cta_join_us" />
      </MainContent>
      <Footer />
      <FloatingCTA />
      <WhatsAppFloatingCTA />
    </ScreenWrapper>
  );
};
