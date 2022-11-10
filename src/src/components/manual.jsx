import React from 'react'
import { Simulate } from './simulate'
import { useState } from 'react'


export const Manual = () => {
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


  const submit = (e) => {
    if (planes.length >= capacity)
      alert("Max capacity of the holding area is 4\nRedirect to another Airport")
    else {
      let nP = {
        name: name,
        fuel: fuel,
        type: type,
        emergency: emergency,
        priority: undefined,
      };

      addPlanes([...planes, nP])
    }
  }
  return (
    <div>
      <Simulate planes={planes} />
      <div id="inp-form">
        <label htmlFor="">Name : <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" required /></label><br />
        <label htmlFor="">Fuel : &nbsp;&nbsp;<input value={fuel} onChange={(e) => setFuel(e.target.value)} id="fuel" type="number" required /></label><br />
        <label htmlFor="">Type :&nbsp;
          <select onChange={(e) => setType(e.target.value)} id="ptype" name="Ptype" required>
            <option value="select">Select</option>
            <option value="plane1">plane1</option>
            <option value="plane2">plane2</option>
            <option value="plane3">plane3</option>
          </select>
        </label>
        <br />
        <label onChange={(e) => setEmergency(e.target.value)} htmlFor="">Emergency :<br />
          <input name="emergency" type="radio" value="None" />None&nbsp;&nbsp;
          <input name="emergency" type="radio" value="Medical" />Medical&nbsp;&nbsp;
          <input name="emergency" type="radio" value="Technical" />Technical
        </label><br />
        <button id="Generate" onClick={submit}>Generate</button>
        <button onClick={run} id="Simulate">Simulate</button>
      </div>
    </div>
  )
}
