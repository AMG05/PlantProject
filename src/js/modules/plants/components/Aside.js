import { h } from 'preact';
import { Router, Link } from 'preact-router';

const Aside = ({filteredData, onFilter}) => (
    <div className="main-aside-list">
        <aside className="main-aside" />
            <h2 className= "aside-titles">Care</h2>
                <label><input type="checkbox" name="care" value="easy"></input> Frequent watering</label>
                <label><input type="checkbox" name="care" value="unkillable"></input> Unkillable</label>
            <h2 className= "aside-titles">Light</h2>
                <label><input type="checkbox" name="light" value="full sun" onChange={() => onFilter('full sun')}></input> Full sun </label>
                <label><input type="checkbox" name="light" value="shade" onChange={() => onFilter('shade')}></input> Shade </label>
            <h2 className= "aside-titles">Size</h2>
                <label><input type="checkbox" name="size" value="small"></input> Small</label>
                <label><input type="checkbox" name="size" value="medium"></input> Medium</label>
                <label><input type="checkbox" name="size" value="large"></input> Large</label>
    </div>
);

export default Aside;