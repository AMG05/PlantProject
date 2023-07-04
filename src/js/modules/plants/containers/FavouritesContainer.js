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

    return (
    <div>
        <ul>{favourites.map(plant => (
            <li key={plant.id}>{plant.common_name}</li>))}
            </ul>
    </div>
    );
};


export default FavList;
