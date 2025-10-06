import { useState } from "react"
import { useRouter } from "next/router"
import BlueButton from "../components/BlueButton";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === "professor@floodsystem.com" && password === "1234") {
      router.push("/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated weather gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-blue-300 to-indigo-400 animate-gradientMove" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4),transparent_70%)] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://i.imgur.com/e0QvCsu.png')] bg-repeat-x bg-top opacity-30 animate-cloudMove" />

      {/* Login card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center color-blue-800">
          Flood Detection System Login
        </h1>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <BlueButton />
    </div>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          My Professor you can use this credentials to sign in Demo login: <span className="font-semibold">professor@floodsystem.com / 1234</span>
        </p>
      </div>

      {/* Background animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes cloudMove {
          0% { background-position-x: 0; }
          100% { background-position-x: 1000px; }
        }
        .animate-gradientMove {
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }
        .animate-cloudMove {
          animation: cloudMove 60s linear infinite;
        }
      `}</style>
    </div>
  )
}
