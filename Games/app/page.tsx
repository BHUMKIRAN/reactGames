'use client'

import Notification from '@/AutoCloseNotification/page'
import DiceRoller from '@/Dice/dice'
import Light from '@/roomLightOnOff/page'
import Todo from '@/toDoList/page'
import React, { Component } from 'react'
import TicTacToe from '@/tictactoe/page'
import Calculator from '@/basicCalculator/page'
import QuizGame from '@/quiz/page'

const page = () => {
  return (
    <div className=''>

      {/* <DiceRoller/> */}
      {/* <Light/> */}
      {/* <Notification/> */}
      <Todo/>
      {/* <TicTacToe/> */}
      {/* <Calculator/> */}
      {/* <QuizGame/> */}
    </div>
  )
}

export default page