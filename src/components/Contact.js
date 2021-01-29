import { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

const Contact = () => {
  const initialState = {
    form: {
      name: "",
      email: "",
      message: "",
    },
  };

  const [form, setForm] = useState(initialState.form);

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("contact-form").reset();
    axios
      .post("http://localhost:5000/contact", form)
      .then(() => {
        console.log("Email sent.");
        setForm(initialState.form);
      })
      .catch(() => {
        console.log("Error.");
      });
  };
  /*
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(form),
    });
    let result = await response.json();
    alert(result.status);

  };
      */

  const handleFieldChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div id="Contact">
      <div className="box">
        <div className="heading">
          <h1>Contact</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name:
              <input id="name" name="name" onChange={handleFieldChange} />
            </label>
            <label htmlFor="email">
              Email:
              <input id="email" name="email" onChange={handleFieldChange} />
            </label>
            <label htmlFor="email">
              Message:
              <textarea
                id="message"
                name="message"
                rows="5"
                style={{ resize: "none" }}
                onChange={handleFieldChange}
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
