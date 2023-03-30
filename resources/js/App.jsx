import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import './bootstrap';
import '../css/app.css';


import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { RouterProvider,} from "react-router-dom";
import router from './Router';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<RouterProvider router={router}/>);
    },
    progress: {
        color: '#4B5563',
    },
});
