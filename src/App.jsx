
import React, { useState, useEffect } from 'react'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

function App() {
  const [timer, setTimer] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().getSeconds())
    }, 1000) // updates every 1 second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <div className="w-40 bg-red-500 text-center m-auto mt-40 text-white p-10">This will be a laravel App in {timer}</div>
      </main>
      <Footer />
    </div>
  )
}

export default App
