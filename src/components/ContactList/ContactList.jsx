import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={style.contactList}>
        {contacts.map((contact) => {
          return (
              <li key={contact.id} className={style.contact}>
            <Contact contact={contact} key={contact.id} deleteContact={deleteContact} />
          </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;