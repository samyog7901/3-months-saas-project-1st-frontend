import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
 <Link to={'/single-book'}>
    <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil.
        </p>
        </div>
    </div>
    </div>
 </Link>

    </>
  )
}

export default Card