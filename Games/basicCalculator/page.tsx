'use client'

import { useState } from 'react'

 function Calculator() {
  const [value, setValue] = useState('')

  const handleClick = (val) => {
    setValue((prev) => prev + val)
  }

  const handleClear = () => {
    setValue('')
  }

  const handleDelete = () => {
    setValue((prev) => prev.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      setValue(eval(value).toString())
    } catch {
      setValue('Error')
    }
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-2xl bg-white p-5 shadow-xl">
        <input
          type="text"
          value={value}
          readOnly
          className="mb-4 w-full rounded-lg border p-3 text-right text-2xl"
        />

        <div className="mb-3 flex gap-2">
          <button
            onClick={handleClear}
            className="flex-1 rounded-lg bg-red-500 p-3 text-white"
          >
            C
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 rounded-lg bg-yellow-500 p-3 text-white"
          >
            DEL
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === '=' ? handleCalculate() : handleClick(btn)
              }
              className={`rounded-lg p-4 text-lg font-semibold text-white 
                ${['+', '-', '*', '/'].includes(btn) ? 'bg-blue-500' : btn === '=' ? 'bg-green-500' : 'bg-gray-700'}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Calculator;
