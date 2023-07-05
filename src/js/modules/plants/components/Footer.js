import { h } from 'preact';

const Footer = ({ children }) => <footer className="footer">
<div className="horizontalSection">
    <div className="MainContent">
        <img id="logo" src="src\img\Green fingers.jpg" alt="Green fingers logo" width="123"/>
        <p>
            <br/>
            <br/>
            Plants plants plans
        </p>
        <div className="horizontalList">
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
        <a href="#"><img src="src\img\socials\apple-store.svg" alt="Get app on Apple Store"/></a>
        <a href="#"><img src="src\img\socials\google-play.svg" alt="Get app on Google Play Store"/></a>
    </div>
</div>
<hr />
<div className="horizontalSection">
    <p>© 2023 Green fingers. All rights reserved.</p>
    <div className="horizontalList">
        <li>
            <a href='#'><img src="src\img\socials\twitter.svg" alt='Twitter'/></a>
        </li>
        <li>
            <a href='#'><img src="src\img\socials\facebook.svg" alt='Facebook'/></a>
        </li>
    </div>
</div>
</footer>;

export default Footer;