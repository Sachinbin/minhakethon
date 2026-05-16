import React from 'react';

const Home = () => {
  // Dummy data sirf UI dekhne ke liye (Taaki cards khali na lagein)
  const dummyProjects = [
    {
      id: 1,
      title: "E-Commerce Microservices",
      desc: "A scalable online store built with Node.js and Docker, implementing event-driven architecture.",
      tech: ["Node.js", "Docker", "RabbitMQ", "MongoDB"],
      author: "Alex Noel",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80&q=80",
      likes: 24
    },
    {
      id: 2,
      title: "DevHub Social Platform",
      desc: "The ultimate portfolio and social hub for developers to showcase their side projects.",
      tech: ["React", "TailwindCSS", "Express", "JWT"],
      author: "Sarah Connor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
      likes: 42
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      
      {/* 1. TOP NAVBAR */}
     

      {/* 2. MAIN LAYOUT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR: Welcome & Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-xl">
              <h2 className="text-lg font-bold mb-2">Welcome Back! 👋</h2>
              <p className="text-slate-400 text-sm">Explore fresh ideas, projects, and connect with fellow engineers.</p>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-xl">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Web3", "Next.js", "AI", "Python"].map((tag) => (
                  <span key={tag} className="text-xs bg-slate-700 hover:bg-indigo-600 px-2.5 py-1 rounded-md font-medium cursor-pointer transition">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE CONTENT: Search & Project Feed */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* SEARCH BAR COMPONENT */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search projects by tech stack, title, or skills..." 
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-3.5 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* PROJECT LIST */}
            <div className="space-y-4">
              {dummyProjects.map((project) => (
                <div key={project.id} className="bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl p-6 shadow-xl transition-all duration-200">
                  
                  {/* Project Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <img src={project.avatar} alt={project.author} className="w-9 h-9 rounded-full object-cover border border-slate-600" />
                    <div>
                      <h4 className="font-semibold text-sm text-slate-200">{project.author}</h4>
                      <p className="text-xs text-slate-400">Posted 2 hours ago</p>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 hover:text-indigo-400 cursor-pointer transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-slate-900 text-indigo-400 border border-indigo-900/50 px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions: Likes, GitHub, Live Demo */}
                  <div className="flex items-center justify-between border-t border-slate-700/50 pt-4 text-sm text-slate-400">
                    <button className="flex items-center gap-1.5 hover:text-red-400 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{project.likes} Likes</span>
                    </button>

                    <div className="flex items-center gap-4">
                      <a href="#" className="hover:text-white transition font-medium">GitHub</a>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 transition font-semibold">Live Demo →</a>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
