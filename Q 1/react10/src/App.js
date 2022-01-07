import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
export default function App() {
  return (
    <>
      <Mycomponent />
    </>
  );
}

function Mycomponent() {
  const appName = "MyChatApp";
  const studentname = "Pritam Sanglikar";
  const Studentid = "210940320094";

  const [message, setmessage] = useState("");
  const [valid, setvalid] = useState(true);
  const [list, setList] = useState([]);

  const saveMessage = (e) => {
    setmessage(e.target.value);
  };

  const sendMessage = () => {
    if (message == "") {
      setvalid(false);
      return;
    } else {
    }
  };

  const handlemessage = (e) => {
    setmessage(e.target.value);
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-2 bg-secondary p-2">
        <h1 className="p-2 fs-2 text-light">
          <strong>{appName}</strong>
        </h1>

        <h6 className="text-light">
          <em>
            by {studentname} {Studentid}
          </em>
        </h6>
      </div>

      <div className="d-flex">
        <input
          className="form-control me-2"
          type="text"
          value={message}
          placeholder="Lets chat here"
          onChange={handlemessage}
        />
        <input
          className="btn btn-secondary w-25"
          type="button"
          value="SEND"
          onClick={sendMessage}
        />
      </div>

      {list.map((item) => (
        <div>
          <div>
            <strong>message is</strong> {item.message}
          </div>
        </div>
      ))}
    </div>
  );
}
