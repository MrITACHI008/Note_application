import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

import "./Sidebar.css";

const  Sidebar = (props)  =>{
  const colors = ["#fe9b72","#e4ee91", "#42855B", "#646FD4", "#FD841F", "#F2DF3A", "#C689C6"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <AddIcon className="addIcon" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>




  );
}

export default Sidebar;
