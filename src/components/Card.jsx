import "./Card.css";

export default function Card({ image, name, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
