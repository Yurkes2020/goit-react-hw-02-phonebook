import { List, Delete } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <li key={name}>
          {name}:{number}
          <Delete type="button" id={id} onClick={() => onDeleteContact(id)}>
            Delete
          </Delete>
        </li>
      ))}
    </List>
  );
};
