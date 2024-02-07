import { useState } from "react";
import "./App.css";

const faqs = [
  {
    id: 118836,
    title: "A question",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 933372,
    title: "Some other questions",
    text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 499476,
    title: "Some random different questions",
    text: "Lorem orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

const Accordion = ({ data }) => {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AcoordionItem
          data={{ ...item, index }}
          key={index}
          num={index}
          curOpen={currentlyOpen}
          onOpen={setCurrentlyOpen}
        >
          {item.text}
        </AcoordionItem>
      ))}
    </div>
  );
};

const AcoordionItem = ({ data, num, curOpen, onOpen, children }) => {
  const isCurrentlyOpen = num === curOpen;
  // console.log(isCurrentlyOpen);
  // console.log(index);
  // console.log(data);

  // function handleToggle() {
  //   // setIsOpen((isOpen) => !isOpen);
  // }

  function handleToggle() {
    // num === curOpen ? onOpen(null) : onOpen(num);
    onOpen(isCurrentlyOpen ? null : num);
  }

  return (
    <div
      className={`item ${isCurrentlyOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{data.title}</p>
      <p className="icon">{isCurrentlyOpen ? "-" : "+"}</p>
      {isCurrentlyOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default App;
