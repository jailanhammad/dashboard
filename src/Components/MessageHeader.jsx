import React, { useState } from "react";
import './MessageHeader.css';
import search from '../Assets/search.svg';
import noti from '../Assets/notification.svg';
import message from '../Assets/message.svg';
import pp from '../Assets/pp.svg';
import deletee from '../Assets/delete.svg';
import Messageicon from './Messageicon';
import { supabase } from '../supabase';


const CategoryHeader = (props) => {

    const [title, setTitle] = useState("");

    async function deleteItems() {
        const confirmDelete = window.confirm("Do you want to delete this item?");
        if (!confirmDelete) return;
    
        const { error } = await supabase
          .from("items")
          .delete()
          .eq("title", title);
    
        if (error) {
          console.error(error);
          alert("Delete failed");
        } else {
          alert("Item deleted");
        }
      }
    
    return ( 
        <>
        


        <article className='header'>

<div className='search-div'>

    <img src={search} className='search-icon' />
    <p className='search-text'>Search here...</p>

</div>

<div className='icons-div'>


<Messageicon  icon={noti}/>



<Messageicon  icon={message}/>


</div>


<div className='profile'>

<img src={pp} className='pp' />
<h1 className='jailan'>Jailan Hammad</h1>

</div>


</article>


<div className='line-div'>
<hr className='line' />
</div>


<article className='rows-header'>


<div className='d-div-2'>
<h1 className='dashboard-text'>Messages</h1>
</div>

<div className='three'>

<div className='small-div'>


<button className='button-add-3' onClick={deleteItems}>
Archive & Delete
<img src={deletee} className='upload' />

</button>


</div>
    
</div>

</article>





    
        
        </>
     );
}
 
export default CategoryHeader;