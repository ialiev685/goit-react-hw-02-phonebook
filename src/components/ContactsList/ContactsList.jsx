import ContactItem from "../ContactItem";

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
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
