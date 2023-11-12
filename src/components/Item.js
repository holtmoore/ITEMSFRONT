import { Link } from "react-router-dom";

// Destructure the item from props
const Item = ({ item }) => {
  // Style Objects
  const divStyle = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={divStyle}>
      <Link to={`/item/${item.id}`}>
        <h1>{item.title}</h1>
      </Link>
      <h2>{item.description}</h2>
      <p>Amount: {item.amount}</p>
      <p>Type: {item.type}</p>
    </div>
  );
};

export default Item;
