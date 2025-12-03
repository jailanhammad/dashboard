import React from 'react';
import './CategoryTable.css';

import down from '../Assets/dropp.svg';

import folder from '../Assets/folder.svg';
import edit from '../Assets/edit.svg';

const CategoryTable = (props) => {
    return ( 
        <>
        
        <article className='first-box'>

<div className='row-2'>


<div className='project-div'>

            <p className='page-title'>Selection Type</p>

    <div className='fill-box'>

            <p className='text-box'>{props.category}</p>

            <img src={down} className='ed' />

    </div>

</div>

<div className='project-div'>

            <p className='page-title'>Content Type</p>

    <div className='fill-box'>

            <p className='text-box'>Branding</p>

            <img src={edit} className='upload' />

    </div>

</div>


</div>


    

<div className='project-div'>

<p className='page-title'>Add Content</p>

<div className='fill-box-big'>

<img src={folder} className='folder-icon' />

</div>

</div>

</article>

        
        
        
        
        
        
        </>
     );
}
 
export default CategoryTable;