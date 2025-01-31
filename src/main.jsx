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
import PostForm from './Admin/Pages/blog-posts/create/PostForm.jsx'
import AdminLayout from './Admin/Pages/layout'
import BlogDetails from './pages/blog/BlogDetails'
import DashboardPage from './Admin/Pages/Dashboard/DashboardPage';
import BlogPostsPage from './Admin/Pages/blog-posts/BlogPosts';
import AnalyticsPage from './Admin/Pages/analytics/AnalyticsPage'
import UsersPage from './Admin/Pages/users/UsersPage'
import CommentsPage from './Admin/Pages/comments/CommentsPage'
import SettingsPage from './Admin/Pages/settings/SettingsPage'
import AuthTabs from './pages/Auth/auth-tabs.jsx'

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
   

    {
      path: "/auth",
      element: <AuthTabs />,
    }



    


  ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <DashboardPage />
      },
      {
        path: "/admin/analytics",
        element: <AnalyticsPage />
      },
      {
        path: "/admin/comments",
        element: <CommentsPage />
      },
      {
        path: "/admin/blog-posts",
        element: <BlogPostsPage />
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
        element: <SettingsPage />
      },
      {
        path: "/admin/users",
        element: <UsersPage />
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
