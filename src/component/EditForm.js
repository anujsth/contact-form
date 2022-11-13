import { useState } from "react";
import "./EditForm.css";

function EditForm(props) {
  const [editedVal, setEditedVal] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nameEdit = (event) => {
    return setEditedVal((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const emailEdit = (event) => {
    return setEditedVal((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const phoneEdit = (event) => {
    return setEditedVal((prevState) => {
      return { ...prevState, phone: event.target.value };
    });
  };

  const submitEditedValue = (event) => {
    event.preventDefault();
    props.onPassFunc(props.onPassId, editedVal);
  };

  return (
    <div>
      {props.onToggleHandler ? (
        <form onSubmit={submitEditedValue}>
          <div className="contact-style">
            <div className="display-style">
              <p>
                Name:
                <input type="text" onChange={nameEdit} />
              </p>
              <p>
                Email:
                <input type="email" onChange={emailEdit} />
              </p>
              <p>
                Phone:
                <input type="number" onChange={phoneEdit} />
              </p>
            </div>
            <button className="edit-button-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default EditForm;
