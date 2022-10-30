import React, { Fragment } from 'react';
import { GlobalStyles } from './assets/styles/globalStyles';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
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
