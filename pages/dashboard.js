import useSWR from "swr"
import { useState } from "react"
import CountryCard from "../components/CountryCard"
import Link from "next/link"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function Home() {
  const { data } = useSWR("/api/status-by-country", fetcher, { refreshInterval: 5000 })
  const countries = data?.countries || []
  const [query, setQuery] = useState("")

  const filtered = countries.filter((c) =>
    c.country.toLowerCase().includes(query.toLowerCase())
  )

  const homepageCountries = filtered.slice(0, 9)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ocean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-blue-400 to-indigo-600 animate-oceanFlow" />

      {/* Moving Waves Layer */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-[url('https://i.imgur.com/E0QvCsu.png')] bg-repeat-x bg-bottom opacity-40 animate-waves" />

      {/* Floating Clouds Layer */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('https://i.imgur.com/e0QvCsu.png')] bg-repeat-x opacity-20 animate-clouds" />

      {/* Navbar */}
      <header className="relative z-10 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Flood Monitoring System</h1>
        <div className="flex space-x-4">
          <Link href="/">
            <button className="px-5 py-2 bg-gray-600 text-white font-semibold rounded-full shadow-md hover:bg-gray-700 transition">
              Logout
            </button>
          </Link>
        </div>
      </header>

      {/* Search Section */}
      <div className="relative z-10 max-w-xl mx-auto mt-10">
        <input
          type="text"
          placeholder="Search any country..."
          className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Country Boxes */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {homepageCountries.map((country, i) => (
          <CountryCard key={i} country={country} />
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-gray-100 font-medium">
        Data refreshes automatically every 5 seconds.
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes oceanFlow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }

        @keyframes waves {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1000px;
          }
        }

        @keyframes clouds {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 800px;
          }
        }

        .animate-oceanFlow {
          animation: oceanFlow 20s ease-in-out infinite alternate;
        }

        .animate-waves {
          animation: waves 60s linear infinite;
        }

        .animate-clouds {
          animation: clouds 80s linear infinite;
        }
      `}</style>
    </div>
  )
}
