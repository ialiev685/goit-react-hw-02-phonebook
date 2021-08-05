const ContactItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number} <input type="button" value="delete" />
    </li>
  );
};

export default ContactItem;
