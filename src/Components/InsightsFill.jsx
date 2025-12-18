import React from 'react';
import './InsightsFill.css';

const InsightsFill = (props) => {
    return ( 
        <>
        

        <div className='project-div'>

            <p className='page-title'>{props.insights}</p>

        <div className='fill-box-001'>

        <div className='diiv-1'>
        <p className='text-box'>{props.hundret}</p>
        <img src={props.uploadimg} className='upload' />
        </div>
            

        <div className='diiv-2'>
        <p className='text-box-22'>{props.projecttext}</p>
        <img src={props.uploadimg} className='upload' />
        </div>

    </div>

        </div>
        
        
        </>
     );
}
 
export default InsightsFill;