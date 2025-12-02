import React from 'react';
import './Dashboard.css';


const Dashboard = (props) => {
    return ( 
        <>
        
        
        <article className='article'>

        <div className='row-div'>

                <h1 className='text-2'>{props.textt}</h1>

            <div className='style'>

                <p className='week'>{props.week}</p>
                <img src={props.down} className='down'/>

            </div>

        </div>

        <img src={props.per} className='per'/>

        </article>
        
        
        
        
        
        </>
     );
}
 
export default Dashboard;