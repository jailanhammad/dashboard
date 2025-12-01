import React from 'react';
import './Header.css';
import search from '../Assets/search.svg';
import noti from '../Assets/notification.svg';
import message from '../Assets/message.svg';


const Header = () => {
    return ( 
        <>
        
        <article className='header'>

        <div className='search-div'>

            <img src={search} className='search-icon' />
            <p className='search-text'>Search here...</p>

        </div>

<div className='icons-div'>

        <div className='notification-div'>

        <img src={noti} className='icon' />

        </div>

        <div className='notification-div'>

        <img src={message} className='icon' />

        </div>


</div>


<div className='profile'>




</div>

        </article>
        
        
        </>
     );
}
 
export default Header;