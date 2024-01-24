import React from "react";

function Item(props) {
  return (
    <div style={props.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={props.packed}
        onChange={() => props.handleToggleItem(props.itemId)}
      />
      <span>
        {props.quantity} {props.item}
      </span>

      <button onClick={() => props.handleDeleteItem(props.itemId)}>❌</button>
    </div>
  );
}

export default Item;
