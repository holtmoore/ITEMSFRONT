import Item from "../components/Item";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = () => {
    const items = useLoaderData();
  
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h2>Create an Item</h2>
          <Form action="/create" method="post">
            <input type="text" name="title" placeholder="Enter title here"/>
            <input type="text" name="description" placeholder="Enter description here"/>
            <input type="number" name="amount" placeholder="Enter amount here"/>
            <input type="text" name="type" placeholder="Enter type here"/>
            <button>Create New Item</button>
          </Form>
        </div>
        {items.map((item) => <Item item={item} key={item.id} />)}
      </>
    );
  };
  
  export default Index;