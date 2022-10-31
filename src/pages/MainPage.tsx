import React from 'react';
import { Button, Typography } from 'antd';
import { useTelegram } from '../hooks/useTelegram';

export const MainPage = () => {
  const { onClose, user } = useTelegram();

  return (
    <>
      <Button onClick={onClose}>Close</Button>
      <Typography.Text>{user?.username}</Typography.Text>
    </>
  );
};
