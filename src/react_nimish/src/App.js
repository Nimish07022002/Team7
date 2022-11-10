import { Header } from './components/header';
import { Home } from './components/home';
import { Automatic } from './components/automatic';
import { Manual } from './components/manual';
import { Footer } from './components/footer';
import { Simulate } from './components/simulate';
import './css/main.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/manual' element={<Manual Child={<Simulate/>}/>}></Route>
          <Route exact path='/automatic' element={<Automatic Child={<Simulate/>}/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;