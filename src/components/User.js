import React, { useState } from 'react';

const User = ({ user, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    const handleEdit = () => {
        setIsEditing(true);
        setEditedUser(user); // Mevcut kullanıcının bilgilerini düzenlemek için form alanlarını mevcut değerlerle doldurur
    };

    const handleSave = () => {
        onUpdate(editedUser);
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(user.id);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
                    <input type="text" name="surname" value={editedUser.surname} onChange={handleChange} />
                    <input type="number" name="age" value={editedUser.age} onChange={handleChange} />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <p>Username: {user.name}</p>
                    <p>Surname: {user.surname}</p>
                    <p>Age: {user.age}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default User;
