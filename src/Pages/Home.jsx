import React from 'react';
import './Home.css';

import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Dashboard from '../Components/Dashboard';
import Insights from '../Components/Insights';

import down from '../Assets/downn.svg';
import per from '../Assets/performance.svg';
import task from '../Assets/tasks.svg';
import dot from '../Assets/dot.svg';


const Home = () => {
    return ( 
        <>
        <article className='navv'>

        <Nav />

        </article>
        
        <article className='container'>

        <Header />
        <Dashboard textt="Performance" week="This Week" down={down} per={per} />
        <Dashboard textt="Tasks" week="This Week" down={down} per={task} />


         <section className='insights-row'>

         <Insights new="NEW CLIENTS" dot={dot} green="+3,462" red="-722" classColor="red" />
         <Insights new="SALES" dot={dot} green="$103,430" gray="+5% than last month" classColor="gray" />

         </section>

        </article>
      
    

        </>
     );
}
 
export default Home;