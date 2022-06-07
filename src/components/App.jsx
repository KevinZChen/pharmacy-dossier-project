import React, { useState } from "react";
import RxItem from "./RxItem";
import InputArea from "./InputArea";
function App() {
  const [items, setItems] = useState([
    "Atorvastatin 40 mg",
    "Bisoprolol 5 mg",
    "Perindopril 4 mg",
  ]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>My Dossier</h1>
      </div>
      <InputArea onAdd={addItem} />

      {items.map((rxItem, index) => (
        <RxItem key={index} id={index} text={rxItem} />
      ))}
    </div>
  );
}
export default App;
