'use client'

import Notification from '@/AutoCloseNotification/page'
import DiceRoller from '@/Dice/dice'
import Light from '@/roomLightOnOff/page'
import React, { Component } from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-amber-500 via-green-500 to-pink-500
 h-screen'>

     {/* <DiceRoller/> */}
     {/* <Light/> */}
     <Notification/>
    
    </div>
  )
}

export default page