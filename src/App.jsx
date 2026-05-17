import React, { useState } from "react";
import {
  FaHome,
  FaFileAlt,
  FaBriefcase,
  FaBell,
  FaRobot,
  FaSignOutAlt,
  FaUpload,
} from "react-icons/fa";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [resume, setResume] = useState(null);

  const handleResume = (e) => {
    setResume(e.target.files[0]);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#060816] flex items-center justify-center relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

        <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10">
          <div className="text-center mb-10">
            <div className="w-24 h-24 mx-auto rounded-[30px] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-5xl mb-6">
              🚀
            </div>

            <h1 className="text-5xl font-bold text-white mb-3">PlacementPro</h1>

            <p className="text-gray-400">Premium AI Placement Platform</p>
          </div>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none mb-5"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none mb-8"
          />

          <button
            onClick={() => setLoggedIn(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-5 rounded-2xl text-xl font-bold hover:scale-105 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060816] text-white flex relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full top-[-200px] left-[-100px]" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Sidebar */}
      <div className="relative z-10 w-28 bg-white/5 backdrop-blur-2xl border-r border-white/10 flex flex-col items-center py-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mb-12">
          🚀
        </div>

        <div className="space-y-6 flex-1">
          <button
            onClick={() => setPage("dashboard")}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition ${
              page === "dashboard"
                ? "bg-gradient-to-r from-purple-600 to-pink-500"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <FaHome />
          </button>

          <button
            onClick={() => setPage("resume")}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition ${
              page === "resume"
                ? "bg-gradient-to-r from-purple-600 to-pink-500"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <FaFileAlt />
          </button>

          <button
            onClick={() => setPage("jobs")}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition ${
              page === "jobs"
                ? "bg-gradient-to-r from-purple-600 to-pink-500"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <FaBriefcase />
          </button>

          <button
            onClick={() => setPage("notifications")}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition ${
              page === "notifications"
                ? "bg-gradient-to-r from-purple-600 to-pink-500"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <FaBell />
          </button>

          <button
            onClick={() => setPage("ai")}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition ${
              page === "ai"
                ? "bg-gradient-to-r from-purple-600 to-pink-500"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <FaRobot />
          </button>
        </div>

        <button
          onClick={() => setLoggedIn(false)}
          className="w-16 h-16 rounded-2xl bg-red-500 hover:bg-red-600 flex items-center justify-center text-2xl"
        >
          <FaSignOutAlt />
        </button>
      </div>

      {/* Main */}
      <div className="relative z-10 flex-1 p-10 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold mb-3">Welcome Back 👋</h1>

            <p className="text-gray-400 text-xl">
              Premium AI Placement Dashboard
            </p>
          </div>

          <div className="flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
              H
            </div>

            <div>
              <h2 className="text-xl font-bold">Harshitha</h2>

              <p className="text-gray-400">Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        {page === "dashboard" && (
          <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                <p className="text-gray-400 mb-5">ATS Score</p>
                <h1 className="text-7xl font-bold text-cyan-400">92</h1>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                <p className="text-gray-400 mb-5">Applications</p>
                <h1 className="text-7xl font-bold text-purple-400">42</h1>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                <p className="text-gray-400 mb-5">Interviews</p>
                <h1 className="text-7xl font-bold text-green-400">16</h1>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                <p className="text-gray-400 mb-5">Offers</p>
                <h1 className="text-7xl font-bold text-pink-400">5</h1>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 p-10 rounded-[40px]">
                <h1 className="text-4xl font-bold mb-5">🤖 AI Resume Review</h1>

                <p className="text-gray-300">Analyze ATS score instantly.</p>
              </div>

              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/10 border border-pink-500/20 p-10 rounded-[40px]">
                <h1 className="text-4xl font-bold mb-5">🎯 Interview Prep</h1>

                <p className="text-gray-300">
                  AI-generated interview questions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/10 border border-green-500/20 p-10 rounded-[40px]">
                <h1 className="text-4xl font-bold mb-5">📈 Skill Tracking</h1>

                <p className="text-gray-300">Track coding growth.</p>
              </div>
            </div>
          </div>
        )}

        {/* Resume */}
        {page === "resume" && (
          <div>
            <h1 className="text-5xl font-bold mb-10">Resume Analysis</h1>

            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px]">
              <label className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-5 rounded-2xl cursor-pointer inline-flex items-center gap-4 text-xl font-bold">
                <FaUpload />
                Upload Resume
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleResume}
                />
              </label>

              {resume && (
                <div className="mt-10 bg-black/20 p-8 rounded-3xl">
                  <h2 className="text-3xl font-bold text-green-400 mb-3">
                    Resume Uploaded Successfully ✅
                  </h2>

                  <p>{resume.name}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Jobs */}
        {page === "jobs" && (
          <div>
            <h1 className="text-5xl font-bold mb-10">Job Opportunities</h1>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                <h1 className="text-3xl font-bold mb-4">Frontend Developer</h1>

                <p className="text-gray-400 mb-6">
                  React • Tailwind • JavaScript
                </p>

                <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-2xl">
                  Apply
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                <h1 className="text-3xl font-bold mb-4">
                  Full Stack Developer
                </h1>

                <p className="text-gray-400 mb-6">MERN Stack • Node.js</p>

                <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-2xl">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {page === "notifications" && (
          <div>
            <h1 className="text-5xl font-bold mb-10">Notifications</h1>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                Microsoft interview scheduled tomorrow.
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                ATS score improved to 92%.
              </div>
            </div>
          </div>
        )}

        {/* AI */}
        {page === "ai" && (
          <div>
            <h1 className="text-5xl font-bold mb-10">AI Assistant</h1>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                🤖 Add more React projects for better placements.
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-[35px]">
                🤖 Improve DSA skills for product companies.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
