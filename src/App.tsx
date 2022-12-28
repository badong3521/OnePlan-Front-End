import { useState } from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { privateRoutes, publicRoutes } from './router/index';
import DefaultLayout from './layouts/DefaultLayout';
import LoginScreen from './feature/LoginScreen';

function App() {
  const users: any = useSelector((state) => state);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {privateRoutes.map((route, index) => {
            const PageComponent = route.component;
            let Layout: any;
            if (route.layout === true) {
              Layout = DefaultLayout;
            } else {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  users.myReducer.accessToken === undefined ? (
                    <LoginScreen />
                  ) : (
                    <Layout>
                      <PageComponent />
                    </Layout>
                  )
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
