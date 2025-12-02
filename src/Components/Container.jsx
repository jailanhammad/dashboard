import React from 'react';
import './Container.css';

import edit from '../Assets/edit.svg';
import up from '../Assets/upload.svg';
import deletee from '../Assets/delete.svg';
import img from '../Assets/img.svg';


const Container = (props) => {
    return (
        <>
        
        <article className='row-cont'>


<div className='small-div'>

<p className='cat-text'>{props.type}</p>

</div>

<div className='small-div'>

<p className='cat-text'>Giza zoo</p>
<img src={edit} className='upload' />


</div>


<div className='small-div'>

<p className='cat-text'>website is a mo...</p>
<img src={edit} className='upload' />

</div>

<div className='small-div'>

<img src={img} className='circle' />
<p className='cat-text'>Upload</p>
<img src={up} className='upload-2' />

</div>

<div className='small-div'>
<button className='button'>
See Details
</button>

<img src={deletee} className='upload' />


</div>


        </article>
        
        
        
        </>
      );
}
 
export default Container;