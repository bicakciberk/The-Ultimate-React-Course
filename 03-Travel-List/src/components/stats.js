function Stats(props) {
  return (
    <footer className="stats">
      <em>
        You have {props.numItems} items ın your list, and you already packed{" "}
        {props.packedItems.length}({props.percentage}%)
      </em>
    </footer>
  );
}

export default Stats;
