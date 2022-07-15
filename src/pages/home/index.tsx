import { Button } from 'antd';
import React, { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  const gotoHumanResourece = useCallback(() => {
    navigate('/intelligent-form/human-resource');
  }, [navigate]);
  return (
    <h1>
      这是主页 <Button onClick={gotoHumanResourece}>人力资源页面</Button>
    </h1>
  );
};
