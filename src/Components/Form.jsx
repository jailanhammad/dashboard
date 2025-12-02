import React from 'react';
import './Form.css';


import up from '../Assets/upload.svg';
import edit from '../Assets/edit.svg';

const Form = () => {
    return ( 
        <>
        
        
        <article className='first-box'>

<div className='row-1'>


<div className='project-div'>

            <p className='page-title'>Page Title</p>

    <div className='fill-box'>

            <p className='text-box'>Upload Image</p>

            <img src={up} className='upload' />

    </div>

</div>

<div className='project-div'>

            <p className='page-title'>Category</p>

    <div className='fill-box'>

            <p className='text-box'>UI & UX Design</p>

            <img src={edit} className='upload' />

    </div>

</div>


</div>


    
<div className='project-div'>

<p className='page-title'>Heading</p>

<div className='fill-box-2'>

<p className='text-box'>My process starts with understand...</p>

<img src={edit} className='upload' />

</div>

</div>


</article>
        
        </>
     );
}
 
export default Form;