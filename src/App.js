import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';
import './App.css';
import DefaultLayout from './components/Layout/User/DefaultLayout';

function App() {
  return (
    <div className='App'>
      <Routes>
        {
          publicRoute.map((route, index) => {
            const Page = route.component;
            const Layout = route?.layout || DefaultLayout;
            return <Route key={index} path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })
        }
      </Routes>
    </div>

  );
}

export default App;
