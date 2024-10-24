import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import React from 'react';
import Contacts from './routes/Contacts/contacts';
import Error from './routes/error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

export default router;