
import React from 'react';
import './ProjectHeader.css';
import search from '../Assets/search.svg';
import noti from '../Assets/notification.svg';
import message from '../Assets/message.svg';
import pp from '../Assets/pp.svg';


const ProjectHeader = () => {
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

<img src={pp} className='pp' />
<h1 className='jailan'>Jailan Hammad</h1>

</div>


</article>


<div className='line-div'>
<hr className='line' />
</div>

<div className='d-div'>
<h1 className='dashboard-text'>Project Management</h1>
</div>




    
        
        </>
     );
}
 
export default ProjectHeader;