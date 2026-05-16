import React, { useState } from 'react'

const CreateProfile = () => {
    
    return (
        <div>
            <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-7">
                <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-xl shadow-xl p-8">

                    <h2 className="text-2xl font-bold text-white text-center mb-6">
                        Create Your Profile 🚀
                    </h2>

                    <form className="space-y-5">

                        {/* Name */}
                        <div>
                            <label className="text-sm text-slate-300">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label className="text-sm text-slate-300">Role / Title</label>
                            <input
                                type="text"
                                placeholder="e.g. Full Stack Developer"
                                className="mt-1 w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                            />
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="text-sm text-slate-300">Bio</label>
                            <textarea
                                rows="3"
                                placeholder="Tell something about yourself..."
                                className="mt-1 w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                            ></textarea>
                        </div>

                        {/* Skills */}
                        <div>
                            <label className="text-sm text-slate-300">Skills</label>
                            <input
                                type="text"
                                placeholder="React, Node, MongoDB..."
                                className="mt-1 w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="GitHub URL"
                                className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                            />
                            <input
                                type="text"
                                placeholder="LinkedIn URL"
                                className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md text-white font-semibold transition"
                        >
                            Save Profile
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}



export default CreateProfile
