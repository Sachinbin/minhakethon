import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { ArrowLeft } from "lucide-react";

const ProjectDetails = () => {

    const { id } = useParams()
    let navigate = useNavigate()

    // 🔥 dummy data (baad me API se replace karega)
    const projects = [
        {
            id: "1",
            title: "DevHub Social Platform",
            description: "A full-stack MERN application where developers can share blogs, projects and connect with each other.",
            tech: ["React", "Node.js", "MongoDB", "Tailwind"],
            author: "Sachin",
            date: "May 2026",
            github: "https://github.com/",
            live: "https://example.com",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        },
        {
            id: "2",
            title: "E-Commerce Backend",
            description: "Scalable backend using microservices architecture with Docker and Redis.",
            tech: ["Node", "Docker", "Redis"],
            author: "Alex",
            date: "April 2026",
            github: "https://github.com/",
            live: "https://example.com",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
        }
    ]

    // 🔍 find project
    const project = projects.find((p) => p.id === id)

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
                <h1 className="text-xl">Project Not Found ❌</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white px-4 py-10">

            <div className="max-w-4xl mx-auto">
                <h1 
                onClick={()=>navigate("/project")}
                className="flex items-center gap-2 py-5 w-fit hover:text-indigo-600 cursor-pointer">
                    <ArrowLeft size={20} />
                    Back to Projects
                </h1>

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                />

                {/* 🔥 Title */}
                <h1 className="text-3xl font-bold mb-4">
                    {project.title}
                </h1>

                {/* 🔥 Meta */}
                <div className="flex justify-between text-sm text-slate-400 mb-6">
                    <span>By {project.author}</span>
                    <span>{project.date}</span>
                </div>

                {/* 🔥 Description */}
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* 🔥 Tech Stack */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="bg-slate-800 border border-slate-700 px-3 py-1 rounded text-sm"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 🔥 Links */}
                <div className="flex gap-4 mt-6">
                    <a
                        href={project.github}
                        target="_blank"
                        className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded"
                    >
                        GitHub
                    </a>

                    <a
                        href={project.live}
                        target="_blank"
                        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
                    >
                        Live Demo 🚀
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectDetails
