import React from 'react';
import './Table.css';
import Data from './Data';

const Table = () => {
    return ( 
        <>
        
        <div className='big-table'>

<div className='div-1'>

<div className='overall-div'>

<h1 className='over-text'>Overall Messages</h1>
<p className='number-text'>1,769+</p>

</div>

<div className='three-div'>

<div className='overall-div'>

<div className='all-div'>
<p className='all-text'>All</p>
</div>

</div>

<div className='overall-div'>

<div className='star-div'>
<p className='star-text'>Unread</p>
</div>

</div>

<div className='overall-div'>

<div className='star-div'>
<p className='star-text'>Starred</p>
</div>

</div>

</div>



    
</div>


<div className='div-2'>

<div className='filters-3'>

<p className='head-2'>Name</p>
<p className='head-2'>Message</p>
<p className='head-2'>Number</p>
<p className='head-2'>Gmail</p>

</div>


</div>


<div className='div-3'>

<Data />




</div>


        </div>
        
        
        
        
        </>
     );
}
 
export default Table;