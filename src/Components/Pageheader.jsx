import React, { useState } from "react";
import './Pageheader.css';
import search from '../Assets/search.svg';
import noti from '../Assets/notification.svg';
import message from '../Assets/message.svg';
import pp from '../Assets/pp.svg';
import Messageicon from './Messageicon';
import deletee from '../Assets/delete.svg';
import add from '../Assets/addblack.svg';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';



const Pageheader = (props) => {

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



<div className='details-row'>


<div className='d-div'>
<h1 className='dashboard-text'>{props.hometitle}</h1>
</div>



<div className='three'>

<div className='small-div'>


<Link  className='button-add' to="/Create">
<button className='button-add'>
<p>{props.add}</p>
<img src={add} className='upload' />

</button>
</Link>

<button className='button-add' onClick={deleteItems}>
<p>{props.remove}</p>
<img src={deletee} className='upload' />

</button>


</div>
    
</div>




</div>

    
        
        </>
     );
}
 
export default Pageheader;