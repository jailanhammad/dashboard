import React from 'react';
import './Comp.css';
import Uploadbutton from './Uploadbutton';

const Comp = (props) => {
    return ( 
        <>
        
        <article className='comp-row'>


<div className='project-div'>

<p className='page-title'>{props.pagetitle}</p>

<div className='fill-box-005'>

<p className='text-box'>{props.uploadtext}</p>

<img src={props.uploadimg} className='upload' />

</div>

</div>


<div className='project-div'>

<p className='page-title'>{props.pagetitle2}</p>

<div className='fill-box-005'>

<p className='text-box'>{props.uploadtext2}</p>

<img src={props.uploadimg} className='upload' />

</div>

</div>


<div className='icon-coloumn'>

<p className='icon-text-01'>Icon</p>
<Uploadbutton />

</div>



        </article>
        
        
        
        
        
        
        </>
     );
}
 
export default Comp;