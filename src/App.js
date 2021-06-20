import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form } from './Components/Formik/Formik';
import { Navbar } from './Components/Navbar/navbar';
export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/form">
          <Form />
        </Route>

        {/* <Route path="/formik">
                
            </Route>
       

            <Route path="/favorites">
              <Favorites />
            </Route>

            <Route path="/cars/:id">
              <CarDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> */}
      </Switch>
    </Router>
  );
};
