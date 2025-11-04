import React from 'react'
import { useState, useEffect } from 'react';
function Dashboard() {
  const [timer, setTimer] = useState(new Date().getSeconds());
  useEffect(()=> {
    const interval = setInterval(() => {
      setTimer(new Date().getSeconds());
    }, 1000); // updates every 1 second

    return () => clearInterval(interval);

  },[]);

  return (
     <div className="w-40 bg-red-500 text-center m-auto mt-40 text-white p-10">
            This will be a laravel App in {timer}
    </div>
  )
}

export default Dashboard