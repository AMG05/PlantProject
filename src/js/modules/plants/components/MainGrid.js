import { h } from 'preact';
import Aside from './Aside';
import PlantList from './AllPlants';

const MainGrid = () => {

    <div className="grid-container">
      <Aside />
      <PlantList />
    </div>
};


export default MainGrid;