import React from 'react';
import './Data.css';
import star from '../Assets/star.svg';
import eyee from '../Assets/eye2.svg';


 const Data = () => {
    return (
        <>
        
        
        <div className='row-data'>


<div className='checkbox'>

</div>

<div className='all-data'>

    <div className='name-div'>

    <img src={star} alt="staricon" className='star' />
    <h1 className='sara'>Sara Ahmed</h1>

    </div>

    <div className='name-div'>

<p className='text-message'>Hi Jailan, I came across...</p>

    </div>


    <div className='name-div'>

<p className='text-message'>01000444401</p>

    </div>

    <div className='name-div'>

<p className='text-message'>saraahmed@gmail...</p>

    </div>

    <div className='eye-div'>

<img src={eyee} alt="eyeeicon" className='eyee' />
<p className='view-message'>View</p>

    </div>



</div>








        </div>
        
        
        
        
        
        
        </>
     );
 }
  
 export default Data;