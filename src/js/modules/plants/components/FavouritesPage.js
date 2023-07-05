import { h, Fragment } from 'preact';
import FavouritesContainer from '../containers/FavouritesContainer';

const FavouritesPage = ({ favourites }) => {

    console.log(favourites);

    return (
        <Fragment>
        <div className="list-plants">
            <h2>Favourites</h2>
            <ul>
            {favourites.map((plant) => (
            <li key={plant.id}>
              <img src={plant.default_image.regular_url} alt="plant" width={200} height={200} />
              <h3>{plant.common_name}</h3>
              <p>
                <strong>How to care for me:</strong> {plant.watering} Watering
              </p>
              <p>
                <strong>Where I thrive:</strong> {plant.sunlight}
              </p>
              
            </li>
                ))}
            </ul>
        </div>
        </Fragment>
    );
};

export default FavouritesPage;