import React from 'react';

const ContactList = ({ contacts, handleDeleteContact }) => {
  const handleDelete = contactId => {
    handleDeleteContact(contactId);
  };
  return (
    <div className="section">
      <ul className="contact__list">
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className="list__button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
