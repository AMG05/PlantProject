import { h } from 'preact';
import FavouritesContainer from '../containers/FavouritesContainer';

const FavouritesPage = ({ favourites }) => {

    console.log(favourites);

    return (
        <div>
            <h2>Favourites</h2>
            <ul>
                {favourites.map(plant => (
                    <li key={plant.id}>{plant.common_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavouritesPage;