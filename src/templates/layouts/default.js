import { Fragment, h } from 'preact';
import Skip from '@components/skip';
import Header from '@components/header';
import Main from '@components/main';
import Footer from '@components/footer';

const Default = ({ children }) => <Fragment>
    <Header>
        <p class="user"></p>
    <div class="wrap">
        <header>
            <nav class="main-nav">
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
                <li><a href= "home">Favourites</a></li>
                <li><a href= "favourites">Community</a></li>
            </ul>
            </nav>
            </header>
           </div>
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
    </Header>
    
    <Main>
    <article>
        <div className="container">
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
                <li>
                    <img src="src\img\kelly-sikkema-m4kw7twpA6k-unsplash.jpg" alt="plant"></img>
                    <h2>Plant name</h2>
                    <h3>How to care for this plant</h3>
                </li>
            </ul>
                </div>
                    </div>
        </article>
    </Main>
    <Footer><div className="FooterWrapper">
        
        <div className= "HorizontalSection">
            <div className="MainContent">
                <img id='logo' src='/green-fingers.png' alt='Green fingers logo' width="123"/>
                <p>
                    
                    <br/>
                    <br/>
                    Plants plants plans
                </p>
                <div className= "HorizontalList">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Help</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>FAQs</a></li>
                    <li><a href='#'>Community</a></li>
                    <li><a href='#'>Privacy</a></li>
                </div>
            </div>
            <div className="AppStores">
                <p className="input-label">Get the app</p>
                <a href="#"><img src="/socials/apple-store.svg" alt="Get app on Apple Store"/></a>
                <a href="#"><img src="/socials/google-play.svg" alt="Get app on Google Play Store"/></a>
            </div>
        </div>
        <hr />
        <div className="HorizontalSection">
            <p>© 2023 Green fingers. All rights reserved.</p>
            <div className="HorizontalList">
                <li>
                    <a href='#'><img src="/img/socials/twitter.svg" alt='Twitter'/></a>
                </li>
                <li>
                    <a href='#'><img src="/img/socials/facebook.svg" alt='Facebook'/></a>
                </li>
            </div>
        </div>
    </div></Footer>
</Fragment>;

export default Default;