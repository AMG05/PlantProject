import { h } from 'preact';

const PlantList = ({ plantData }) => {
    const plantList = plantData.map((item) => {
        return <li key={item.id}>{item.commonName}</li>;
    });

    return <ul>{plantList}</ul>;
};

export default PlantList;