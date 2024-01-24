import Item from "./Item";
import { useState } from "react";

function PackingList(props) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = props.items;
  if (sortBy === "description")
    sortedItems = props.items
      .slice()
      .sort((a, b) => a.description.localeCompare(b));
  if (sortBy === "packed")
    sortedItems = props.items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  // if (sortBy === "description") sortedItems = props.items.slice().sort();
  // if (sortBy === "packed") sortedItems = props.items.slice().sort().reverse();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              key={item.id}
              quantity={item.select}
              item={item.description}
              packed={item.packed}
              itemId={item.id}
              handleDeleteItem={props.handleDeleteItem}
              handleToggleItem={props.handleToggleItem}
            ></Item>
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => props.clearList()}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
