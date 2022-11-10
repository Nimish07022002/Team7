import React from 'react'
import { Simulate } from './simulate'
import { useState } from 'react'


export const Automatic = () => {
  let capacity = 4

  const [name, setName] = useState("")
  const [fuel, setFuel] = useState(0)
  const [type, setType] = useState("")
  const [emergency, setEmergency] = useState(false)
  const [planes, addPlanes] = useState(() => [])

  function run() {
    const element = document.getElementsByClassName("plane");
    const interval = setInterval(frame, 0.5);
    let i = 0
    let width = 0;
    function frame() {
      console.log(`${i} plane is changing`)
      if (i < planes.length) {
        if (width > 685) {
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

  const CreatePlane = (param) => {

    let nP = {
      name: param[0],
      fuel: param[1],
      type: param[2],
      emergency: param[3],
      priority: undefined,
    }
    planes.push(nP)

  };
// CreatePlane(['a123',123,'plane1','medical'])
// CreatePlane(['a123',123,'plane1','medical'])
// CreatePlane(['a123',123,'plane1','medical'])
// CreatePlane(['a123',123,'plane1','medical'])

console.log(planes)

  return (
    <div>

      <Simulate planes={planes} />

    </div>
  )
}
