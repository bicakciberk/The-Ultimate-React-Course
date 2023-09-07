import Ticket from "./ticket";

function Tickets() {
  return (
    <div className="tickets">
      <Ticket text="React" bgColor="blue"></Ticket>
      <Ticket text="HTML+CSS" bgColor="orange"></Ticket>
      <Ticket text="Javascript" bgColor="yellow"></Ticket>
      <Ticket text="Svelte" bgColor="red"></Ticket>
    </div>
  );
}

export default Tickets;
