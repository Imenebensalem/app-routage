import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apropos from './components/Apropos';
import ErrorPage from './components/ErrorPage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Presentation from './components/Presentation';
import Articles from './components/Articles';
import Article from './components/Article';
import Contact from './components/Contact';
import Accueil from './components/Accueil';

const root = ReactDOM.createRoot(document.getElementById('root'));
//façon 2 pour routage en react

const isAuthenticated = false;
const route = createBrowserRouter ([

  {
    path: "/",
    element : <App />,
    errorElement : <ErrorPage />,
    
  },
  {
    path: "/Accueil",
    element : <Accueil />,
  },
  {
    path: "/Presentation",
    element : <Presentation />,
    children: [
      { path: 'Apropos', element: <Apropos /> },
      { path: 'Contact', element: <Contact /> },
    ],
  },
  {
    path: "/Articles",
    element : <Articles />,
  },
  {
    path: "/Articles/:numero",
    element : <Article />,
  },
  

])


root.render(
  <React.StrictMode>
      <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




