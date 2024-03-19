import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [quantity, setquantity] = useState('');
    const [referance, setReferance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !quantity) {
            alert("Please fill in all fields!");
            return;
        }
        console.log(typeof onAddProduct)
        const newProduct = {
            name: name,
            quantity: parseFloat(quantity),
            referance: referance,
        };
        onAddProduct(newProduct);
        setName('');
        setquantity('');
        setReferance('');
    };

    return (
        <form onSubmit={handleSubmit} className='mt-3 border border-dark p-5'>
            <div className='d-flex justify-content-between'>
            <div className='row'>
                    <label className='me-n5 col-4'>Referance:</label>
                    <input className='form-control col-6' id='referance' type="text" value={referance} onChange={(e) => setReferance(e.target.value)} />
                </div>
                <div className='row'>
                    <label className='me-n5 col-4'>Name:</label>
                    <input className='form-control col-6' id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input className='form-control' type="number" value={quantity} onChange={(e) => setquantity(e.target.value)} />
                </div>
                <button className='btn btn-outline-dark' type="submit">Add Product</button>
            </div>
        </form>
        
    );
};

export default ProductForm;
