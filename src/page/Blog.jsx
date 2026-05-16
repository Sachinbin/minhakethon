import React from 'react';
import { useNavigate } from 'react-router';

const Blog = () => {
  let navigate = useNavigate()
  // Dummy blogs (baad me API se replace karega)
  const dummyBlogs = [
    {
      id: 1,
      title: "Understanding Microservices Architecture in 2026",
      summary: "A deep dive into building scalable backend services using Node.js, Docker, and event-driven systems.",
      author: "Alex Noel",
      date: "May 14, 2026",
      tags: ["Backend", "System Design"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS Grid & Flexbox",
      summary: "Learn how to align components perfectly every single time using modern CSS techniques.",
      author: "Sarah Connor",
      date: "May 10, 2026",
      tags: ["Frontend", "CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">

      {/* 🔥 Header */}
      <div className="bg-slate-900 border-b border-slate-700 py-8 text-center shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-tight">
          DevHub <span className="text-indigo-500">Blogs</span>
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Read insights from developers around the world 🚀
        </p>
      </div>

      {/* 🔥 Blog Feed */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        <h2 className="text-xl font-bold text-slate-200 flex items-center gap-2">
          Recent Articles
          <span className="text-xs bg-slate-800 border border-slate-700 text-indigo-400 px-2 py-0.5 rounded-full">
            Latest
          </span>
        </h2>

        {/* Blog Cards */}
        <div className="space-y-4">
          {dummyBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl p-6 shadow-xl transition-all duration-200"
            >

              {/* Author & Date */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="font-semibold text-slate-300 hover:text-indigo-400 cursor-pointer">
                  {blog.author}
                </span>
                <span>{blog.date}</span>
              </div>

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 hover:text-indigo-400 cursor-pointer transition">
                {blog.title}
              </h3>

              {/* Summary */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {blog.summary}
              </p>

              {/* Tags + CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                <div className="flex gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-900 text-slate-400 px-2.5 py-1 rounded-md border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate(`/blog/${blog.id}`)} className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition">
                  Read More →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
