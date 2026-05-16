import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

import AuthLayout from '../features/layout/AuthLayout'
import Login from '../components/Login'
import Register from '../components/Register'
import MainLayout from '../features/layout/MainLayout'
import Home from '../page/Home'

import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import Blog from '../page/Blog'
import Profile from '../features/profile/ui/page/Profile'
import Project from '../page/Project'
import ProfileLayout from '../features/layout/ProfileLayout'
import BlogDetails from '../components/BlogDetails'
import ProjectDetails from '../components/ProjectDetails'

const AppRoute = () => {

    let router = createBrowserRouter([
        // 🔐 Protected Routes
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'blog',
                    element: <Blog />
                },
                {
                    path:'blog/:id',
                    element:<BlogDetails/>
                },
                {
                    path: "project",
                    element: <Project />
                },
                 {
                    path:'project/:id',
                    element:<ProjectDetails/>
                },
            ]
        },


        
        {
            path: '/auth',
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                }
            ]
        },
        {
            path:'/profile',
            element:<ProfileLayout/>,
            children:[
                {
                    path:"",
                    element:<Profile/>
                }
            ]
        }

        
    ])

    return <RouterProvider router={router} />
}

export default AppRoute
