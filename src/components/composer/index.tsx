import React from "react";
import { ContentState, convertFromHTML, convertFromRaw, DraftHandleValue, EditorState} from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createImagePlugin from "@draft-js-plugins/image";
import createBlockDndPlugin from "@draft-js-plugins/drag-n-drop";
import { readFile } from "@draft-js-plugins/drag-n-drop-upload";
import createDragNDropUploadPlugin from "@draft-js-plugins/drag-n-drop-upload";
import createFocusPlugin from "@draft-js-plugins/focus";
import { FileData } from "@draft-js-plugins/drag-n-drop-upload/lib/handleDroppedFiles";

const blockDndPlugin = createBlockDndPlugin();
const imagePlugin = createImagePlugin();
const focusPlugin = createFocusPlugin();
const initialState = {
 
};
function Composer() {
//   const headerOne = '<h1>Title</h1>';
// const blocksFromHTML = convertFromHTML(headerOne);
// const state = ContentState.createFromBlockArray(
//     blocksFromHTML.contentBlocks,
//     blocksFromHTML.entityMap
// );
  const [editorState, setEditorState] = React.useState(
    () =>EditorState.createEmpty(),
 //   EditorState.createWithContent(state)// 
 );
const [fileList,setFileList]=React.useState<any>([])

const mockImage = (data:FileData, success:Function, failure:Function, progress:Function) => {
  
  Promise.all(data.files.map(readFile))
    .then((files) => success(files, { retainSrc: true })
     )  
 
// return data.files[0].name
return data.files[0].name
}

const addImageAlias = (
  editorState: Draft.EditorState,
  placeholderSrc: string,
  
): Draft.EditorState => {
  const newState = imagePlugin.addImage(editorState, placeholderSrc,{});
 //setEditorState(newState)
  return newState;
};

const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: mockImage,
 addImage:addImageAlias
});
const setNewState=(state:EditorState)=>{
 //console.log('state',state)
   setEditorState( state)
}
const handleFile=(files:FileData)=>{
 const handle='Hanlde';
 return handle; 
}
return( 
  <div style={{backgroundColor:'gray',minHeight:400}}>
    <Editor editorState={editorState} 
    onChange={setNewState}
    plugins={[blockDndPlugin,imagePlugin,focusPlugin,dragNDropFileUploadPlugin]}
   // handlePastedFiles={handleFile}
    />
</div>)}
export default Composer;