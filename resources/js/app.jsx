import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Header from './Components/assets/Header';
import Footer from './Components/assets/Footer';
import App from './Layouts/App';
import Layout from './Layouts/Layout';

const appName = import.meta.env.VITE_APP_NAME;


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')).then(module => module.default),
    setup({ el, App, props }) {
      const root = createRoot(el);
      root.render(
          <App {...props} />
      );
    },
  });
