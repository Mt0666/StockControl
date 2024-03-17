import React, { useState } from 'react';

const UserForm = ({ onAddUser }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !surname || !age) {
            alert("Please fill in all fields!");
            return;
        }
        const newUser = {
            name: name,
            surname: surname,
            age: age
        };
        onAddUser(newUser);
        setName('');
        setSurname('');
        setAge('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label>Surname</label>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <br />
            <br />
            <label>Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <br />
            <br />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
