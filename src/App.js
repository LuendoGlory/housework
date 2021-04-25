import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword';
import Utilisation from './components/Utilisation';
import Domestique from './components/Domestique';
import Babyssiteur from './components/Babyssiteur';
import Jardinier from './components/Jardinier';
import Cuisinier from './components/Cuisinier';
import Contact from './components/Contact';
import Santinel from './components/Santinel';
import PiscinisteAndcoursier from './components/PiscinisteAndcoursier';
import Leanding from './components/Leanding';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage'

import './App.css';

function App() {

 
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Leanding} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgetPassword" component={ForgetPassword} />
      <Route path="/utilisation" component={Utilisation} />
      <Route path="/domestique" component={Domestique} />
      <Route path="/babyssiteur" component={Babyssiteur} />
      <Route path="/jardinier" component={Jardinier} />
      <Route path="/cuisinier" component={Cuisinier} />
      <Route path="/santinel" component={Santinel} />
      <Route path="/contact" component={Contact} />
      <Route path="/piscinisteAndcoursier" component={PiscinisteAndcoursier} />
      <Route path="/admin" component= {Admin} />
       <Route component={ErrorPage} />
      </Switch>
   <Footer />
</Router>   

  );
}

export default App;
