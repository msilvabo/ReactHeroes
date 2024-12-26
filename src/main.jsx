import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, RouterProvider} from 'react-router-dom';

import HeroesApp from './HeroesApp';
import './styles.css';
import { Navbar } from './ui/components/navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <HeroesApp/>
    </BrowserRouter>
  </StrictMode>,
)
