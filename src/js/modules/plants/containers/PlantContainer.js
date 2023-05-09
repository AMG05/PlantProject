import { useState, useEffect } from 'preact/hooks';
import PlantList from './PlantList';
import { h } from 'preact';

const PlantContainer = () =>  {
  
    const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        fetch(
            'https://perenual.com/api/species-list?page=1&key=sk-6iV8645263d901b63737'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const plantData = data.data.map((item) => {
                    return {
                        id: item.id,
                        commonName: item.common_name,
                        image: item.image,
                        sunlight: item.sunlight,
                        watering: item.watering,
                    };
                });
                setPlantData(plantData);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
                <div>
                <h1>Plants:</h1>
                <PlantList plantData={plantData} />
                </div>
    );
};

export default PlantContainer;
