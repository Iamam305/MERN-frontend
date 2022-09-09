import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CreateNote = () => {
  const [value, setValue] = useState("");
  console.log(value)
  return (
    <div>
      <form action="">
        <span>
          <label htmlFor="noteTitle">Title</label>
          <input type="text" id="noteTitle"/>
        </span>
        <div className="w-3/5 mx-auto">
      <ReactQuill theme="snow" value={value} onChange={setValue} className="h-40" />
        </div>
      </form>
    </div>
  );
};

export default CreateNote;