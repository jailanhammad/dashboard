import React, { useState } from "react";
import { supabase } from "../supabase";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  async function addItem() {
    const { error } = await supabase.from("items").insert({
      title,
      description,
      created_at: date,
    });

    if (error) {
      console.error(error);
      alert("Failed to add item");
    } else {
      alert("Item added successfully");
    }
  }

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
      <form>
        <label>Project Name</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Project Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Creation Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </form>

      <button onClick={addItem}>Add</button>
      <button onClick={deleteItems}>Delete</button>
    </>
  );
};

export default CreateItem;
