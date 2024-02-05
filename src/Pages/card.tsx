import { useNavigate } from "react-router-dom";
import {
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../config/firebase";
import { Mat } from "./Home";

interface Props {
  mat: Mat;
}

const Card = (props: Props) => {
  const [user] = useAuthState(auth);
  const { mat } = props;
  const navigate = useNavigate();
  const materielRef = collection(db, "materiel");
  const [Materiel, setMateriel] = useState<Mat[] | null>();
  const Edit = () => {
    navigate("/edit?id=" + mat.id);
  };


  const onDelete = async () => {
    try {
      const likeToDeleteQuery = query(materielRef, where("id", "==", mat.id));
      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const matId = likeToDeleteData.docs[0].id;
      const likeToDelete = doc(db, "materiel", likeToDeleteData.docs[0].id);
      await deleteDoc(likeToDelete);
      if (user) {
        setMateriel(
          (prev) => prev && prev.filter((materiel) => materiel.id !== matId)
        );
        
      }
      
    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <div className="card">
      <div className="header">
        <h1>{mat.name}</h1>
      </div>
      <div className="body">
        {mat.img ? <img src={mat.img} alt="image" /> : ""}
      </div>
      <div className="footer">
        <p>{mat.qte}</p>
      </div>
      <div className="buttons">
        <button onClick={Edit} className="button editbtn">
          Edit
        </button>
        <button onClick={onDelete} className="button deletebtn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
