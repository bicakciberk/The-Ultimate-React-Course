function Ticket(props) {
  return (
    <div className="ticket" style={{ backgroundColor: `${props.bgColor}` }}>
      {props.text}
    </div>
  );
}

export default Ticket;
