'use client'
import React, { useState } from 'react'

const AutoNotification = () => {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("")

  const notify = (msg) => {
    setMessage(msg)
    setShow(true)
    setTimeout(() => setShow(false), 3000) // auto-close
  }

  return (
    <div className="p-4">
      <button 
        onClick={() => notify("✅ Data saved successfully")}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Show Notification
      </button>

      {show && (
        <div className="mt-4 p-3 bg-gray-800 text-white rounded">
          {message}
        </div>
      )}
    </div>
  )
}

export default AutoNotification
