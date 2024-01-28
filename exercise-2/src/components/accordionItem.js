import { useState } from "react";

function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={isOpen ? "open item" : "item"}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="number">{props.number}</p>
      <p className="text">{props.title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      <div
        className="content-box"
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        {props.text}
      </div>
    </div>
  );
}

export default AccordionItem;
