import React from 'react';
import './ProjectNav.css';

import logoicon from '../Assets/logo.svg';
import white from '../Assets/white-d.svg';
import homeicon from '../Assets/home.svg';
import dropdown from '../Assets/dropdown.svg';
import file from '../Assets/file.svg';
import categories from '../Assets/categories.svg';
import settings from '../Assets/setting.svg';
import logout from '../Assets/logout.svg';
import { Link } from 'react-router-dom';

const ProjectNav = () => {
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


        <div className='dashboard-div'>

        <img src={homeicon} className='icon' />
        <h1 className='text'>Static Pages</h1>
        <img src={dropdown} className='icon-small' />

        </div>

        <div className='dashboard-div-white'>


        <img src={file} className='file' />

        <Link class="text-black" to="/ProjectManagement">
        Project Management
        </Link>

        </div>

        <div className='dashboard-div'>

        <img src={categories} className='icon' />
        <h1 className='text'>Categories</h1>

        </div>


        <div className='dashboard-div'>

        <img src={settings} className='icon' />
        <h1 className='text'>Settings</h1>
        <img src={dropdown} className='icon-small' />

        </div>



</section>

<div className='logout-div'>

<img src={logout} className='icon' />
<h1 className='text'>Logout</h1>

</div>

</article>



        
        </>
     );
}
 
export default ProjectNav;