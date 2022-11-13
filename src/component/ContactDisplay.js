import { useState } from "react";
import "./ContactDisplay.css";
import EditForm from "./EditForm";

function ContactDisplay(props) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [valEdited, setValEdited] = useState({});
  const submitEditHandler = (obj) => {
    setValEdited(obj);
  };
  return (
    <div>
      {props.passData.map((val, index) => {
        const editHandler = () => {
          return setToggleEdit(toggleEdit ? false : true);
        };
        return (
          <div>
            <div className="contact-style">
              <div className="display-style">
                <p className="">Name:{val.name}</p>
                <p>Email:{val.email}</p>
                <p>Phone:{val.phone}</p>
              </div>
              <div className="buttons-style">
                <button className="edit-button-style" onClick={editHandler}>
                  Edit
                </button>
                <button
                  className="delete-button-style"
                  onClick={() => {
                    props.onDeleteHandler(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            {/* {props.onToggle ? <h1>editing</h1> : ""} */}
            <EditForm
              onToggleHandler={toggleEdit}
              onDataEdit={props.passData}
              onPass={submitEditHandler}
              onPassFunc={props.onEditHandler}
              onPassId={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ContactDisplay;
