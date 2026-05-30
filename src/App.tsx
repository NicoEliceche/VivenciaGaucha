import React from 'react';
import { ThemeProvider } from './core/theme/ThemeProvider';
import { LanguageProvider } from './core/i18n/LanguageContext';
import { ExperienceFeature } from './features/experience';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ExperienceFeature />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
