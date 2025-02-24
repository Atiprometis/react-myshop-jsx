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
import HomeEdit from './pages/HomeEdit'

import TodoApp from './pages/todoapp/TodoApp'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <TodoApp /> },
      { path: "/about", element: <About /> },
      { path: "/product", element: <ProductDetail /> },
    ],
  },
 

  {
    path:`/todo/:id`,
    element: <HomeEdit/>,
    errorElement: <ErrorPage />
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />

  </StrictMode>,
)
