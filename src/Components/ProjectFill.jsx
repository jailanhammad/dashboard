import React from 'react';
import './ProjectFill.css';

const ProjectFill = (props) => {
    return (
        <>
        
        
<div className='fill-box-003'>

<p className='text-box'>{props.uploadtext}</p>

<img src={props.uploadimg} className='upload' />

</div>
        
        
        </>
      );
}
 
export default ProjectFill;