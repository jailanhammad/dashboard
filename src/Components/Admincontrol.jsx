import React from 'react';
import './Admincontrol.css';
import adminsvg from '../Assets/admin.svg';


const Admincontrol = (props) => {
    return ( 
        <>
        
        
        <div className='admin-row'>

<div className='admin-row-1'>

<img src={adminsvg} alt="profile" className='adminsvg' />
<h1 className='adminname'>{props.adminname}</h1>
<p className='status'>{props.status}</p>

</div>


<div className='admin-row-2'>

<h1 className='last'>{props.last}</h1>
<p className='days'>{props.days}</p>

</div>

        </div>
        
        
        
        </>
     );
}

 
export default Admincontrol;