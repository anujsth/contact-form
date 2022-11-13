import { useState } from "react";

function InputFields(props) {
  //   const [initialName, setInitialName] = useState("");
  //   const [initialEmail, setInitialEmail] = useState("");
  //   const [initialPhone, setInitialPhone] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputNameHandler = (event) => {
    setInputs((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const inputEmailHandler = (event) => {
    setInputs((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const inputPhoneHandler = (event) => {
    setInputs((prevState) => {
      return { ...prevState, phone: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onInputCollection(inputs);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Contact Form</h1>
        <p>Name</p>
        <input type="text" placeholder="Name" onChange={inputNameHandler} />
        <p>Email</p>
        <input type="email" placeholder="email" onChange={inputEmailHandler} />
        <p>Phone</p>
        <input type="number" placeholder="phone" onChange={inputPhoneHandler} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InputFields;
