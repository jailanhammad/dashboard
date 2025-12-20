import React from 'react';
import './Pageheader.css';
import search from '../Assets/search.svg';
import noti from '../Assets/notification.svg';
import message from '../Assets/message.svg';
import pp from '../Assets/pp.svg';
import Messageicon from './Messageicon';
import deletee from '../Assets/delete.svg';
import add from '../Assets/addblack.svg';


const Pageheader = (props) => {
    return ( 
        <>
        


        <article className='header'>

<div className='search-div'>

    <img src={search} className='search-icon' />
    <p className='search-text'>Search here...</p>

</div>

<div className='icons-div'>


<Messageicon  icon={noti}/>



<Messageicon  icon={message}/>


</div>


<div className='profile'>

<img src={pp} className='pp' />
<h1 className='jailan'>Jailan Hammad</h1>

</div>


</article>


<div className='line-div'>
<hr className='line' />
</div>



<div className='details-row'>


<div className='d-div'>
<h1 className='dashboard-text'>{props.hometitle}</h1>
</div>



<div className='three'>

<div className='small-div'>

<button className='button-add'>
<p>{props.add}</p>
<img src={add} className='upload' />

</button>


<button className='button-add'>
<p>{props.remove}</p>
<img src={deletee} className='upload' />

</button>


</div>
    
</div>




</div>

    
        
        </>
     );
}
 
export default Pageheader;