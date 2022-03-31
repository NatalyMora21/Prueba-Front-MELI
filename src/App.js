import logo from './logo.svg';
import './App.css';

import Search from './components/Search';
import { ItemsSearh } from './pages/Items';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { InfoItem } from './pages/InfoItem';


function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />}>
     
          </Route>

          <Route path="/items/search/:title" element={<ItemsSearh />}>

          </Route>
          <Route path="/item/:id" element= {<InfoItem/>}>
            
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
