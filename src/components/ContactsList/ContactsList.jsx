import ContactItem from "../ContactItem";

const ContactsList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
