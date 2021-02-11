import axios from "axios";
import { useState } from "react";
import "../styles/Contact.css";
import { AnimateLink, RollInWhenVisible } from "./helpers/index";

const Contact = () => {
  const initialState = {
    form: {
      name: "",
      email: "",
      message: "",
    },
  };

  const [form, setForm] = useState(initialState.form);
  const [buttonState, setButtonState] = useState("SEND");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (buttonState === "SEND") {
      setButtonState("SENDING...");
      axios
        .post("http://localhost:4000/contact", form)
        .then(() => {
          setForm(initialState.form);
          document.getElementById("contact-form").reset();
          document.getElementById("submit").style.background = "#8BFEB5";
          setButtonState("SENT!");
          setTimeout(function () {
            setButtonState("SEND");
            document.getElementById("submit").style.background = "white";
          }, 2000);
        })
        .catch(() => {
          document.getElementById("submit").style.background = "#FB6F5C";
          setButtonState("ERROR!");
          setTimeout(function () {
            setButtonState("SEND");
            document.getElementById("submit").style.background = "white";
          }, 2000);
        });
    }
  };

  const handleFieldChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div id="Contact"></div>
      <div className="box">
        <div className="heading">
          <h1>Contact</h1>
        </div>
        <RollInWhenVisible>
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              pattern="^(?=.*\S).+$"
              required
              title="Must be at least 1 non-space character"
              onChange={handleFieldChange}
              placeholder="Name"
            />
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={handleFieldChange}
              placeholder="Email"
            />
            <textarea
              id="message"
              name="message"
              rows="5"
              style={{ resize: "none" }}
              required
              onChange={handleFieldChange}
              placeholder='Message (e.g. "Hi Tom, love your portfolio! Would you like a job?")'
            />
            <button id="submit" type="submit">
              <AnimateLink>
                <i className="far fa-envelope"></i>
                {buttonState}
              </AnimateLink>
            </button>
          </form>
        </RollInWhenVisible>
      </div>
    </div>
  );
};

export default Contact;
