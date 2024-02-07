import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {  db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CreateForm = () => {
  const uuid = uuidv4();

  

  const [image, setImage] = useState("");

  const schema = yup.object().shape({
    nom: yup.string().required("Obligatoire !"),
    qte: yup.number().integer("has to be an integer").required("Obligatoire !"),
  });

  interface createFormData {
    nom: string;
    qte: number;
    img?: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createFormData>({
    resolver: yupResolver(schema),
  });

  const materielRef = collection(db, "materiel");

  const navigate = useNavigate();
  const onCreateMat = async (data: createFormData) => {
    await addDoc(materielRef, {
      name: data.nom,
      qte: data.qte,
      img: image,
      id: uuid,
    });
    alert("materiel has been submitted succesfully");
    navigate("/");
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      console.log(image);
    }
  };

  return (
    <form onSubmit={handleSubmit(onCreateMat)} className="create-post">
      <input type="text" placeholder="nom:" {...register("nom")} />
      {errors.nom ? <p className="err">{errors.nom.message}</p> : null}
      <input type="number" placeholder="quantité:" {...register("qte")} />
      {errors.qte ? <p className="err">{errors.qte.message}</p> : null}
      <input
        type="File"
        placeholder="image:"
        {...register("img", { onChange: (event) => handleChange(event) })}
      />
      <img src={image} alt="" width={100} />
      <br />
      <input type="submit" value="Submit" className="submitForm" />
    </form>
  );
};

export default CreateForm;
