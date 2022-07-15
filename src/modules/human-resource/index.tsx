import React, { FunctionComponent } from 'react';

import HumanForm from './form/index';

const HumanResourceFormPageRouter: FunctionComponent = () => {
  return (
    <h1>
      人力资源智能表单填写页
      <HumanForm />
    </h1>
  );
};

export default HumanResourceFormPageRouter;
