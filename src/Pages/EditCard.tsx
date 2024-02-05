import { useState } from "react";
import { auth } from "../../config/firebase";

const EditCard = () => {
  const [name,setName]=useState("")
  const [image,setImage]=useState("")
  const [qte,setQte]=useState("")
  const onEdit = (e) => {
    e.preventDefault();
  };



  return (
    <div>
      <h1>Edit-card</h1>
      <div>
        <form onSubmit={onEdit}>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setQte(e.target.value);
            }}
          />
          <br />
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
};
export default EditCard;
