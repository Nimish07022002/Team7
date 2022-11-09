import {useState} from 'react';

export default function Home() {
  const [flightNumber, setFlightNumber] = useState('');
  const [fuelAmount, setFuelAmount] = useState(0);
  const [planeType, setPlaneType] = useState('jet');
  const [distance, setDistance] = useState(0);
  return (
    <section className="flex justify-evenly w-full">
      <div className="h-full w-1/3 bg-blue-900 p-y-1 border-2 border-black">
        <div className="border-b-2 w-full border-black h-10 text-lg text-center">
          Holding Area
        </div>
      </div>
      <div className="h-full w-1/3 bg-red-900 p-y-1 border-2 border-black">
        <div className="border-b-2 w-full border-black h-10 text-lg text-center">
          Landing Area
        </div>
      </div>
      <div className="h-full w-1/3 bg-green-900 p-y-1 border-2 border-black">
        <div className="border-b-2 w-full border-black h-10 text-lg text-center">
          User Input Menu
        </div>

        <form
          action=""
          className="p-1 flex flex-col h-[calc(100%-10rem)] justify-between text-xl"
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
            <button>Generate</button>
            <button type="submit">Run Simulation</button>
          </div>
        </form>
      </div>
    </section>
  );
}
