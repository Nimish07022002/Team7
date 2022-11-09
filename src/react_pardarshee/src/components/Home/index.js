import {useState} from 'react';

import {FaPlane} from 'react-icons/fa';

export default function Home() {
  const [flightNumber, setFlightNumber] = useState('');
  const [fuelAmount, setFuelAmount] = useState(0);
  const [planeType, setPlaneType] = useState('jet');
  const [distance, setDistance] = useState(0);
  const [holdingArea, setHoldingArea] = useState([]);
  const [landingArea, setLandingArea] = useState([]);

  return (
    <section className="flex justify-evenly w-full">
      <div className="h-full w-1/3 bg-blue-300 p-y-1 border-2 border-black">
        <div className="border-b-2 w-full border-black h-10 text-lg text-center">
          Holding Area
        </div>

        <ul className="overflow-y-auto max-h-[calc(100%-2.5rem)] flex flex-col items-center">
          {holdingArea.map((plane) => (
            <li key={plane.flightNumber}>
              <FaPlane fontSize={'4rem'} /> <br />
              <p>{flightNumber}</p>
              <p>{fuelAmount}</p>
              <p>{planeType}</p>
              <p>{distance}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-1/3 bg-red-300 p-y-1 border-2 border-black">
        <div className="border-b-2 w-full border-black h-10 text-lg text-center">
          Landing Area
        </div>

        <ul className="overflow-y-auto max-h-[calc(100%-2.5rem)] flex flex-col items-center">
          {landingArea.map((plane) => (
            <li key={plane.flightNumber}>
              <FaPlane fontSize={'4rem'} /> <br />
              <p>{flightNumber}</p>
              <p>{fuelAmount}</p>
              <p>{planeType}</p>
              <p>{distance}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-1/3 bg-green-300 p-y-1 border-2 border-black">
        <div className="border-b-2 w-full border-black h-10 text-lg text-center">
          User Input Menu
        </div>

        <form
          action=""
          className="p-1 flex flex-col h-[calc(100%-10rem)] justify-between text-xl"
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          <div>
            <label htmlFor="flight-number">Flight Number</label> <br />
            <input
              type="text"
              id="flight-number"
              value={flightNumber}
              onChange={(evt) => setFlightNumber(evt.target.value)}
            />{' '}
            <br /> <br />
            <label htmlFor="fuel-amt">Fuel Amount</label> <br />
            <input
              type="number"
              id="fuel-amt"
              value={fuelAmount}
              onChange={(evt) => {
                if (evt.target.value >= 0) setFuelAmount(evt.target.value);
              }}
            />{' '}
            <br />
            <br />
            <label htmlFor="plane-type">Flight Type</label> <br />
            <select
              name="plane-type"
              id="plane-type"
              value={planeType}
              onChange={(evt) => setPlaneType(evt.target.value)}
            >
              <option value="jet">Jet</option>
              <option value="propeller">Propeller</option>
              <option value="light-plane">Light Plane</option>
            </select>
            <br /> <br />
            <label htmlFor="distance">Distance</label> <br />
            <input
              type="number"
              value={distance}
              onChange={(evt) => {
                if (evt.target.value >= 0) setDistance(evt.target.value);
              }}
            />{' '}
            <br />
          </div>
          <div className="flex justify-evenly">
            <button
              onClick={() => {
                console.log(holdingArea.length);
                if (
                  holdingArea.length < 10 &&
                  !holdingArea.find((val) => val.flightNumber === flightNumber)
                ) {
                  const newPlane = {
                    flightNumber: flightNumber.trim(),
                    planeType: planeType.trim(),
                    fuelAmount: fuelAmount,
                    distance: distance,
                  };
                  setHoldingArea([...holdingArea, newPlane]);
                  setTimeout(() => {
                    setHoldingArea(
                      holdingArea.filter(
                        (plane) => plane.flightNumber !== newPlane.flightNumber,
                      ),
                    );
                    setLandingArea([...landingArea, newPlane]);
                    setTimeout(() => {
                      setLandingArea(
                        landingArea.filter(
                          (plane) =>
                            plane.flightNumber !== newPlane.flightNumber,
                        ),
                      );
                    }, 4000);
                  }, (fuelAmount - 4) * 1000);
                }
              }}
            >
              Generate
            </button>
            <button type="submit">Run Simulation</button>
          </div>
        </form>
      </div>
    </section>
  );
}
