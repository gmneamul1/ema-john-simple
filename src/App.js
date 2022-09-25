
import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Header/Shop/Shop';

function App() {
  // const [s, sets] = useState()
  return (
    <div className="app">

     <Header></Header>
     <Shop></Shop>
    </div>
  );
}

export default App;
