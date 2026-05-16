import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { ArrowLeft } from "lucide-react";

const BlogDetails = () => {

    const { id } = useParams()
    let navigate = useNavigate()

    // 🔥 dummy blogs (same as Blog page)
    const blogs = [
        {
            id: "1",
            title: "Understanding Microservices Architecture",
            content: "This is a detailed explanation of microservices architecture. You can scale backend easily using Docker, Node.js and event-driven systems...",
            author: "Alex Noel",
            date: "May 14, 2026",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
        },
        {
            id: "2",
            title: "Mastering Tailwind CSS",
            content: "Tailwind CSS helps you build modern UI quickly. It provides utility classes for fast styling...",
            author: "Sarah Connor",
            date: "May 10, 2026",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        }
    ];

    // 🔍 Find blog by id
    const blog = blogs.find((b) => b.id === id)

    // ❌ Not found
    if (!blog) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
                <h1 className="text-xl">Blog Not Found ❌</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white px-4 py-8">

            <div className="max-w-3xl mx-auto">

                <h1
                    onClick={() => navigate("/blog")}
                    className="flex items-center gap-2 py-5 w-fit hover:text-indigo-600 cursor-pointer">
                    <ArrowLeft size={20} />
                    Back to Projects
                </h1>

                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                />

                {/* Title */}
                <h1 className="text-3xl font-bold mb-4">
                    {blog.title}
                </h1>

                {/* Meta */}
                <div className="flex justify-between text-sm text-slate-400 mb-6">
                    <span>By {blog.author}</span>
                    <span>{blog.date}</span>
                </div>

                {/* Content */}
                <p className="text-slate-300 leading-relaxed text-lg">
                    {blog.content}
                </p>

            </div>

        </div>
    )
}

export default BlogDetails