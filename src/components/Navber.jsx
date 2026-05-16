import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const Navber = () => {
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate()

    return (
        <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-extrabold text-indigo-500 tracking-wider">
                            DevHub
                        </span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/" end className={({ isActive }) =>
                            isActive ? 'text-red-500' : "text-slate-300 hover:bg-slate-700 px-3 py-2 rounded-md"
                        }>Feed</NavLink>

                        <NavLink to="/blog" className={({ isActive }) =>
                            isActive ? 'text-red-500' : "text-slate-300 hover:bg-slate-700 px-3 py-2 rounded-md"
                        }>Blogs</NavLink>

                        <NavLink to="/profile" className={({ isActive }) =>
                            isActive ? 'text-red-500' : "text-slate-300 hover:bg-slate-700 px-3 py-2 rounded-md"
                        }>Profile</NavLink>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        {/* 🔥 Condition */}
                        {!currentUser ? (
                            <>
                                <button
                                    onClick={() => navigate('/auth')}
                                    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold"
                                >
                                    Login
                                </button>

                                <button
                                    onClick={() => navigate('/auth/register')}
                                    className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-semibold"
                                >
                                    Register
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate('/create-project')}
                                    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold"
                                >
                                    + Share Project
                                </button>

                                <div className="h-8 w-8 rounded-full bg-indigo-500 overflow-hidden border border-slate-600 cursor-pointer">
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                                        alt="profile"
                                    />
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navber
