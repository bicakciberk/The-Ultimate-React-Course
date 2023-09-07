import "../index.css";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  return (
    <footer className="footer">
      {hour > closeHour || hour < openHour ? (
        <p>We are close now. Please come at {openHour}</p>
      ) : (
        <p>We are currently open</p>
      )}
    </footer>
  );
}

export default Footer;
