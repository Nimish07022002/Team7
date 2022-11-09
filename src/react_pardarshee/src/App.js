import Navbar from './components/Navbar';
import {useState} from 'react';
import Home from './components/Home';

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);

  return (
    <div className="App w-screen h-screen">
      <Navbar {...{setIsHome, setIsAbout, setIsContact}} />
      <main className="flex h-[calc(100%-2rem)] w-full justify-evenly sticky">
        {isHome && <Home />}
        {/* {isAbout && <About />}
        {isContact && <Contact />} */}
      </main>
    </div>
  );
}

export default App;
