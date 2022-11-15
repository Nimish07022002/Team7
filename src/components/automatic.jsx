import React from 'react'
import { Simulate } from './simulate'
import { useState } from 'react'


export const Automatic = () => {

  let planes = [
    { 'name': 'a12-21', 'fuel': 123, 'type': 'JET', 'emergency': 'Medical' },
    { 'name': 'S-21', 'fuel': 143, 'type': 'Passenger', 'emergency': 'None' },
    { 'name': 'dfd21', 'fuel': 93, 'type': 'Cargo', 'emergency': 'None' },
    { 'name': 'a12-21', 'fuel': 123, 'type': 'JET', 'emergency': 'Medical' }
  ]
  
  return (

    <div id="simulate">

      <div id="left">
        <h3>Holding Area</h3>
        <div className='plane-area'>
          <div className='plane'>
            <p>Name: a12-21, Fuel: 123, Type: JET, Emergency: Technical</p>
          </div> <div className='plane'>
            <p>Name: S-21, Fuel: 143, Type: Passenger, Emergency: Medical</p>
          </div> <div className='plane'>
            <p>Name: dfd21, Fuel: 93, Type: Cargo, Emergency: Fuel</p>
          </div> <div className='plane'>
            <p>Name: a12-21, Fuel: 123, Type: JET, Emergency: None</p>
          </div>
        </div>
      </div>
      <div id="center">
        <h3>Landing Area</h3>
        {/* <hr style={{ marginTop: '40%', color: 'black', fontWeight: '800' }} /> */}
      </div>
      <div id="right">
        <h3>Airport</h3>
      </div>
      <br />
      <center><button onClick={run}>Run</button></center>
    </div>
  )
  
  // let ps = document.querySelectorAll('.plane>p')
  // planes.forEach((e, i) => {
  //   ps[i].innerText = `Name : ${planes[i]['name']} , fuel : ${planes[i]['fuel']} , Type : ${planes[i++]['type']}`
  //   console.log(e)
  // })

  
  
    
  
  
    function run() {
      const element = document.getElementsByClassName("plane");
      const interval = setInterval(frame, 0.5);
      let i = 0
      let width = 0;
      function frame() {
        console.log(`${i} plane is changing`)
        if (i < planes.length) {
          if (width > 2085) {
            i++
            width = 0
          }
          else {
            width += 5;
            element[i % 4].style.left = (width / 10) + '%';
          }
        }
        else {
          clearInterval(interval)
          console.log('Width function stoped')
        }
      }
    }
  
  
}
