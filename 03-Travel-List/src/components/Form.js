import { useState } from "react";

function Form(props) {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;
    const newItem = { description, select, id: Date.now(), packed: false };
    props.handleAddItems(newItem);
    setDescription("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={select}
        onChange={(e) => setSelect(Number(e.target.value))}
      >
        {numbers.map((i, index) => {
          return (
            <option value={i} key={index}>
              {i}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
