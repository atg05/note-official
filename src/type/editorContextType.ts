export interface IEditor {
    order: number,
    type: string,
    content: string
}


export type EditorContextType = {
    editor: { [id: string]: IEditor };
    addToEditor: (id:string,type:string,content:string) => void;
    deleteFromEditor:(contentId:string)=>void;
}