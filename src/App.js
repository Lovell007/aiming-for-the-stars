import { Route } from 'react-router';
import './App.css';
import EditPlanet from './components/EditPlanet';
import NavBar from "./components/NavBar"
import NewPlanet from "./components/NewPlanet"
import PlanetCard from './components/PlanetCard';
import PlanetList from "./components/PlanetList"
import SolarSystem from './components/SolarSystem';
import Background from './assets/Space.mp4'

function App() {
  return (
    <div id="app">
      <NavBar />
        <video id="background-video" loop autoPlay muted src={Background} type="video/mp4">
          Your browser does not support the video tag.
        </video>     
      <Route exact path="/">
          <NewPlanet />
      </Route>
      <Route exact path="/planetaryList">
        <PlanetList />
      </Route>
      <Route exact path="/planet/:id">
        <PlanetCard />
      </Route>
      <Route exact path="/solarSystem">
        <SolarSystem />
      </Route>
      <Route exact path="/planet/edit/:id">
        <EditPlanet />
      </Route>
    </div>
  );
}

export default App;
