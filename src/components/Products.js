import React, { useState, useEffect } from 'react';
import Product from './Product';
import ProductForm from './ProductForm'; // ProductForm bileşenini burada içe aktardık
import { Navigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import "../style/product.css"



const Products = () => {

    const isAuthenticated = () => {
        const user = JSON.parse(localStorage.getItem("currentUser")) || {};
    
        return user.username;
      };

    const [products, setProducts] = useState([]);
    const [alert, setAlert] = useState('');
    const [loader, setLoader] = useState(false);
    const [isLogin,setIsLogin] = useState(isAuthenticated());
    const [searchedProducts,setSearchedProducts] =  useState([]);
    
    useEffect(() => {
        if(checkUser()){
           getProducts();
           setLoader(true);
        }else{
          //  window.location.replace('/login');
        }
    }, []);

    useEffect(() => {
       if(alert !== ''){
        setTimeout(()=>{
            setAlert('');
        },2000);
       }
    }, [alert]);

    const checkUser = () => {
        const user = localStorage.getItem("currentUser");

        return user;
      };

    const getProducts = () => {
        fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then((products) => {
            setProducts(products);
            setSearchedProducts(products);
        })
        .catch(err => {setAlert(showAlert(false,"Ürün listesine erişilemiyor"))});
    };


    const showAlert = (isSuccess, message) =>{
        if(isSuccess){
            return (<div className="alert alert-primary text-center" role="alert">
            {message}
          </div>
          )
        }else{
            return (<div className="alert alert-danger text-center" role="alert">
            {message}
          </div>)
        }
    }

    const saveProduct = (product) => {
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                setAlert(showAlert(true, "Ürün eklendi"));
                getProducts();
            })
            .catch((error) => {
                setAlert(showAlert(false, error));
            });
    };

    const editProduct =(id, product)=>{
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json()).catch((error) => {
                setAlert(showAlert(false,error));
            })
            .then(data => {
                setAlert(showAlert(true, "Ürün güncellendi"));
                getProducts();
            })
            .catch((error) => {
                setAlert(showAlert(false,error));
            });
    };

    const removeProduct =(id)=>{
        fetch(`http://localhost:3001/products/${ id }`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                setAlert(showAlert(true, "Ürün silindi."));
                getProducts();
            })
            .catch((error) => {
                setAlert(showAlert(false, error));
            });
    };

    const searchProduct =(searchText) =>{
        setSearchedProducts(products.filter((product)=> {
            return product.name.toLowerCase().includes(searchText.toLowerCase()) || product.referance.toLowerCase().includes(searchText.toLowerCase());
        }))
    }

    return (
        !isLogin ? <Navigate to="/login"/> : <div className='d-flex flex-column'>
        {alert !== '' ? alert : ''}
        <div className='d-flex '>
        <button className='btn btn-outline-danger ms-auto align-self-end me-2' onClick={()=>{localStorage.clear();setIsLogin(false)}}>Orders</button>
            <h2 className='text-center flex-grow-1 m-0'>Product List</h2>
            <button className='btn btn-outline-danger ms-auto align-self-end me-2' onClick={()=>{localStorage.clear();setIsLogin(false)}}>Logout</button>
        </div>
        <ProductForm onAddProduct={saveProduct} /> {/* ProductForm bileşenini burada kullandık */}
        <SearchBar  onSearch={searchProduct}/> 
        <table className="table table-striped">
            <thead >
                <tr>
                    <th scope="col">Referance</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Edit-Delete</th>
                </tr>
            </thead>
            <tbody>
                {searchedProducts.map((product) => (
                    <Product
                        productId={product.id}
                        key={product.id}
                        product={product}
                        onUpdate={editProduct}
                        onDelete={removeProduct}
                    />
                ))}
            </tbody>

        </table>
    </div>
    );
};


export default Products;


