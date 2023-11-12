import { Link, useLoaderData, Form } from "react-router-dom";

const Show = () => {
  const item = useLoaderData();

  const divStyle = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={divStyle}>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      <p>Amount: {item.amount}</p>
      <p>Type: {item.type}</p>
      
      <div style={{ textAlign: "center" }}>
        <h2>Edit Item</h2>
        <Form action={`/update/${item.id}`} method="post">
          <input
            type="text"
            name="title"
            placeholder="Item title"
            defaultValue={item.title}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            defaultValue={item.description}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            defaultValue={item.amount}
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            defaultValue={item.type}
          />
          <button>Update Item</button>
        </Form>
        <Form action={`/delete/${item.id}`} method="post">
          <button>Delete Item</button>
        </Form>
      </div>
      
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
