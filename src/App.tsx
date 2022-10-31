import React, { Fragment, useEffect } from 'react';
import { GlobalStyles } from './assets/styles/globalStyles';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useTelegram } from './hooks/useTelegram';

export const App = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
};
