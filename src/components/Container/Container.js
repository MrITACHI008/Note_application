import React from 'react'
import './Container.css'
import Note from '../Note/Note';

const Container = (props) => {
    const reverArray = (arr) => {
        const array = [];
    
        for (let i = arr.length - 1; i >= 0; --i) {
          array.push(arr[i]);
        }
    
        return array;
      };
    
      const notes = reverArray(props.notes);
  return (
    <div>
        <div className="note-container">
      <h1>Notes</h1>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              updateTitle={props.updateTitle}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <div>
            <p>“The hardest part of any important task is getting started on it in the first place. <br></br>Once you actually begin work on a valuable task, you seem to be naturally motivated to continue.”</p>
            <h3>Take a note</h3>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Container