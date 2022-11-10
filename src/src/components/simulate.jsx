import React from 'react'
// import { useEffect } from 'react'


export const Simulate = ({ planes }) => {

  // useEffect(() => {
  //   console.log(planes)
  // }, [planes])

  let ps = document.querySelectorAll('.plane p')
  planes.forEach((e,i)=>{
    ps[i].innerText=`Name : ${planes[i]['name']} , fuel : ${planes[i]['fuel']} , Type : ${planes[i++]['type']}`
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
        <hr style={{ marginTop: '40%', color: 'black', fontWeight: '800' }} />
      </div>
      <div id="right">
        <h3>Airport</h3>
      </div>
      <br />





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
