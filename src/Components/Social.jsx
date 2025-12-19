import React from 'react';
import './Social.css';
import Uploadbutton from './Uploadbutton';

const Social = (props) => {
    return ( 
        <>


<div className='social-row'>

        
<div className='fill-box-long-2'>

<p className='text-box'>{props.uploadtext}</p>

<img src={props.uploadimg} className='upload' />

</div>


<Uploadbutton />
       
</div>
        
        </>
     );
}
 
export default Social;