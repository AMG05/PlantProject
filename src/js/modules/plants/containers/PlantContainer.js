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
    

    useEffect(() => {
        const savedPlants = localStorage.getItem('plantData');

        if (savedPlants){
            setPlantData(JSON.parse(savedPlants));
        } else {
            fetch('https://perenual.com/api/species-list?page=1&key=sk-6iV8645263d901b63737')
                .then(res => res.json())
                .then(data => {
                    setPlantData(data.data);
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


    const handleFavourite = plant => {
        setFavourites(prevFavouritePlants => [...prevFavouritePlants, plant]);
    
    };

    return (
                <div>
                    <NavBar />
                <AllPlants plantData={plantData} onFavourite={handleFavourite} />
                <h2>Favourites</h2>
                <ul>{favourites.map(plant => (
                    <li key={plant.id}>{plant.common_name}</li>))}</ul>
                <Footer />
                </div>
    );
};
export default PlantContainer;