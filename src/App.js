import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Admin from './components/Admin';

import ErrorPage from './components/ErrorPage'



import './App.css';
import Pages from './components/pages';

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
      <Route exact path="/domestique" component={Domestique} />
      <Route exact path="/babyssiteur" component={Babyssiteur} />
      <Route exact path="/jardinier" component={Jardinier} />
      <Route exact path="/cuisinier" component={Cuisinier} />
      <Route exact path="/santinel" component={Santinel} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/piscinisteAndcoursier" component={PiscinisteAndcoursier} />
      <Route exact path="/admin" component= {Admin} />
      {/* <Route path="/admin/users" component= {Users} /> */}
      <Route exact path="/admin/:page" component= {Pages} />
       <Route path="*" component={ErrorPage} />
     
      

    </Switch>
   <Footer />
</Router>   

  );
}

export default App;
