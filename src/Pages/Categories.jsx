import React from 'react';
import './Categories.css';
import CategoryNav from '../Components/CategoryNav';
import CategoryHeader from '../Components/CategoryHeader';


const Categories = () => {
    return ( 
        <>
        <article className='navv'>
        <CategoryNav />
        </article>
        

        <article className='container-4'>

        <CategoryHeader />

        </article>
        
        
        
        </>
     );
}
 
export default Categories;