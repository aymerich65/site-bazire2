import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Accueil from './components/Accueil';
import Prestations from './components/Prestations';
import Galerie from './components/Galerie';
import Contact from './components/Contact';
import MentionsLegales from './components/MentionsLegales';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil/>,
  },
  {
    path: "/prestations",
    element: <Prestations/>,
  },
  {
    path: "/galerie",
    element: <Galerie/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/mentionslegales",
    element: <MentionsLegales/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
