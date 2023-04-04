import React, { useState, useEffect } from 'react';
import Card from './Card';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {contacts.map(contact => (
          <div className="col-md-4" key={contact.id}>
            <Card
              name={contact.name}
              username={contact.username}
              email={contact.email}
              address={contact.address}
              phone={contact.phone}
              website={contact.website}
              company={contact.company}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
