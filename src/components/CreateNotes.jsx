import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CreateNotes = () => {
  const [value, setValue] = useState("");
  console.log(value)
  return (
    <div>

        <div className="w-3/5 mx-auto">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
    </div>
  );
};

export default CreateNotes;
