import { h } from 'preact';
import DefaultLayout from '@layouts/default';

export const title = 'Home';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>
    <div class = "wrap">
        <div id="app" />
    </div>
    {/* <div class="wrap">
        <header>Plants plants plants</header>
            <nav class= "main-nav">
             <img>
             <svg class="search-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" width="22.962" height="23.869" viewBox="0 0 22.962 23.869">
                    <g fill="none" stroke="#fff" stroke-width="2">
                        <circle cx="9.411" cy="9.411" r="9.411" stroke="none"/>
                        <circle cx="9.411" cy="9.411" r="8.411" fill="none"/>
                    </g>
                    <path d="M1507.04,257.246l6.459,6.459" transform="translate(-1491.952 -241.25)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                </svg>
            </img>
            <ul>
               <li><a href= "home">Indoor Plants</a></li>
                <li><a href= "home">Pots</a></li>
                <li><a href= "home">Outdoor</a></li>
                <li><img src="logo.png" alt="My Logo" /></li>
                <li><a href= "home">Artifical Plants</a></li>
                <li><a href= "home">Gifting</a></li>
                <li><a href= "favourites">Favourites</a></li>
            </ul>
            </nav>
           <div id="wrapper">
            <aside className="main-aside">
        <p>
        <h1 className= "aside-titles">Care</h1>
        <label><input type="checkbox" name="care" value="easy"></input> Easy to care for</label>
        <label><input type="checkbox" name="care" value="unkillable"></input> Unkillable</label>
        </p>
        <p>
        <h1 className= "aside-titles">Light</h1>
        <label><input type="checkbox" name="light" value="low"></input> Low light </label>
        <label><input type="checkbox" name="light" value="bright"></input> Bright light</label>
        </p>
        <p>
        <h1 className= "aside-titles">Pet friendly</h1>
        <label><input type="checkbox" name="pet_friendly" value="yes"></input> Pet friendly</label>
        </p>
        <p>
        <h1 className= "aside-titles">Size</h1>
        <label><input type="checkbox" name="size" value="small"></input> Small</label>
        <label><input type="checkbox" name="size" value="medium"></input> Medium</label>
        <label><input type="checkbox" name="size" value="large"></input> Large</label>
        </p>
        </aside>
        </div>
        <section>
        <article>
            <div className="list-plants">
            <ul>
                <li>
                    <img src="src\img\kelly-sikkema-m4kw7twpA6k-unsplash.jpg" alt="plant"></img>
                    <h2>Plant name</h2>
                    <h3>How to care for this plant</h3>
                </li>
                <li>
                    <img src="src\img\kelly-sikkema-m4kw7twpA6k-unsplash.jpg" alt="plant"></img>
                    <h2>Plant name</h2>
                    <h3>How to care for this plant</h3>
                </li>
                <li>
                    <img src="src\img\kelly-sikkema-m4kw7twpA6k-unsplash.jpg" alt="plant"></img>
                    <h2>Plant name</h2>
                    <h3>How to care for this plant</h3>
                </li>
            </ul>
            </div>     
        </article>
        </section> 
        </div> */}
        
</DefaultLayout>;

export default HomePage;