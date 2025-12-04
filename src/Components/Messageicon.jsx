import React from 'react';
import './Messageicon.css';

import { Link } from 'react-router-dom';

const Messageicon = (props) => {
    return ( 
        <>
        
        <article className='header'>


<div className='icons-div'>


<div className='message-div'>

<Link to="/Message">
<img src={props.icon} class="icon-message" />
</Link>


</div>


</div>




</article>


        
        
        </>
     );
}
 
export default Messageicon;