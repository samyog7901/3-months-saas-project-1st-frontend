import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

const Singlepage = ({ data }) => {
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A novel set in the 1920s that critiques the American Dream through the story of Jay Gatsby and his unrelenting love for Daisy Buchanan. The story explores themes of wealth, love, and the illusion of the American Dream through a tragic lens.",
    coverImage:
      "https://images.unsplash.com/photo-1544935043-efb3b1d16bee?auto=format&fit=crop&w=400&q=80",
    genre: "Classic Fiction",
    year: 1925,
    rating: 4.3
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
            <div className="flex justify-center">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-60 h-90 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold text-gray-800">{book.title}</h1>
                <p className="text-lg text-gray-600 italic">by {book.author}</p>
                <p className="text-gray-700 leading-relaxed">{book.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    Genre: {book.genre}
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    Year: {book.year}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
                    ⭐ {book.rating}/5
                  </span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button text="Edit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold" />
                <Button text="Delete" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Singlepage
