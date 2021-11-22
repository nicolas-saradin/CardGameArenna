import { useState } from 'react';
import './Contact.css';
import mailbird from './img/mailbird.png';
import kittyContact from './img/kittyContact.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [reveal, handleReveal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReveal(!reveal);
    setEmail('');
    setName('');
    setMessage('');
  };
  return (
    <div className="component">
      {reveal ? (
        <div className="hidden-modal">
          <button type="button" id="close-modal" onClick={handleSubmit}>
            <p id="closing-button">X</p>
          </button>
          <h3 className="typing">Thank you !</h3>
          <img
            className="modalImg"
            src={mailbird}
            alt="raven-delivering-message"
          />
          <p>
            We appreciate your feedback, our team will study it and comply as
            soon as possible !
          </p>
        </div>
      ) : null}

      <form className="form" onSubmit={handleSubmit}>
        <h3>Contact</h3>
        <label htmlFor="name">
          Name :
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="email">
          Email :
          <input
            className="input"
            type="text"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="text">
          Message :
          <textarea
            type="text"
            id="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <img className="contact-pic" src={kittyContact} alt="chaton" />
    </div>
  );
};
export default Contact;
