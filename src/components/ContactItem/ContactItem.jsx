const ContactItem = ({ name, number, onDelete, id }) => {
  return (
    <li>
      {name}: {number}{" "}
      <input type="button" value="delete" onClick={() => onDelete(id)} />
    </li>
  );
};

export default ContactItem;
