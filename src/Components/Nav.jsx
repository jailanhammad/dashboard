import React from 'react';
import './Nav.css';
import logoicon from '../Assets/logo.svg';
import dashboardicon from '../Assets/dashboard-icon.svg';
import homeicon from '../Assets/home.svg';
import dropdown from '../Assets/dropdown.svg';
import manage from '../Assets/manage.svg';
import categories from '../Assets/categories.svg';
import settings from '../Assets/setting.svg';
import logout from '../Assets/logout.svg';



const Nav = () => {



    return ( 
        <>



        <article className='nav'>


        <div className='logo-div'>

        <img src={logoicon} className='logo-icon' />
        <h1 className='welcome'>Welcome Jailan!</h1>

        </div>


        <section className='nav-section'>

                <div className='dashboard-div-white'>

                <img src={dashboardicon} className='d-icon' />
                <h1 className='text-black'>Dashboard</h1>

                </div>


                <div className='dashboard-div'>

                <img src={homeicon} className='icon' />
                <h1 className='text'>Static Pages</h1>
                <img src={dropdown} className='icon-small' />

                </div>

                <div className='dashboard-div'>

                <img src={manage} className='icon' />
                <h1 className='text'>Project Management</h1>

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
 
export default Nav;