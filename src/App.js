import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Food from './Components/Food';
import NewFood from './Components/NewFood';
import Home from './Components/Home';
import NewReview from './Components/NewReview';
import Grocery from './Components/Grocery';
<<<<<<< HEAD
import Login from './Components/Login';
=======
import SignIn from './Components/SignIn';
import Cart from './Components/Cart.js';

>>>>>>> 39561ad1b56476e50b7ee32a57c11f59eeaba3e5
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
<<<<<<< HEAD
            <Route path = '/Login' element={<Login/>}/>
=======

            <Route path = '/SignIn' element={<SignIn/>}/>
            <Route path ='/Cart'  element={<Cart/>}/>


            <Route path = '/Login' element={<Login/>}/>

            {/* <Route path = '/SignIn' element={<SignIn/>}/> */}

>>>>>>> 39561ad1b56476e50b7ee32a57c11f59eeaba3e5
          </Routes>
         </Router>
    </div>
  );
}

export default App;
