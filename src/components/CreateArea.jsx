import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [Note, setNote] = useState({
        title: "",
        content: ""
    });

    function addNewNote(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        });
    }

    function submitNote(event){
        props.onAdd(Note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand(){
        setExpanded(true); 
    }

    return (
        <div>
        <form className="create-note">
            {isExpanded && (<input onChange={addNewNote} name="title" placeholder="Title" value={Note.title}/>)}
            <textarea onChange={addNewNote} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={Note.content}/>
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
  );
}

export default CreateArea;

   