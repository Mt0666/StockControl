import React, { useState } from 'react';
import User from './User';
import UserForm from './UserForm';

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Murat", surname: "Turoglu", age: 27 },
        { id: 2, name: "Furkan", surname: "Yıldız", age: 27 },
        { id: 3, name: "Alperen", surname: "Yurtseven", age: 22 }
    ]);

    const handleAddUser = (newUser) => {
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        setUsers([...users, { id: newId, ...newUser }]);
    };

    const handleUpdateUser = (updatedUser) => {
        setUsers(users.map(user =>
            user.id === updatedUser.id ? updatedUser : user
        ));
    };

    const handleDeleteUser = (userId) => {
        setUsers(users.filter(user =>
            user.id !== userId
        ));
    };

    return (
        <div>
            <h2>User List</h2>
            <UserForm onAddUser={handleAddUser} />
            {users.map((user) => (
                <User 
                    key={user.id} 
                    user={user} 
                    onUpdate={handleUpdateUser} 
                    onDelete={() => handleDeleteUser(user.id)} 
                />
            ))}
        </div>
    );
};

export default Users;
