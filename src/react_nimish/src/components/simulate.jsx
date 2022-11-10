import React from 'react'


export const Simulate = () => {

  function run() {
    const element = document.getElementsByClassName("plane");
    const interval = setInterval(frame, 0.5);
    let i = 0
    let width = 0;
    function frame() {
        console.log(`${i} plane is changing`)
        if (i < 6) {
            if (width > 685) {
                i++
                width = 0
            }
            else {
                width += 5;
                element[i % 6].style.left = (width / 10) + '%';
            }
        }
        else {
            clearInterval(interval)
            console.log('Width function stoped')
        }
    }
}

  return (
    <div id="simulate">
      <div id="left">
        <h3>Holding Area</h3>
        <div className='plane-area'>
        <div className='plane'>
            <p>Name : a123, Type: Cargo, Emergency: YES</p>
          </div><div className='plane'>
          <p>Name : a124, Type: Passenger, Emergency: NO</p>
          </div><div className='plane'>
          <p>Name : a125, Type: Jet, Emergency: NO</p>
          </div><div className='plane'>
          <p>Name : a124, Type: Passenger, Emergency: NO</p>
          </div>
        </div>
      </div>
      <div id="center">
        <h3>Landing Area</h3>
        <hr style={{marginTop:'40%', color:'black',fontWeight:'800'}}/>
      </div>
      <div id="right">
        <h3>Airport</h3>
      </div>
    <button onClick={()=>run()}>RUN</button>
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
