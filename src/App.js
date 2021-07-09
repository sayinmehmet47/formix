import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form } from './Components/Formik/Formik';
import { Navbar } from './Components/Navbar/navbar';
import { SignUp } from './Components/SignUp/SignUp';
import { Sorting } from './Components/Sorting/Sorting';
import { Exporting } from './Components/Exporting/Exporting';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sorting">
          <Sorting />
        </Route>
        <Route path="/exporting">
          <Exporting />
        </Route>
      </Switch>
    </Router>
  );
};
