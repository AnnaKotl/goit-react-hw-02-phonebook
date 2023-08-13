import React from 'react';
import { List, ListItem } from './styles/ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <ListItem key={contact.id}>
        <p>{contact.name}: {contact.number}</p>
        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </ListItem>
    ))}
  </List>
);