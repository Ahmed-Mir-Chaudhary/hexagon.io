import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/src/layouts/MainLayout';
import Home from '@/src/pages/Home';
import Services from '@/src/pages/Services';
import ServiceDetail from '@/src/pages/ServiceDetail';
import Industries from '@/src/pages/Industries';
import IndustryDetail from '@/src/pages/IndustryDetail';
import CaseStudies from '@/src/pages/CaseStudies';
import CaseStudyDetail from '@/src/pages/CaseStudyDetail';
import Blog from '@/src/pages/Blog';
import About from '@/src/pages/About';
import Contact from '@/src/pages/Contact';
import Privacy from '@/src/pages/Privacy';
import Terms from '@/src/pages/Terms';
import NotFound from '@/src/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServiceDetail /> },
      { path: 'industries', element: <Industries /> },
      { path: 'industries/:slug', element: <IndustryDetail /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'case-studies/:slug', element: <CaseStudyDetail /> },
      { path: 'blog', element: <Blog /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
