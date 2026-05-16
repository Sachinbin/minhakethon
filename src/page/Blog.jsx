import React from 'react';

const Blog = () => {
  // Dummy data sirf UI feed ko populate karne ke liye
  const dummyBlogs = [
    {
      id: 1,
      title: "Understanding Microservices Architecture in 2026",
      summary: "A deep dive into building scalable backend services using Node.js, Docker, and event-driven communication protocols.",
      author: "Alex Noel",
      date: "May 14, 2026",
      tags: ["Backend", "System Design"]
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS Grid & Flexbox",
      summary: "Stop guessing your layouts. Learn how to align components perfectly every single time with this definitive visual guide.",
      author: "Sarah Connor",
      date: "May 10, 2026",
      tags: ["Frontend", "CSS"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      
      {/* Header Banner */}
      <div className="bg-slate-800 border-b border-slate-700 py-8 px-4 sm:px-6 lg:px-8 text-center shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-tight">
          DevHub <span className="text-indigo-500">Technical Blogs</span>
        </h1>
        <p className="mt-2 text-sm text-slate-400">Share your knowledge, read insights, and grow together as an engineer.</p>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* LEFT COLUMN: Write a New Blog Form (2/5 Space) */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl sticky top-24">
            <h2 className="text-xl font-bold mb-4 text-slate-200">Write a New Blog 📝</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider">Blog Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Getting Started with Next.js"
                  className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider">Tags (Comma Separated)</label>
                <input 
                  type="text" 
                  placeholder="e.g., React, JavaScript, WebDev"
                  className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider">Content</label>
                <textarea 
                  rows="6"
                  placeholder="Write your technical article here in detail..."
                  className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-semibold text-white transition duration-200"
              >
                Publish Blog
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: Published Blogs Feed (3/5 Space) */}
        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-xl font-bold text-slate-200 flex items-center gap-2">
            Recent Articles
            <span className="text-xs bg-slate-800 border border-slate-700 text-indigo-400 px-2 py-0.5 rounded-full">Latest</span>
          </h2>

          <div className="space-y-4">
            {dummyBlogs.map((blog) => (
              <div key={blog.id} className="bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl p-6 shadow-xl transition-all duration-200">
                
                {/* Meta info (Author & Date) */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-300 hover:text-indigo-400 cursor-pointer">{blog.author}</span>
                  </div>
                  <span>{blog.date}</span>
                </div>

                {/* Blog Title */}
                <h3 className="text-xl font-bold text-white mb-2 hover:text-indigo-400 cursor-pointer transition">
                  {blog.title}
                </h3>

                {/* Summary / Snippet */}
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-4">
                  {blog.summary}
                </p>

                {/* Bottom Row: Tags & Read More */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                  <div className="flex gap-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-900 text-slate-400 px-2.5 py-1 rounded-md border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition">
                    Read Full Article →
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
