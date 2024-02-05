import { Mat } from "./Home";
import { useNavigate } from "react-router-dom";

interface Props {
  mat: Mat;
}

const Card = (props: Props) => {
  const { mat } = props;

const Edit = () =>{
  const navigate=useNavigate();
  navigate("/edit")
}

  return (
    <div className="card">
      <div className="header">
        <h1>{mat.name}</h1>
      </div>
      <div className="body">
        <img src={mat.img} alt="image" />
      </div>
      <div className="footer">
        <p>{mat.qte}</p>
      </div>
      <div className="buttons">
        <button onClick={Edit} className="button editbtn">Edit</button>
        <button className="button deletebtn">Delete</button>
      </div>
    </div>
  );
};

export default Card;
