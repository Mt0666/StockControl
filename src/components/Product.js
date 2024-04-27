import React, { useState } from 'react';
import "../style/product.css"



const Product = ({ product, onUpdate, onDelete, productId }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    const handleEdit = (id) => {
        setIsEditing(true);
        setEditedProduct(product); // Mevcut kullanıcının bilgilerini düzenlemek için form alanlarını mevcut değerlerle doldurur
    };

    const handleSave = (id) => {
        onUpdate( id, editedProduct);
        setIsEditing(false);
    };

    const handleDelete = (id) => {
        onDelete(id);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    return (
        <>
            {isEditing ? (
                <tr>
                    <td>
                        <input type="text" name="referance" value={editedProduct.referance} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
                    </td>
                    <td>
                        <input type='number' name="quantity" value={editedProduct.quantity} onChange={handleChange} />
                    </td>
                    <td>
                        <button className='btn btn-success' onClick={()=>{handleSave(productId)}}>Save</button>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td>
                        {product.referance}
                    </td>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {product.quantity}
                    </td>
                    <td>
                        <button className='btn btn-outline-primary' onClick={()=>{handleEdit(productId)}}>Edit</button>
                        <button className='btn btn-outline-danger' onClick={()=>{handleDelete(productId)}}>Delete</button>
                    </td>
                </tr>
            )}
        </>
    );
};

export default Product;
