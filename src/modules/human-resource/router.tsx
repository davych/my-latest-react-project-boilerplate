import React from 'react';
import { Route } from 'react-router-dom';

import HumanResourceFormPageRouter from '.';

export default (
  <>
    <Route path="human-resource" element={<HumanResourceFormPageRouter />} />
  </>
);
