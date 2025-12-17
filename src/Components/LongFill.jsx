import React from 'react';
import './LongFill.css';

const Long = (props) => {
    return ( 
        <>
        

        <div className='project-div'>

            <p className='page-title'>{props.pagetitle}</p>

    <div className='fill-box-long'>

            <p className='text-box'>{props.uploadtext}</p>

            <img src={props.uploadimg} className='upload' />

    </div>

        </div>
        
        
        </>
     );
}
 
export default Long;