import React, { useState } from "react";

function CreateArea(props) {
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
        props.onAdd();
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
        <form>
            <input onChange={addNewNote} name="title" placeholder="Title" value={Note.title}/>
            <textarea onChange={addNewNote} name="content" placeholder="Take a note..." rows="3" value={Note.content}/>
            <button onClick={submitNote}>Add</button>
        </form>
        </div>
  );
}

export default CreateArea;
