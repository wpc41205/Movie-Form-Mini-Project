import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Test App - Tailwind CSS
        </h1>
        <p className="text-center mb-4 text-gray-600">
          If you see blue background and white box, Tailwind is working!
        </p>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}

export default App
