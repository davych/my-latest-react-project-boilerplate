import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import { IntelligentFormLayout } from './layouts/IntelligentFormLayout';
import { Home } from './pages/home/index';
import { HumanResourceIntelligentForm } from './pages/human-resource/IntelligentForm';

export const AppRouter: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="intelligent-form" element={<IntelligentFormLayout />}>
        <Route
          path="human-resource"
          element={<HumanResourceIntelligentForm />}
        />
      </Route>
    </Routes>
  );
};
