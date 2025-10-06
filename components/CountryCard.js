export default function CountryCard({ country }) {
  const { country: name, status, level } = country

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-5 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className={`text-lg font-medium ${
        status === "Severe Flood Risk"
          ? "text-red-600"
          : status === "Warning"
          ? "text-yellow-600"
          : "text-green-600"
      }`}>
        {status}
      </p>
      <p className="text-sm text-gray-500 mt-1">Level: {level.toFixed(2)}</p>
    </div>
  )
}
