import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './Pages/Home/Home-page.jsx'
import Products from './Pages/Products/Products.jsx'
import About from './Pages/About/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './Components/Product-details.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "products", element: <Products /> },
      { path: "about", element: <About /> },
      { path: "product-details", element: <ProductDetails />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
