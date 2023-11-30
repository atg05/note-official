import * as React from "react";
import { EditorContextType, IEditor } from "../type/editorContextType";

export const EditorContext = React.createContext<EditorContextType | null>(
  null
);

const EdtiorProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [editor, setEditor] = React.useState<IEditor>({});

  const addToEditor = (id: string, type: string, content: string) => {
    let newContent = {
      order: Object.keys(editor)?.length + 1,
      type,
      content,
    };
    setEditor((editor: IEditor) => {
      return { ...editor, [id]: newContent };
    });
  };

  const deleteFromEditor = (contentId: string) => {
    console.log(contentId);
    const updatedEditorContent = { ...editor };
    delete updatedEditorContent[contentId];
    setEditor(updatedEditorContent);
  };

  return (
    <EditorContext.Provider value={{ editor, addToEditor, deleteFromEditor }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EdtiorProvider;
