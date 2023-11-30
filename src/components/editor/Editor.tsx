import "./Editor.style.css";
import Toolbar from "../toolbar/Toolbar";
import { useState } from "react";

const Editor = () => {
  const [editorState, setEditorState] = useState(null);

  function resizeTextArea() {
    const textarea = document.getElementById("TextArea");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <div className="editor_container">
      <input type="text" placeholder="Title" className="title_input" />
      {editorState &&
        editorState.map((state) => {
          switch (state.type) {
            case "text":
              return <textarea defaultValue={state.content} />;
            case "image":
              return <img src={state.content} />;
            default:
              return null;
          }
        })}
      <textarea
        placeholder="Start typing..."
        onChange={(e) => {
          resizeTextArea();
          console.log(e.target.value);
        }}
        id="TextArea"
      />
      <Toolbar />
    </div>
  );
};

export default Editor;
