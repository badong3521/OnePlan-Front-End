import { useEffect } from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './router/index';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
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
                  <Layout>
                    <PageComponent />
                  </Layout>
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
