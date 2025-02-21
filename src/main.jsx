import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import ErrorPage from './error-page.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'
import App from './App'
import About from './pages/About'
import ProductDetail from './pages/product/ProductDetail'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/product", element: <ProductDetail /> },

    ],
  },

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />

  </StrictMode>,
)
