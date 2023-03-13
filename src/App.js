import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './Metha/home'
import PaymentForm from './Metha/payments';

function App() {
  return (
     <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/pay' element={ <PaymentForm/>}/>
     </Routes>
  );
}

export default App;
