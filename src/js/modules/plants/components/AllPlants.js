import { h } from 'preact';
import FavouriteButton from './FavouriteButton';


const AllPlants = ({ plantData, onFavourite }) => {

   function handleFavourite(plant) {
        // alert('U clicked me');
        onFavourite(plant);

        
    }
    const plantList = plantData.map((item) => {
        return<div className="list-plants">
            <ul>
            <img src="src\img\kelly-sikkema-m4kw7twpA6k-unsplash.jpg" alt="plant" width={200} height={200}></img>
            <li key={item.id}><h2>{item.common_name}</h2></li>
            <li key={item.id}><h3>How to care for me:</h3> <p>{item.watering} Watering</p> </li>
            <li key={item.id}><h3>Where I thrive:</h3> <p>{item.sunlight}</p> </li>
            <li>
                <FavouriteButton onPlantSelected={() => handleFavourite(item)}/></li>
            </ul>
            </div>
            
        ;
    });
 
    return <ul className="main-list-container">{plantList}</ul>;
};

export default AllPlants;