import { h, Link } from 'preact';


const FavouriteButton = ({plant, onPlantSelected}) => {

const handleClick = () => {
    onPlantSelected(plant)
}

    return (
    
    <button className="btn" onClick={handleClick}>Save to Favourites</button>
    
);
};

export default FavouriteButton;