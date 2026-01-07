'use client'

import { useState } from 'react'

const questions = [
  {
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Text Machine Language',
      'Hyperlinks and Text Markup Language',
      'Home Tool Markup Language'
    ],
    answer: 0,
  },
  {
    question: 'Which hook is used for state in React?',
    options: ['useEffect', 'useState', 'useRef', 'useContext'],
    answer: 1,
  },
  {
    question: 'Which company developed JavaScript?',
    options: ['Microsoft', 'Sun Microsystems', 'Netscape', 'Oracle'],
    answer: 2,
  },
]

export default function QuizGame() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleOptionClick = (index) => {
    if (!showAnswer) {
      setSelected(index)
    }
  }

  const handleNext = () => {
    // First click → check answer
    if (!showAnswer) {
      if (selected === questions[current].answer) {
        setScore(score + 1)
      }
      setShowAnswer(true)
      return
    }

    // Second click → go to next question
    setSelected(null)
    setShowAnswer(false)

    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setShowAnswer(false)
    setShowResult(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-xl border bg-white p-6">
        {!showResult ? (
          <>
            <p className="mb-2 text-sm text-gray-500">
              Question {current + 1} of {questions.length}
            </p>

            <h1 className="mb-6 text-xl font-medium">
              {questions[current].question}
            </h1>

            <div className="space-y-3">
              {questions[current].options.map((option, index) => {
                const isCorrect = index === questions[current].answer
                const isSelected = index === selected

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`flex w-full items-center justify-between border p-3 text-left
                      ${isSelected && !showAnswer ? 'border-black bg-gray-100' : 'border-gray-300'}
                      ${showAnswer && isCorrect ? 'border-black' : ''}
                      ${showAnswer && isSelected && !isCorrect ? 'border-black' : ''}`}
                  >
                    <span>{option}</span>

                    {showAnswer && isCorrect && (
                      <span className="text-lg">✓</span>
                    )}

                    {showAnswer && isSelected && !isCorrect && (
                      <span className="text-lg">✗</span>
                    )}
                  </button>
                )
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={selected === null && !showAnswer}
              className="mt-6 border px-4 py-2 disabled:opacity-50"
            >
              {showAnswer ? 'Next Question' : 'Submit'}
            </button>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-medium">Result</h1>
            <p className="mb-6">
              You scored {score} out of {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="border px-4 py-2"
            >
              Restart Quiz
            </button>
          </>
        )}
      </div>
    </div>
  )
}
