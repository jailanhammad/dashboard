import React from 'react';
import './Insights.css';



const Dashboard = (props) => {
    return ( 
        <>
        

        <article className='box'>

<div className='rows'>

<h1 className='new-text'> {props.new}</h1>
<img src={props.dot} className='dotts' />

</div>

<div className='coloumns'>

<p className='green'>{props.green}</p>
<p className='red'>{props.red}</p>

</div>

        </article>
        
        
        
        
        </>
     );
}
 
export default Dashboard;