import "./Editor.style.css";
import Toolbar from "../toolbar/Toolbar";
import { useContext, useEffect, useRef, useState } from "react";
import { EditorContext } from "../../context/editorContext";
import { EditorContextType, IEditor } from "../../type/editorContextType";
import { generateUniqueId } from "../../helpers/generateUniqueId";
import DeleteIcon from "../../assets/svg/delete_icon.svg?react";

const TextArea = () => {
  const [textData, setTextData] = useState({ type: "text", data: "" });
  const [textBoxId, setTextBoxId] = useState(generateUniqueId());

  const { editor, addToEditor, deleteFromEditor } = useContext(
    EditorContext
  ) as EditorContextType;

  function resizeTextArea() {
    const textarea = document.getElementById("TextArea");
    textarea.style.height = "auto"; // Reset the height to auto to get the scroll height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
  }
  const handleChange = (e: any) => {
    addToEditor(textBoxId, "text", e.target.value);
    resizeTextArea();
  };

  return (
    <textarea
      placeholder="Start typing..."
      onChange={handleChange}
      id="TextArea"
    />
  );
};
const Editor = () => {
  const { editor, addToEditor, deleteFromEditor } = useContext(
    EditorContext
  ) as EditorContextType;

  return (
    <div className="editor_container">
      <input type="text" placeholder="Title" className="title_input" />
      {Object.keys(editor).map((key: IEditor) => {
        const { ...data } = editor[key];
        console.log(data);

        // switch (key.type) {
        //   case "text":
        //     return <textarea defaultValue={data.content} />;
        //   case "Audio":
        //     return <textarea defaultValue={data.content} />;
        //   case "Video":
        //     return <video src={data.content} />;
        //   case "Image":
        //     return <img src={data.content} />;
        // }
        switch (data.type) {
          case "text":
            return <textarea defaultValue={data.content} />;
          case "Audio":
            return (
              <audio controls className="audio_player">
                <source src={data.content} type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio>
            );
          case "Video":
            return (
              <div className="player_container">
                <DeleteIcon
                  className="delete_icon"
                  onClick={() => {
                    deleteFromEditor(key);
                  }}
                />
                <video controls width="300" className="video_player">
                  <source src={data.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          case "Image":
            return (
              <div className="player_container">
                <DeleteIcon
                  className="delete_icon"
                  onClick={() => {
                    deleteFromEditor(key);
                  }}
                />
                <img src={data.content} className="image_player" />
              </div>
            );
          default:
            return null;
        }
      })}

      <TextArea />

      <Toolbar />
    </div>
  );
};

export default Editor;
