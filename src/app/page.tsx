export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hello World!
            </h1>
            <p className="text-xl text-gray-600 max-w-md mx-auto">
              Welcome to your beautiful Next.js application. This is a simple Hello World page with modern styling.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-md mx-auto border border-gray-200/50">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl font-bold">👋</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Getting Started
              </h2>
              <p className="text-gray-600">
                Your Next.js application is up and running! Start building amazing things.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Next.js 15
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              Tailwind CSS
            </div>
            <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
              TypeScript
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}