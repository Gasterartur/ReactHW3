import React, { useState } from 'react';

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 }
  ]);

  const handleRemovePerson = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Список приглашенных</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {people.map(person => (
          <li key={person.id} style={{ margin: '10px 0' }}>
            {person.name}, {person.age} лет
            <button onClick={() => handleRemovePerson(person.id)} style={buttonStyle}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const buttonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  fontSize: '14px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#DC3545',
  color: 'white'
};

export default List;