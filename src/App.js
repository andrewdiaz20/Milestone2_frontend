import React, { useState, useEffect } from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Food from './Components/Food';
import NewFood from './Components/NewFood';
import Home from './Components/Home';
import NewReview from './Components/NewReview';
import Grocery from './Components/Grocery';
// import SignIn from './Components/SignIn';//
import Cart from './Components/Cart.js';
import Login from './Components/Login.js';
import RandomFood from './Components/RandomFood.js';
import footer from './Components/footer.js';
import SignUp from './Components/SignUp.js';



//Home, New, FoodPage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn')=== 'true');

  const logout = () => {
    //Clear the user's session
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const Login = () => {
    //Set the user's session
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  return (
    <div>
         <Router>
         <Navbar isLoggedIn={isLoggedIn} logout={logout} key={isLoggedIn}/>
          <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path ={'foods/:id' }element={<Food />}/>
            <Route path ='/food/new' element={<NewFood/>}/>
            <Route path ='/food/review' element={<NewReview/>} />
            <Route path = '/Grocery' element={<Grocery/>}/>

            {/*<Route path = '/SignIn' element={<SignIn/>}/>*/}
            <Route path ='/Cart'  element={<Cart/>}/>

            <Route path = '/Login' element={<SignUp/>}/>
            <Route path = '/food/random' element={<RandomFood/>}/>
        </Routes>
         </Router>
    </div>
  );
}

export default App;
