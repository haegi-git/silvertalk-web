import { createBrowserRouter } from 'react-router';
import RootLayout from './RootLayout';
import Home from './page/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      // Define child routes here if needed
    ],
  },
]);

export default router;