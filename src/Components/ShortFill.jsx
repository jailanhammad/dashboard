import React from 'react';
import './ShortFill.css';

const Short = (props) => {
    return ( 
        <>
        

        <div className='project-div'>

            <p className='page-title'>{props.pagetitle}</p>

    <div className='fill-box-00'>

            <p className='text-box'>{props.uploadtext}</p>

            <img src={props.uploadimg} className='upload' />

    </div>

        </div>
        
        
        </>
     );
}
 
export default Short;