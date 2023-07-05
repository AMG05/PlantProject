import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router, Route, Link } from 'preact-router';
import AllPlants from '../components/AllPlants';
import NavBar from '../components/NavBar';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Main from '../components/MainGrid';
import MainGrid from '../components/MainGrid';
import Favourites from '../components/FavouritesPage';
import FavouritesPage from '../components/FavouritesPage';
import FavouritesContainer from './FavouritesContainer';


const PlantContainer = () =>  {

    const [plantData, setPlantData] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [sunlightFilter, setSunlightFilter] = useState('');
    const [wateringFilter, setWateringFilter] = useState('');
   

    useEffect(() => {
        const savedPlants = localStorage.getItem('plantData');

        if (savedPlants){
            const parsedData = (JSON.parse(savedPlants));
            setPlantData(parsedData);
            setFilteredData(parsedData);
        } else {
            fetch('https://perenual.com/api/species-list?page=1&key=sk-6iV8645263d901b63737')
                .then(res => res.json())
                .then(data => {
                    const plantData = data.data;
                    setPlantData(plantData);
                    setFilteredData(plantData);
                    localStorage.setItem('plantData', JSON.stringify(data.data));
                })
                .catch(error => {
                    console.error('Error fetching plant data', error);
                });
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        const filteredPlants = plantData.filter(plant => {
            if (sunlightFilter.includes('full sun') && !plant.sunlight.includes('full sun')) {
                return false;
            }

            if (wateringFilter.includes('frequent watering') && !plant.watering.includes('Frequent')) {
                return false;
              }
        
            return true;
        });
        
        setFilteredData(filteredPlants);
    }, [plantData, sunlightFilter, wateringFilter]);


    const handleFavourite = plant => {
        setFavourites(prevFavouritePlants => [...prevFavouritePlants, plant]);
    
    };


    return (
                <div>
                    <NavBar />
                    <label>
        Sunlight:
        <select value={sunlightFilter} onChange={e => setSunlightFilter(e.target.value)}>
          <option value="">All</option>
          <option value="full sun">Full Sun</option>
          <option value="filtered shade">Filtered Shade</option>
        </select>
      </label>

      <label>
        Watering:
        <select value={wateringFilter} onChange={e => setWateringFilter(e.target.value)}>
          <option value="">All</option>
          <option value="frequent watering">Frequent Watering</option>
          <option value="average watering">Average Watering</option>
        </select>
      </label>
                <AllPlants filteredData={filteredData} onFavourite={handleFavourite} />
                <h2>Favourites</h2>
                <ul>{favourites.map(plant => (
                    <li key={plant.id}>{plant.common_name}</li>))}</ul>
                     <h2>Favourites</h2>
                <ul>{plantData.filter(plant => plant.sunlight.includes('full sun')).map(filteredPlant => (
                    <li key={filteredPlant.id}>{filteredPlant.common_name}</li>))}</ul>
                <Footer />
                </div>
    );
};
export default PlantContainer;