import "./Card.css";
const Card = (props) => {
  const { key, title, desc, image } = props;
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{desc}</p>
    </div>
  );
};
export default Card;
