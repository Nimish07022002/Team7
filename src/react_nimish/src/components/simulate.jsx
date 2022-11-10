import React from 'react'


export const Simulate = () => {
  return (
    <div id="simulate">
      <div id="left">
        <h3>Holding Area</h3>
      </div>
      <div id="center">
        <h3>Landing Area</h3>
      </div>
      <div id="right">
        <h3>Airport</h3>
      </div>

      <table id="plane-dt">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Fuel left</th>
            <th>Status</th>
          </tr>
          <tr>
            <td className="landed">Plane-1</td>
            <td>45%</td>
            <td>landed</td>
          </tr>
          <tr>
            <td className="crashed">Plane-2</td>
            <td>15%</td>
            <td>crashed</td>
          </tr>
          <tr>
            <td className="landed">Plane-3</td>
            <td>55%</td>
            <td>landed</td>
          </tr>
          <tr>
            <td className="landed">Plane-4</td>
            <td>43.5%</td>
            <td>landed</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
