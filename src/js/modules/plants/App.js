import {h, render } from 'preact';
import { Router, Route, Link } from 'preact-router';
import PlantContainer from './containers/PlantContainer';

const App = () => (
    <div>
        <Router>
            <Route path="/" component={PlantContainer} />
        </Router>
    </div>
);

export default App;