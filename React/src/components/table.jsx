import React from 'react'

export const Table = () => {
  return (
    <div>
          <table id="plane-dt">
            <tr>
                <th>Name</th>
                <th>Fuel left</th>
                <th>Status</th>
            </tr>
            <tr>
                <td class="landed">Plane-1</td>
                <td>45%</td>
                <td>landed</td>
            </tr>
            <tr>
                <td class="crashed">Plane-2</td>
                <td>15%</td>
                <td>crashed</td>
            </tr>
            <tr>
                <td class="landed">Plane-3</td>
                <td>55%</td>
                <td>landed</td>
            </tr>
            <tr>
                <td class="landed">Plane-4</td>
                <td>43.5%</td>
                <td>landed</td>
            </tr>
        </table>
    </div>
  )
}
