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
import Profile from '../page/Profile'

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
                    path: "profile",
                    element: <Profile />
                }
            ]
        },


        // 🔓 Public Routes
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

        
    ])

    return <RouterProvider router={router} />
}

export default AppRoute
