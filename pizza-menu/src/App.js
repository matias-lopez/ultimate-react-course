import logo from "./logo.svg";
import "./App.css";
import pizzaData from "./data.js";

function App() {
  return (
    <div className="container">
      <header className="header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>Hello React!</h1> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Header />
        <Menu />
      </header>
      <Footer />
    </div>
  );
}

function Pizza({ pizza }) {
  console.log(pizza);

  // if (pizza.soldOut) return;

  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img
        src={pizza?.photoName || "pizzas/spinaci.jpg"}
        alt={pizza?.name || "pizza"}
        style={{ maxHeight: "20em", maxWidth: "20em" }}
      />
      <div>
        <h3>{pizza?.name || "Regular pizza"} </h3>
        <p>{pizza?.ingredient || "Tomato, mozarella"}</p>
        <p>{pizza.soldOut ? "SOLD OUT" : pizza?.price + 3}</p>
      </div>
    </li>
  );
}

function Header() {
  return <h1 style={{ backgroundColor: "red" }}>Fast React Pizza Company</h1>;
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      {/* <Pizza
        name="Special Pizza"
        ingredient="Salami, pepper"
        photoName="pizzas/spinaci.jpg"
        price={200}
      />
      <Pizza />
      <Pizza />
      <Pizza /> */}

      <h2>Our Menu</h2>

      {pizzas.length > 0 && (
        <>
          <p>Authentig italian cousine</p>

          <ul>
            {pizzas.map((pizza, index) => (
              <Pizza key={index} pizza={pizza} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const [openHour, closeHour] = [12, 22];
  const isOpen = hour >= openHour && hour <= closeHour;

  return <Order isOpen={isOpen} closeHour={closeHour} />;
};

const Order = ({ isOpen, closeHour }) => {
  console.log(isOpen, closeHour);

  return (
    <footer className="footer">
      <div className="order">
        {new Date().toLocaleTimeString()}. We are {isOpen ? "open" : "closed"}{" "}
        until {closeHour}.<button className="btn">Order</button>
      </div>
    </footer>
  );
};

export default App;
