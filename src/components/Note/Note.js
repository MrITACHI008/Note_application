import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
// import { Helmet } from 'react-helmet'

import "./Note.css";

// import { Input } from "@mui/material";
// import { Title } from "@mui/icons-material";

let timer = 500,
  timeout;
const Note = (props) => {

  

  
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));

  };

  const updateTitle = (textTitle, id) => {
    debounce(() => props.updateTitle(textTitle, id));


    const titleLet = document.getElementById('note_title')
    if(titleLet.value.length === 10){
      document.getElementById('note_text').style="display:none;"
      return false;
    }else{
      document.getElementById('note_text').style="display:block;"
    }
  }


  

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <input
        id="note_title"
        className="note_title"
        defaultValue={props.note.textTitle}
        onChange={(event) => updateTitle(event.target.value, props.note.id)}
        
        placeholder="Title..."
        
       
      />
      <textarea
        className="note_text"
        id="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
        placeholder="Description..."
        style={{display: "none"}}
      />


      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <DeleteIcon className="delete-icon"  onClick={() => props.deleteNote(props.note.id, props.note.title)}
        />
      </div>
      
    </div>

    
  );
}

export default Note;
