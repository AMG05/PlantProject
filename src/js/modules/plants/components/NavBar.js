import { h } from 'preact';
import { Router, Link } from 'preact-router';

const NavBar = () => (
    <nav class="nav">
        <ul>
    <img>
    <svg class="search-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" width="22.962" height="23.869" viewBox="0 0 22.962 23.869">
           <g fill="none" stroke="#fff" stroke-width="2">
               <circle cx="9.411" cy="9.411" r="9.411" stroke="none"/>
               <circle cx="9.411" cy="9.411" r="8.411" fill="none"/>
           </g>
           <path d="M1507.04,257.246l6.459,6.459" transform="translate(-1491.952 -241.25)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
       </svg>
   </img>
   
      <li><a href="home">Indoor Plants</a></li>
       <li><a href="home">Pots</a></li>
       <li><a href="home">Outdoor</a></li>
       <li><img src="src\img\Green fingers.png" alt="Plant logo" width="100" /></li>
       <li><Link href="/">Home</Link></li>
       <li><Link href="/favourites">Favourites</Link></li>
       <li><a href="favourites">Community</a></li>
   </ul>
   </nav>
);

export default NavBar;