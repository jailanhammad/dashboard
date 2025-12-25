import React, {useState} from 'react';
import { supabase } from '../supabase';

const CreateItem = () => {


    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creationdate, setCreationdate] = useState("");

    
        async function addItem(){
         const res = await supabase.from("items").insert({"title":title,  "description":description, "creationdate":creationdate })
         alert("Done");

       }

       
       

    return ( 
        <>
        
        <form>

<label>Project Name</label>
<input type="text" onClick={(e) => {setTitle (e.target.value)}} />
<label>Project Description</label>
<input type="text" onClick={(e) => {setTitle (e.target.value)}} />
<label>Creation Date</label>
<input type="text" onClick={(e) => {setTitle (e.target.value)}} />

        </form>
        
        <button onClick={addItem}>
            Add
        </button>
             
        </>
     );
}
 
export default CreateItem;