import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  function previous() {
    setCount((count) => {
      return count < 2 ? (count = 1) : count - 1;
    });
  }

  function next() {
    setCount((count) => {
      return count < messages.length ? count + 1 : (count = messages.length);
    });
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${count === 1 ? "active" : ""}`}>1</div>
        <div className={`${count === 2 ? "active" : ""}`}>2</div>
        <div className={`${count === 3 ? "active" : ""}`}>3</div>
      </div>

      <div className="message">
        Step {count} - {messages[count - 1]}
      </div>
      <div className="buttons">
        <button
          onClick={previous}
          style={{ backgroundColor: "#7950f2", color: "#fefefe" }}
        >
          Previous
        </button>
        <button
          onClick={next}
          style={{ backgroundColor: "#7950f2", color: "#fefefe" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
