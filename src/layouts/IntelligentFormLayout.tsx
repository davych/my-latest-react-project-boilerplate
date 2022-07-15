import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

export const IntelligentFormLayout: FunctionComponent = () => {
  return (
    <div>
      hi
      <Outlet />
    </div>
  );
};
