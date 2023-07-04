import {h, render } from 'preact';
import { Router, Route, Link } from 'preact-router';
import PlantContainer from './containers/PlantContainer';
import Favourites from './components/FavouritesPage';
import FavouritesContainer from './containers/FavouritesContainer';
import IndoorPlants from './components/IndoorPlants';

const App = () => (
    <div>
        <Router>
            <Route path="/" component={PlantContainer} />
            <Route path="/indoorplants" component={IndoorPlants} />
            <Route path="/favourites" component={FavouritesContainer} />
            <Route path="/community" component={IndoorPlants} />
        </Router>
    </div>
);

export default App;