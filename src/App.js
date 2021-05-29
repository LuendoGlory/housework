import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword';
import Utilisation from './components/Utilisation';

import Contact from './components/Contact';

import PiscinisteAndcoursier from './components/PiscinisteAndcoursier';
import Leanding from './components/Leanding';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Section from './components/SectionEmployers';
import Commandes from './components/Commandes';
import ErrorPage from './components/ErrorPage'



import './App.css';
import Pages from './components/pages';
import ServiceChoice from './components/ServicesChoise';

function App() {

 
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Leanding} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/forgetPassword" component={ForgetPassword} />
      <Route exact path="/utilisation" component={Utilisation} />
      <Route exact path="/services/:service" component={ServiceChoice} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/section" component={Section} />
      <Route exact path="/piscinisteAndcoursier" component={PiscinisteAndcoursier} />
      <Route exact path="/admin" component= {Admin} />
      {/* <Route path="/admin/users" component= {Users} /> */}
      <Route exact path="/admin/:page" component= {Pages} />
     <Route exact path="/commandes/:service/:id" component= {Commandes} />
       <Route path="*" component={ErrorPage} />
     
      

    </Switch>
   <Footer />
</Router>   

  );
}

export default App;
