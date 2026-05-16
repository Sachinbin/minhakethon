import React, { useState } from 'react'

const Profile = () => {

  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">

      {/* 🔥 LEFT SIDEBAR */}
      <div className="w-64 bg-slate-800 border-r border-slate-700 p-5 space-y-4">

        <h2 className="text-xl font-bold mb-6 text-indigo-400">
          Dashboard
        </h2>

        {/* Menu */}
        <div className="space-y-2">

          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === "profile"
                ? "bg-indigo-600"
                : "hover:bg-slate-700"
            }`}
          >
            👤 Profile
          </button>

          <button
            onClick={() => setActiveTab("createBlog")}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === "createBlog"
                ? "bg-indigo-600"
                : "hover:bg-slate-700"
            }`}
          >
            ✍️ Create Blog
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === "projects"
                ? "bg-indigo-600"
                : "hover:bg-slate-700"
            }`}
          >
            🚀 My Projects
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full text-left px-4 py-2 rounded-md ${
              activeTab === "settings"
                ? "bg-indigo-600"
                : "hover:bg-slate-700"
            }`}
          >
            ⚙️ Settings
          </button>

        </div>
      </div>

      {/* 🔥 RIGHT CONTENT */}
      <div className="flex-1 p-6">

        {/* PROFILE */}
        {activeTab === "profile" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">My Profile 👤</h1>
            <p className="text-slate-400">Here you can see your profile details.</p>
          </div>
        )}

        {/* CREATE BLOG */}
        {activeTab === "createBlog" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Create Blog ✍️</h1>

            <form className="space-y-4 max-w-lg">
              <input
                type="text"
                placeholder="Blog Title"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded"
              />
              <textarea
                placeholder="Write your blog..."
                className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded">
                Publish
              </button>
            </form>
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">My Projects 🚀</h1>
            <p className="text-slate-400">List of your created projects will appear here.</p>
          </div>
        )}

        {/* SETTINGS */}
        {activeTab === "settings" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Settings ⚙️</h1>
            <p className="text-slate-400">Manage your account settings here.</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Profile
