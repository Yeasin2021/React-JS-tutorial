import React from 'react'
import Music from './coin.mp3';


const Sound = () => {
const audio = new Audio(Music);
const start = () => {
    audio.play()
  }
  return (
    <div>
      <button onClick={start} style={{ display:"flex",margin:"auto",marginTop:"20px" }}>Click</button>
    </div>
  )
}

export default Sound
