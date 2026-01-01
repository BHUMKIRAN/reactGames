import React, { useState } from 'react'

const Light = () => {

    const[light , setLight] = useState(false)

    const roomLightStatus =() =>{
        setLight(!light)  
    }
  return (
    <div className='flex flex-col justify-center items-center m-4 space-y-4 '>
        <button className="rounded border border-gray-500 text-white"onClick={roomLightStatus}>Switch</button>
        <img className="border rounded-xl h-70 w-50 drop-shadow " src={light ? "./roomLight/glowing0.jpg" : "./roomLight/glowing1.jpg"} />
        <sub>Room light is {light ? 'ON' : 'OFF'}</sub>

    </div>
  )
}

export default Light