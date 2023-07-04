import { h } from 'preact';

const PlantsAll = ({ children }) => (

    <section className="plants-container">
    <article>
        <div className="list-plants">
        <ul>
            <li>
                <img className="plant-img" src="src\img\kelly-sikkema-m4kw7twpA6k-unsplash.jpg" alt="plant"></img>
                <h2>Plant name</h2>
                <h3>How to care for this plant</h3>
            </li>
            <li>
                <img className="plant-img" src="src\img\kelly-sikkema-m4kw7twpA6k-unsplash.jpg" alt="plant"></img>
                <h2>Plant name</h2>
                <h3>How to care for this plant</h3>
            </li>
            <li>
                <img className="plant-img" src="src\img\kelly-sikkema-m4kw7twpA6k-unsplash.jpg" alt="plant"></img>
                <h2>Plant name</h2>
                <h3>How to care for this plant</h3>
            </li>
        </ul>
        </div>     
    </article>
    </section> );

export default PlantsAll;