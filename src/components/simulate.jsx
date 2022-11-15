import React from 'react'
// import { useEffect } from 'react'


export const Simulate = ({ planes }) => {

  // useEffect(() => {
    console.log(planes)
  // }, [planes])

  let ps = document.querySelectorAll('.plane p')
  planes.forEach((e, i) => {
    ps[i].innerText = `Name : ${planes[i]['name']} , fuel : ${planes[i]['fuel']} , Type : ${planes[i++]['type']}`
    console.log(e)
  })


  return (

    <div id="simulate">

      <div id="left">
        <h3>Holding Area</h3>
        <div className='plane-area'>
          <div className='plane'>
            <p></p>
          </div> <div className='plane'>
            <p></p>
          </div> <div className='plane'>
            <p></p>
          </div> <div className='plane'>
            <p></p>
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





      <table id="plane-dt">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Milage(L/100 km)</th>
          </tr>
          <tr>
            <td className="landed">JET</td>
            <td>3.4</td>
          </tr>
          <tr>
            <td className="landed">Cargo</td>
            <td>5</td>
          </tr>
          <tr>
            <td className="landed">Passenger</td>
            <td>4.5</td>
          </tr>
          <tr>
            <td className="landed">Raptor</td>
            <td>3.99%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
