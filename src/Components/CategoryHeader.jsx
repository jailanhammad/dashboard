import React from 'react';
import './CategoryHeader.css';
import search from '../Assets/search.svg';
import noti from '../Assets/notification.svg';
import message from '../Assets/message.svg';
import pp from '../Assets/pp.svg';
import deletee from '../Assets/delete.svg';


const CategoryHeader = () => {
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


<article className='rows-header'>


<div className='d-div'>
<h1 className='dashboard-text'>Categories, Tags Management</h1>
</div>

<div className='three'>

<div className='small-div'>

<button className='button-add'>
See Details
<img src={deletee} className='upload' />

</button>


<button className='button-add'>
Edit
<img src={deletee} className='upload' />

</button>

<button className='button-add'>
Delete
<img src={deletee} className='upload' />

</button>


</div>
    
</div>

</article>





    
        
        </>
     );
}
 
export default CategoryHeader;