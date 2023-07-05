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
                    <div className="filtered-container">
                    <div className="checkbox-container">
                    <label>
                Sunlight:
                
                <input
                    type="checkbox"
                    name="sunlight"
                    value="full sun"
                    checked={sunlightFilter === 'full sun'}
                    onChange={e =>
                    setSunlightFilter(e.target.checked ? 'full sun' : '')
                    }
  />
  Full Sun
</label>
</div>
<div className="checkbox-container">
<label>
  <input
      type="checkbox"
      name="sunlight"
      value="filtered shade"
      checked={sunlightFilter === 'filtered shade'}
      onChange={e =>
      setSunlightFilter(e.target.checked ? 'filtered shade' : '')
    }
  />
  Filtered Shade
</label>
</div>
<div className="checkbox-container">
<label>
  Watering:
  <input
      type="checkbox"
      name="watering"
      value="frequent watering"
      checked={wateringFilter === 'frequent watering'}
      onChange={e =>
      setWateringFilter(e.target.checked ? 'frequent watering' : '')
    }
  />
  Frequent Watering
</label>
</div>
<div className="checkbox-container">
<label>
  <input
      type="checkbox"
      name="watering"
      value="average watering"
      checked={wateringFilter === 'average watering'}
      onChange={e =>
      setWateringFilter(e.target.checked ? 'average watering' : '')
    }
  />
  Average Watering
</label>
</div>
</div>

                <AllPlants filteredData={filteredData} onFavourite={handleFavourite} />
                
                <Footer />
                </div>
    );
};
export default PlantContainer;