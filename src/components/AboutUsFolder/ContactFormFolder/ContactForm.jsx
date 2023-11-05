import "./ContactForm.css";
import { useState } from "react";
// import { Buttons } from "../../Buttons/Buttons";
// import button from "../../../assets/Button.svg";
// import buttonHover from "../../../assets/ButtonHover.svg";
import { ButtonStyled } from "../../Buttons/ButtonStyled";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactObject = {
    header: "Contact us",
    text: "Do you have questions about our training offers, MiniFit, classes or something else entirely? Feel free to send us a message!",
    labelName: "Your name ",
    placeholderName: "Your name",
    labelEmail: "Your email ",
    placeholderEmail: "Email",
    labelMessage: "Message ",
    placeholderMessage: "Message",
    labelButton: "Send message",
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="grid-parent">
      <div className="contact-us section">
        <div className="contact-form">
          <h2>{contactObject.header}</h2>
          <p className="contact-text">{contactObject.text}</p>

          <form className="the-contact-form" onSubmit={submitHandler}>
            <label className="an-input">
              <p>
                {contactObject.labelName}
                <span className="required-star">*</span>
              </p>
              <input
                type="text"
                placeholder={contactObject.placeholderName}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>

            <label className="an-input">
              <p>
                {contactObject.labelEmail}
                <span className="required-star">*</span>
              </p>
              <input
                type="text"
                placeholder={contactObject.placeholderEmail}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label className="an-input">
              <p>
                {contactObject.labelMessage}
                <span className="required-star">*</span>
              </p>
              <textarea
                placeholder={contactObject.placeholderMessage}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </label>

            {/* <Buttons
              buttonText=""
              type="submit"
              icon={button}
              hoverIcon={buttonHover}
              disabled={!(name && email && message)}
              alt="LogIn"
            /> */}

            <ButtonStyled
              text={contactObject.labelButton}
              type="submit"
              disabled={!(name && email && message)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
