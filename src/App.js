import React, { useState, useEffect } from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Food from './Components/Food';
import NewFood from './Components/NewFood';
import Home from './Components/Home';
import NewReview from './Components/NewReview';
import Grocery from './Components/Grocery';
import Login from './Components/Login.js';
import SignUp from './Components/SignUp.js';
// import SignIn from './Components/SignIn';//
import Cart from './Components/Cart.js';
import Footer from './Components/footer.js';


//Home, New, FoodPage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn')=== 'true');

  const logout = () => {
    //Clear the user's session
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const login = () => {
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
            <Route path ='/food' element={<Food />}/>
            <Route path ='/food/new' element={<NewFood/>}/>
            <Route path ='/food/review' element={<NewReview/>} />
            <Route path = '/Grocery' element={<Grocery/>}/>
            <Route
            path='/login' element={!isLoggedIn ? <Login login={login} /> : <Navigate to="/" />}/>
            <Route path='/signup'
            element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />}/>  
          {/*<Route path = '/SignIn' element={<SignIn/>}/>*/}
            <Route path ='/Cart'  element={<Cart/>}/>
            {/* <Route path = '/Login' element={<Login/>}/> */}
            {/* <Route path = '/food/random' element={<RandomFood/>}/> */}
        </Routes>
        <Footer />
         </Router>
    </div>
  );
}

export default App;
