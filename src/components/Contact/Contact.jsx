// import style from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <>
      <p>
        <FaUser /> {name}
      </p>
      <p>
        <FaPhoneAlt /> {number}
      </p>
          <button onClick={() => deleteContact(id)}>Delete</button>
    </>
  );
};

export default Contact;