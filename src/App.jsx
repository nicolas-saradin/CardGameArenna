import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './Game';
import Header from './components/Header/Header';
import Accueil from './components/Accueil/Accueil';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import LogIn from './components/LogIn/LogIn';
import register from './components/Register/register';
import Rule from './components/RulesPage/Rule';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Rules" component={Rule} />
        <Route path="/Register" component={register} />
        <Route path="/Game" component={Game} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
