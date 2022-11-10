import React from 'react'
import { Simulate } from './simulate'

export const Manual = () => {
  return (
    <div>
      <Simulate/>
      <div id="inp-form">
            <label for="">Name : <input autofill id="name" type="text" required/></label><br/>
            <label for="">Fuel : &nbsp;&nbsp;<input id="fuel" type="number" required/></label><br/>
            <label for="">Type :&nbsp;
                <select id="ptype" name="Ptype" required>
                    <option value="select" selected disabled hidden>Select</option>
                    <option value="plane1">plane1</option>
                    <option value="plane2">plane2</option>
                    <option value="plane3">plane3</option>
                </select>
            </label>
            <br/>
            <label for="">Emergency :
                <input name="emergency" type="radio" value="Medical"/>Medical&nbsp;&nbsp;
                <input name="emergency" type="radio" value="Technical"/>Technical
            </label><br/>
            <button id="Generate" onclick="submit()">Generate</button><button id="Simulate"
                onclick="submit()">Simulate</button>
        </div>
    </div>
  )
}
