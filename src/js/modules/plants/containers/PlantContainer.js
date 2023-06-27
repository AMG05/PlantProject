import { useState, useEffect } from 'preact/hooks';
import { Router, Route, Link } from 'preact-router';
import PlantList from '../components/PlantList';
import { h } from 'preact';

const PlantContainer = () =>  {

    const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        fetch('https://perenual.com/api/species-list?page=1&key=sk-6iV8645263d901b63737')
            .then(res => res.json())
            .then(plantData => setPlantData(plantData));
    }
    );

    return (
                <div>
                <h1>Plants:</h1>
                <PlantList plantData={plantData} />
                </div>
    );
};
export default PlantContainer;