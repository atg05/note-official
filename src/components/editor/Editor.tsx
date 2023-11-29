import React from "react";
import "./Editor.style.css";
const Editor = () => {
  return (
    <div className="editor_container">
      <input type="text" placeholder="Title" className="title_input" />
      <textarea placeholder="Start typing..." />
    </div>
  );
};

export default Editor;
