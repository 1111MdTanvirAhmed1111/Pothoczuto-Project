import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from 'react-router-dom'
import { Outlet, RouterProvider } from 'react-router'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import { ThemeProvider } from './Api/ThemeContext.jsx'

import Blog from './pages/blog/Blog'
import PostForm from './pages/PostForm.jsx'
import AdminLayout from './Admin/Pages/layout'
import BlogDetails from './pages/blog/BlogDetails.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:  [
      
    {
      path: "/",
      element: <Home />
    }, 
    {
      path: "/about",
      element: <About />
    }, 
    {
      path: "/contact",
      element: <Contact />
    }, 
    {
      path: "/blog",
      element: <Blog />
    }, 
    {
      path: "/blog/:id",
      element: <BlogDetails/>
    }, 
   

 



    


  ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/analytics",
        element: <Blog />
      },
      {
        path: "/admin/blog-posts",
        element: <Blog />
      },
      {
        path: "/admin/blog-posts/create",
        element: <PostForm />
      },
  
      {
        path: "/admin/categories",
        element: <Blog />
      },
      {
        path: "/admin/dashboard",
        element: <Blog />
      },
      {
        path: "/admin/settings",
        element: <Blog />
      },
      {
        path: "/admin/users",
        element: <Blog />
      },

    ]
  }, 


])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
   <RouterProvider router={router} /> 
   </ThemeProvider>
  </StrictMode>,
)
