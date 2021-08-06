import "./ContactItem.scss";

const ContactItem = ({ name, number, onDelete, id }) => {
  return (
    <li className="contacts-list__item">
      <span>
        {name}: {number}
      </span>
      <input
        className="contacts-list__button"
        type="button"
        value="delete"
        onClick={() => onDelete(id)}
      />
    </li>
  );
};

export default ContactItem;
