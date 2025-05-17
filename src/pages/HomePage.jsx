import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const HomePage = () => {
  return (
   <>
<Navbar/>
<main className="pt-20">
    {/* Your page content goes here */}
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Book Management System.</h1>
      <p>Here you can read books you like.</p>
    </div>
  </main>
 <div className='flex flex-wrap justify-center'>
  <Card data={Card}/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
 </div>


   </>
   
  )
}

export default HomePage
