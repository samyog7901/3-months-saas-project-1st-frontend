// components/Button.jsx
import React from 'react'

const Button = ({ text, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${className}`}
    >
      {text}
    </button>
  )
}

export default Button