import {h, render } from 'preact';
import { Router, Route, Link } from 'preact-router';
import PlantContainer from './containers/PlantContainer';
import Favourites from './components/FavouritesPage';

const App = () => (
    <div>
        <Router>
            <Route path="/" component={PlantContainer} />
            <Route path="/favourites" component={Favourites} />
        </Router>
    </div>
);

export default App;