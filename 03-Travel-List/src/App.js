import Logo from "./components/Logos.js";
import Form from "./components/Form.js";
import PackingList from "./components/PackingList.js";
import Stats from "./components/stats.js";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true);
  const percentage = (packedItems.length / numItems) * 100;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    setItems([]);
  }

  return (
    <div className="App">
      <Logo></Logo>
      <Form items={items} handleAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        clearList={clearList}
      ></PackingList>
      <Stats
        numItems={numItems}
        packedItems={packedItems}
        percentage={percentage}
      ></Stats>
    </div>
  );
}

export default App;
