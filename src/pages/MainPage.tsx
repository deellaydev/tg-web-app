import React, {useEffect} from 'react';
import {Button, Typography} from 'antd';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const tg = window.Telegram.WebApp;

export const MainPage = () => {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <Typography.Title>Тут будет разъёбное приложение</Typography.Title>
      <Button onClick={onClose}>Close</Button>
    </>
  );
};
