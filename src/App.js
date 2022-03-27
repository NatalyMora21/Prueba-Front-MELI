import logo from './logo.svg';
import './App.css';

import Search from './components/Search';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllItems } from './services/item';
import {initItems} from './stateHandler/actions/itemAction'
import { Items } from './components/Items';


function App() {

  const dispatch = useDispatch ();

  useEffect ( async ()=> {
    const data = await getAllItems();
    dispatch(initItems(data));
  },[])


  return (
    <div className="App">

      <Search></Search>
      <Items></Items>


    </div>
  );
}

export default App;
