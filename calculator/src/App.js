import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const showTotal = !Number.isNaN(total) && total >= 0;
  const averageTip = ((tip + friendTip) / 2) * (total / 100);
  console.log(averageTip);

  return (
    <div>
      <Bill total={total} onSetTotal={setTotal} />
      <Service tip={tip} onSetTip={setTip}>
        How was the service?
      </Service>
      <Service tip={friendTip} onSetTip={setFriendTip}>
        "How was your friend service?
      </Service>
      {showTotal && (
        <h3>
          You pay ${total + averageTip} (${total} + ${averageTip} tip)
        </h3>
      )}
    </div>
  );
}

const Bill = ({ total, onSetTotal }) => {
  // console.log(total);

  return (
    <div>
      <p>How much?</p>
      <input
        type="number"
        value={total}
        onChange={(e) => onSetTotal(Number(e.target.value))}
      />
    </div>
  );
};

const Service = ({ tip, onSetTip, children }) => {
  return (
    <div>
      <p>{children}</p>
      <select
        name=""
        id=""
        value={tip}
        onChange={(e) => onSetTip(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Okay (5%)</option>
        <option value="10"> Good (10%)</option>
        <option value="20">Amazing! (20%)</option>
      </select>
    </div>
  );
};

export default App;
