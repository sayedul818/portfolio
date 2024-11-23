import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './pages/About/About.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <About></About>
      },
      {
        path:"/resume",
        element:<Resume></Resume>
      },
      {
        path:"/portfolio",
        element:<Portfolio></Portfolio>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

