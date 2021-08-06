import ContactItem from "../ContactItem";
import "./ContactsList.scss";

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className="contacts-list">
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
