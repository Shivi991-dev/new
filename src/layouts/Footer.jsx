import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-black py-5 text-white text-center'>@{year} All Rights Reserved !</footer>
  )
}

export default Footer