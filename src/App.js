import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Food from './Components/Food';
import NewFood from './Components/NewFood';
import Home from './Components/Home';
import NewReview from './Components/NewReview';
import Grocery from './Components/Grocery';
import Login from './Components/Login';
import Cart from './Components/Cart.js';
import RandomFood from './Components/RandomFood.js';



//Home, New, FoodPage

function App() {
  return (
    <div>
         <Router>
          <Navbar />
          <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path ='/food' element={<Food />}/>
            <Route path ='/food/new' element={<NewFood/>}/>
            <Route path ='/food/review' element={<NewReview/>} />
            <Route path = '/Grocery' element={<Grocery/>}/>
            <Route path = '/Login' element={<Login/>}/>
            <Route path = '/food/random' element={<RandomFood/>}/>
          </Routes>
         </Router>
    </div>
  );
}

export default App;
