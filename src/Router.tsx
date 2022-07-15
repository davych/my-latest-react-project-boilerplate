import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import { IntelligentFormLayout } from './layouts/IntelligentFormLayout';
import HomeRouter from './modules/home/router';
import HumanResourceFormPageRouter from './modules/human-resource/router';

export const AppRouter: FunctionComponent = () => {
  return (
    <Routes>
      {HomeRouter}
      <Route path="intelligent-form" element={<IntelligentFormLayout />}>
        {HumanResourceFormPageRouter}
      </Route>
    </Routes>
  );
};
