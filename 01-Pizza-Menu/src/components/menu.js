import Pizza from "./Pizza";
function Menu() {
  return (
    <div className="menu">
      <h2>Here is menu ;</h2>
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price="6"
        photoName="pizzas/focaccia.jpg"
        soldOut="false"
      ></Pizza>

      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price="10"
        photoName="pizzas/margherita.jpg"
        soldOut="false"
      ></Pizza>
    </div>
  );
}

export default Menu;
