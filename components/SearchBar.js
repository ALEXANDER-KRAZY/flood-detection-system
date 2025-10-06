export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={e => { e.preventDefault(); onSubmit(); }}
      className="flex items-center bg-white/90 rounded-full shadow-md overflow-hidden w-72"
    >
      <input
        type="text"
        placeholder="Search country..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="flex-grow px-4 py-2 text-gray-700 outline-none bg-transparent"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
      >
        Search
      </button>
    </form>
  )
}
