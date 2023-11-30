import React, { useContext } from "react";
import { EditorContextType } from "../../type/editorContextType";
import { EditorContext } from "../../context/editorContext";
import { generateUniqueId } from "../../helpers/generateUniqueId";

interface FileUploaderProps {
  fileType: string;
  icon: any;
}

const FileUploader: React.FC<FileUploaderProps> = ({ fileType, icon }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files && input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileData = e.target?.result as string;
        console.log(`${fileType} data:`, fileData);
        addToEditor(generateUniqueId(), fileType, fileData);
      };

      reader.readAsDataURL(file);
    }
  };

  const { editor, addToEditor } = useContext(
    EditorContext
  ) as EditorContextType;

  return (
    <div>
      <label htmlFor={`${fileType}Input`}>{icon}</label>
      <input
        type="file"
        id={`${fileType}Input`}
        accept={`${fileType}/*`}
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default FileUploader;
