import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./style.css"

import Nav from "./nav";


export default function App() {
  return (
    <Router>
      <Nav />
    <div className="divider"></div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/music">
        <Music />
      </Route>
      <Route path="/concerts">
        <Concerts />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Router>
  );
}

function About() {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title header-ania text-black">
          Debiutancki singiel Ani Olczyk!!!
        </h1>
        <br/>
        <br/>
        <p className="subtitle text-black">
          <img src="toksyk.jpg"
     width="500"
     height="500" />
          <br/>
          <a href="https://ffm.to/toksyk">Ania Olczyk - Toksyk</a>
          <br/>
          Dzięki za zapisanie mojego nowego singla!
          <br/>
          W dniu premiery zapraszam na Spotify i inne platformy streamingowe.
          <br/>
          Na YouTube pojawi się również teledysk!
          <br/>
          <br/>
          <a href="https://ffm.to/toksyk">Ania Olczyk - Toksyk</a>
        </p>
      </div>
    </section>
  );
}

function Home() {
  return (<About />);
}

function Music() {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title header-ania text-black">
          Muzyka
        </h1>
        <p className="subtitle text-black">
          Spotify
        </p>
        <p className="subtitle text-black">
          Apple Music
        </p>
        <p className="subtitle text-black">
          YouTube
        </p>
      </div>
    </section>
  );
}

function Concerts() {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title header-ania text-black">
          Koncerty
        </h1>
        <p className="subtitle text-black">
          16 Października - Stakkato Art - Kraków
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h1 className="title header-ania text-black">
          Kontakt
        </h1>
        <p className="subtitle text-black">
          Booking - booking@aniaolczyk.com<br />
          Reszta spraw - info@aniaolczyk.com
        </p>
      </div>
    </section>
  );
}
