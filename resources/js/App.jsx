import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import './bootstrap';
import '../css/app.css';


import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Index from './Pages/Index';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<Index/>);
    },
    progress: {
        color: '#4B5563',
    },
});
