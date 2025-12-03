import React from 'react';
import './Categories.css';
import CategoryNav from '../Components/CategoryNav';
import CategoryHeader from '../Components/CategoryHeader';
import CategoryTable from '../Components/CategoryTable';
import Seo from '../Components/Seo';


const Categories = () => {
    return ( 
        <>
        <article className='navv'>
        <CategoryNav />
        </article>
        

        <article className='container-4'>

        <CategoryHeader />
        <CategoryTable category="Category" />
        <CategoryTable category="Tags" />
        <CategoryTable category="Pages" />

        <Seo />


        </article>
        
        
        
        </>
     );
}
 
export default Categories;