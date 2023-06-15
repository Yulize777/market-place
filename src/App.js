import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Login/Register';
import Auth from './pages/Login/Auth';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path={''} />
        <Route element={<Register />} path="/register" />
        <Route element={<Auth />} path="/auth" />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};

export default App;
