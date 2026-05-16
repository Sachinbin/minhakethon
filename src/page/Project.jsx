import React from 'react'
import { useNavigate } from 'react-router'

const Project = () => {
  let navigate = useNavigate()
  // dummy projects (baad me API se replace karega)
  const projects = [
    {
      id: 1,
      title: "DevHub Social Platform",
      description: "A full-stack MERN app for developers to share projects, blogs, and collaborate.",
      tech: ["React", "Node", "MongoDB"],
      author: "Sachin",
    },
    {
      id: 2,
      title: "E-Commerce Backend",
      description: "Scalable microservices backend using Node.js, Docker, and Redis.",
      tech: ["Node", "Docker", "Redis"],
      author: "Alex",
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* 🔥 Header */}
      <div className="bg-slate-900 border-b border-slate-700 py-8 text-center">
        <h1 className="text-3xl font-bold">
          DevHub <span className="text-indigo-500">Projects</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Explore projects built by developers 🚀
        </p>
      </div>

      {/* 🔥 Project List */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-lg hover:border-indigo-500 transition"
          >

            {/* Title */}
            <h2 className="text-lg font-bold text-white mb-2">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-slate-900 px-2 py-1 rounded border border-slate-700 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm text-slate-400 border-t border-slate-700 pt-3">
              <span>by {project.author}</span>

              <button
                onClick={() =>navigate(`/project/${project.id}`)}
                className="text-indigo-400 hover:text-indigo-300 font-semibold">
                View →
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Project
