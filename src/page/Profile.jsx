import React, { useState } from 'react';
import CreateProfile from '../components/CreateProfile';

const Profile = () => {
    let [openForm, setOpenForm] = useState(false)
    // Dummy data sirf UI ko achha dikhane ke liye (bina kisi logic ke)
    // const dummyUser = {
    //     name: "John Doe",
    //     role: "Full Stack Developer @ Freelance",
    //     bio: "Building scalable web apps and exploring decentralized technology. Open to collaborations on open-source projects!",
    //     skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Git"],
    //     projects: [
    //         { id: 1, title: "E-Commerce Microservices", tags: "#Node #Docker" },
    //         { id: 2, title: "DevHub Social Platform", tags: "#React #Tailwind" }
    //     ]
    // };
    let dummyUser = null
    return (
        <div>
            {
                openForm ? <CreateProfile /> : <div>
                    {
                        dummyUser ?
                            (<div className="min-h-screen bg-slate-900 text-white font-sans">

                                {/* 1. TOP PROFILE HEADER SECTION */}
                                <div className="bg-slate-800 border-b border-slate-700 py-12 shadow-xl">
                                    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">

                                        {/* Avatar Image */}
                                        <div className="h-28 w-28 rounded-full bg-indigo-600 overflow-hidden border-4 border-slate-700 shadow-2xl">
                                            <img
                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
                                                alt="Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* User Bio Details */}
                                        <div className="flex-1 text-center md:text-left space-y-3">
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:justify-start">
                                                <h1 className="text-3xl font-extrabold tracking-tight">{dummyUser.name}</h1>
                                                <button className="px-4 py-1.5 border border-slate-600 hover:border-indigo-500 rounded-lg text-xs font-semibold transition text-slate-300 hover:text-white">
                                                    Edit Profile
                                                </button>
                                            </div>
                                            <p className="text-indigo-400 font-medium text-sm">{dummyUser.role}</p>
                                            <p className="text-slate-300 text-sm max-w-xl leading-relaxed mx-auto md:mx-0">
                                                {dummyUser.bio}
                                            </p>

                                            {/* Social Links */}
                                            <div className="flex justify-center md:justify-start gap-4 pt-2 text-sm text-slate-400">
                                                <a href="#" className="hover:text-indigo-400 transition">🌐 Portfolio</a>
                                                <a href="#" className="hover:text-indigo-400 transition">🐙 GitHub</a>
                                                <a href="#" className="hover:text-indigo-400 transition">💼 LinkedIn</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. MAIN CONTENT: SKILLS & PROJECTS GRID */}
                                <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                                    {/* Left Side: Core Skills Panel */}
                                    <div className="md:col-span-1">
                                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-lg">
                                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Core Skills</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {dummyUser.skills.map((skill) => (
                                                    <span key={skill} className="text-xs bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-md text-slate-300 font-medium">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: My Projects Showcase Grid */}
                                    <div className="md:col-span-2 space-y-4">
                                        <h2 className="text-xl font-bold tracking-tight text-slate-200">My Projects ({dummyUser.projects.length})</h2>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {dummyUser.projects.map((project) => (
                                                <div key={project.id} className="bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl p-5 shadow-lg transition duration-200">
                                                    <h4 className="font-bold text-lg text-white mb-2">{project.title}</h4>
                                                    <p className="text-slate-400 text-xs line-clamp-2 mb-4">
                                                        A high-performance system designed to streamline workflow and data operations.
                                                    </p>
                                                    <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-700/50 pt-3">
                                                        <span className="text-indigo-400">{project.tags}</span>
                                                        <a href="#" className="hover:text-white font-medium">View Demo →</a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>

                                </div>
                            </div>)
                            :
                            (<div className="bg-slate-900  h-[100vh] flex items-center justify-center">
                                <button
                                    onClick={() => setOpenForm((prev) => !prev)}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition duration-200"
                                >
                                    Create Profile 🚀
                                </button>   
                            </div>)
                    }
                </div>
            }
        </div>
    );

};




export default Profile; 