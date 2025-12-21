import React from 'react';
import './CategoryNav.css';

import logoicon from '../Assets/logo.svg';
import white from '../Assets/white-d.svg';
import homeicon from '../Assets/home.svg';
import dropdown from '../Assets/dropdown.svg';
import cat from '../Assets/catblack.svg';
import manage from '../Assets/manage.svg';
import settings from '../Assets/setting.svg';
import logout from '../Assets/logout.svg';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
    return ( 
        <>
  
  <article className='nav'>


<div className='logo-div'>

<img src={logoicon} className='logo-icon' />
<h1 className='welcome'>Welcome Jailan!</h1>

</div>


<section className='nav-section'>

        <div className='dashboard-div-2'>

        <img src={white} className='d-icon' />
        <Link class="text" to="/Home">
        Dashboard
        </Link>

        </div>


        <div class="menu-item">

        <div className='dashboard-div'>

        <img src={homeicon} className='icon' />
        <h1 className='text'>Static Pages</h1>
        <img src={dropdown} className='icon-small' />

        </div>

        <ul class="dropdown-menu">
        <Link className='dropmenu' to="/Profile">
                <li><a href="#">Home</a></li>
        </Link>
        <Link className='dropmenu' to="/AboutPage">
        <li><a href="#">About</a></li>
        </Link>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Add Page</a></li>

        </ul>
        </div>


        <div className='dashboard-div-3'>


        <img src={manage} className='file' />

        <Link class="text" to="/ProjectManagement">
        Project Management
        </Link>

        </div>

        <div className='dashboard-div-white'>

        <div className='cat-div'>
        <img src={cat} className='icon' />

        <Link class="text-black" to="/Categories">
        Categories
        </Link>

        </div>
    
        </div>


        <div class="menu-item">

        <div className='dashboard-div'>

        <img src={settings} className='icon' />
        <h1 className='text'>Settings</h1>
        <img src={dropdown} className='icon-small' />

        </div>
        <ul class="dropdown-menu">
        <Link className='dropmenu' to="/Profile">
        <li><a href="#">Profile</a></li>
        </Link>
        <Link className='dropmenu' to="/Admin">
        <li><a href="#">Security</a></li>
        </Link>
        <Link className='dropmenu' to="/Message">
        <li><a href="#">Messages</a></li>
        </Link>        
        </ul>
        </div>



</section>

<div className='logout-div'>

<img src={logout} className='icon' />
<Link class="text" to="/Secret">
Logout
</Link>

</div>

</article>



        
        </>
     );
}
 
export default CategoryNav;