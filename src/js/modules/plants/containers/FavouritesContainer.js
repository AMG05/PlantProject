import { h } from 'preact';
import { route } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';


const FavList = () => {

    const [favourites, setFavourites] = useState([]);

    const getFavouritesFromLocalStorage = () => {
        const savedFavourites = localStorage.getItem('favourites');
        if (savedFavourites) {
            return JSON.parse(savedFavourites);
        }
        return [];
        
    };
    
    useEffect(() => {
        const favouritesFromLocalStorage = getFavouritesFromLocalStorage();
        setFavourites(favouritesFromLocalStorage);
    }, []);

    const removeFromFavourites = id => {
        const updatedFavourites = favourites.filter(plant => plant.id !== id);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      };

    return (
    <div className="list-plants">
        <ul>{favourites.map(plant => (
            <li key={plant.id}><h2>{plant.common_name}</h2><h3>How to care for me:</h3> <p>{plant.watering} Watering</p><h3>Where I thrive:</h3> <p>{plant.sunlight}</p>
            <button className="btn" onClick={() => removeFromFavourites(plant.id)}>Remove</button></li>))}
            </ul>
    </div>
    );
};


export default FavList;
