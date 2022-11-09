import React from 'react'



const Alarm = () => {
  return (
    <div>
        <div class="wrapper">
      <img src="./files/clock.svg" alt="clock" />
      <h1>00:00:00 PM</h1>
      <div class="content">
        <div class="column">
          <select>
            <option value="Hour" selected disabled hidden>Hour</option>
          </select>
        </div>
        <div class="column">
          <select>
            <option value="Minute" selected disabled hidden>Minute</option>
          </select>
        </div>
        <div class="column">
          <select>
            <option value="AM/PM" selected disabled hidden>AM/PM</option>
          </select>
        </div>
      </div>
      <button>Set Alarm</button>
    </div>
    </div>
  )
}

export default Alarm
