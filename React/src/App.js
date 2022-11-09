import { Header } from './components/header';
import { Home } from './components/home';
import { Automatic } from './components/automatic';
import { Manual } from './components/manual';
import { Footer } from './components/footer';
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
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/manual' element={<Manual/>}></Route>
          <Route exact path='/automatic' element={<Automatic/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
