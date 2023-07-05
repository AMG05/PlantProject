import { h } from 'preact';
import { Router, Link } from 'preact-router';

const NavBar = () => (
    <nav class="nav">
        <ul className="navigation_items">
        <li> <img src="src\img\Green fingers.png" alt="Plant logo" width="100" /></li>
        <li><Link href="/">All Plants</Link></li>
        <li><Link href="/indoorplants">Indoor Plants</Link></li>
        <li><Link href="/favourites">Favourites</Link></li>
        <li><Link href="/community">Community</Link></li>
   </ul>
   </nav>
);

export default NavBar;