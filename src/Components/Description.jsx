import React from 'react';
import './Description.css';

const Description = (props) => {
    return ( 
        <>
        

        <div className='project-div-009'>

            <p className='page-title'>{props.pagetitle}</p>

    <div className='fill-box-des'>

            <p className='text-box'>{props.uploadtext}</p>

            <img src={props.uploadimg} className='upload-001' />

    </div>

        </div>
        
        
        </>
     );
}
 
export default Description;