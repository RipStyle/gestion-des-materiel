import { Mat } from "./Home";

interface Props {
  mat: Mat;
}

const Card = (props: Props) => {
  const { mat } = props;

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
    </div>
  );
};

export default Card;
