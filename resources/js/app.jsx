import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Welcome from './Components/assets/Welcome';



const appName = import.meta.env.VITE_APP_NAME;


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')).then(module => module.default),
    setup({ el, App, props }) {
      const Layout = props.layout || Welcome;
      const root = createRoot(el);
      root.render(
        <Layout>
          <App {...props} />
        </Layout>
      );
    },
  });
//    