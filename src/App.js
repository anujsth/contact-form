import logo from "./logo.svg";
import "./App.css";
import InputFields from "./component/InputFields";
import { useState } from "react";
import ContactDisplay from "./component/ContactDisplay";

function App() {
  const [input, setInput] = useState([]);
  const inputCollection = (arg) => {
    setInput((prevState) => {
      return [arg, ...prevState];
    });
  };

  const deleteInfo = (id) => {
    return setInput((prevState) => {
      return prevState.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  const editInfo = (id, val) => {
    input[id] = val;
    return setInput([...input]);
  };

  return (
    <div>
      <InputFields onInputCollection={inputCollection} />
      <ContactDisplay
        passData={input}
        onDeleteHandler={deleteInfo}
        onEditHandler={editInfo}
      />
    </div>
  );
}

export default App;
