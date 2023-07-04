import { h } from 'preact';
import { Router, Link } from 'preact-router';

const Aside = () => (
    <div className="main-aside-list">
        <aside className="main-aside" />
            <h2 className= "aside-titles">Care</h2>
                <label><input type="checkbox" name="care" value="easy"></input> Easy to care for</label>
                <label><input type="checkbox" name="care" value="unkillable"></input> Unkillable</label>
            <h2 className= "aside-titles">Light</h2>
                <label><input type="checkbox" name="light" value="low"></input> Low light </label>
                <label><input type="checkbox" name="light" value="bright"></input> Bright light</label>
            <h2 className= "aside-titles">Pet friendly</h2>
                <label><input type="checkbox" name="pet_friendly" value="yes"></input> Pet friendly</label>
            <h2 className= "aside-titles">Size</h2>
                <label><input type="checkbox" name="size" value="small"></input> Small</label>
                <label><input type="checkbox" name="size" value="medium"></input> Medium</label>
                <label><input type="checkbox" name="size" value="large"></input> Large</label>
    </div>
);

export default Aside;