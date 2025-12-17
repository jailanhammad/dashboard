import React from 'react';
import './Uploadbutton.css';
import upload from '../Assets/upwhite.svg';

const Uploadbutton = () => {
    return ( 
        <>
        
        
        <div className='upload-button-div'>

        <p className='text-upp'>Upload New Image</p>

        <img src={upload} className='uploadw' />


        </div>
        
        
        </>
     );
}
 
export default Uploadbutton;