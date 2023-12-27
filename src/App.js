import React, { useEffect } from 'react';

import './App.css';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //This useEffect function will make sure the current user remains logged in unless they opt to logout
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in user
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    //Remove the previous user and remain with the current logged in user
    return unsubscribe;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/profile'
              element={<ProfileScreen />}
            />
            < Route exact path='/'
            element={<HomeScreen />}
              
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
