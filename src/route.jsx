import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./pages/home/index'));

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home />} />
        </Route>
    )
);
export default routes;
