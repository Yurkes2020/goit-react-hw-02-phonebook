export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={name}>
          {name}:{number}
          <button type="button" id={id} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
